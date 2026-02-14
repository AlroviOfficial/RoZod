import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { basename, dirname, join } from 'path';
import { promisify } from 'util';
import { exec as execOld } from 'child_process';
const exec = promisify(execOld);
import pLimit from 'p-limit';
import { generateZodClientFromOpenAPI } from '@alexop/openapi-zod-client';
import parser from '@apidevtools/swagger-parser';

const limit = pLimit(2);

const schemaOverrides = JSON.parse(readFileSync('schema_overrides.json', 'utf-8'));

const FOLDER_OPENAPI = 'openapi';
const FOLDER_ZODIOS = 'src/endpoints';
const FOLDER_OPENCLOUD = 'src/opencloud';

import HB from 'handlebars';
const handlebars = HB.create();

function ensureDirExists(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

handlebars.registerHelper("ifeq", function (a, b, options) {
  if (a === b) {
    return options.fn(this);
  }

  return options.inverse(this);
});
handlebars.registerHelper("ifNotEmptyObj", function (obj, options) {
  if (typeof obj === "object" && Object.keys(obj).length > 0) {
    return options.fn(this);
  }

  return options.inverse(this);
});
handlebars.registerHelper("toCamelCase", function (input) {
  if (/^[a-z][a-zA-Z0-9]*$/.test(input)) {
    return input
  }

  const words = input.split(/[\s_-]/);
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
});
handlebars.registerHelper('toUpperCase', (str) => str.toUpperCase());

handlebars.registerHelper('regexReplace', (str, regex, replace) => {
  return str.replace(new RegExp(regex), replace);
});

handlebars.registerHelper('normalizePathForJS', (method, path) => {
  // Special case handling for endpoints with colons as action indicators like "asset:archive"
  if (path.includes('/:')) {
    const actionMatch = path.match(/\/([^\/]+):([\w-]+)$/);
    if (actionMatch) {
      // Extract the resource and action (e.g., "assetId:archive" -> "assetId" and "archive")
      const resource = actionMatch[1];
      const action = actionMatch[2];

      // Reconstruct path with the action as a separate segment
      path = path.replace(`/${resource}:${action}`, `/${resource}/${action}`);
    }
  }

  // Step 1: Replace colons with underscores, since colons can't be in JS identifiers
  path = path.replace(/:/g, '_');

  // Step 2: Replace hyphens with camelCase
  path = path.replace(/-(\w)/g, (_, c) => c.toUpperCase());
  path = path.replace(/-/g, '');

  // Step 3: Handle standard-datastores and other hyphenated names
  path = path.replace(/standardDatastores/g, 'datastores');
  path = path.replace(/orderedDatastores/g, 'orderedDatastores');

  // Step 4: Remove the version prefix
  path = path.replace(/^\/v\d+\//, '/');

  // Step 5: Replace _ with camelCase for path parameters (e.g., Group_id -> GroupId)
  path = path.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

  // Step 5: Split path into meaningful segments
  const segments = path.split('/').filter(Boolean);

  let finalName = method.toLowerCase();

  // For endpoints with many segments, use a more structured approach
  if (segments.length > 0) {
    finalName += segments[0].charAt(0).toUpperCase() + segments[0].slice(1);

    for (let i = 1; i < segments.length; i++) {
      let segment = segments[i];

      // If this segment is a placeholder (starts with underscore after colon replacement)
      if (segment.startsWith('_')) {
        // Replace with "By" + parameter name with capital first letter
        const paramName = segment.substring(1);
        finalName += 'By' + paramName.charAt(0).toUpperCase() + paramName.slice(1);
      } else {
        // Regular segment - add with capital first letter
        finalName += segment.charAt(0).toUpperCase() + segment.slice(1);
      }
    }
  }

  // Fix any remaining special characters that aren't valid in JS identifiers
  finalName = finalName.replace(/[^\w$]/g, '');

  return finalName;
});

// --- Zod v4 compatibility helpers ------------------------------------------------------------

/**
 * Fix regex patterns that have unescaped forward slashes inside the pattern.
 * e.g. /^(user|group)/\d+$/ -> /^(user|group)\/\d+$/
 */
function fixUnescapedRegexSlashes(content) {
  // Fix the specific pattern from toolbox.ts: /^(user|group)/\d+$/
  return content.replace(
    /\.regex\(\/\^?\(user\|group\)\/\\d\+\$?\/\)/g,
    '.regex(/^(user|group)\\/\\d+$/)'
  );
}

/**
 * Fix invalid enum defaults where the default is not one of the valid enum values.
 * This handles cases like z.enum(['Invalid', 'Legacy', 'Icu']).optional().default('1')
 * or z.enum(["Invalid", "Legacy", "Icu"]).optional().default("1")
 * where '1' is not a valid enum value.
 */
function fixInvalidEnumDefaults(content) {
  // Match z.enum([...]).optional().default('...') or z.enum([...]).optional().default("...")
  // Captures: enum values array, quote char, and the default value
  return content.replace(
    /z\.enum\(\[([^\]]+)\]\)\.optional\(\)\.default\((['"])([^'"]+)\2\)/g,
    (match, enumValuesStr, quoteChar, defaultValue) => {
      // Parse the enum values from the captured group (handles both ' and " quotes)
      const enumValues = enumValuesStr
        .split(',')
        .map(v => v.trim().replace(/^['"]|['"]$/g, ''));

      // Check if the default value is valid
      if (enumValues.includes(defaultValue)) {
        return match; // Default is valid, no change needed
      }

      // Default is invalid, use the first enum value instead
      const firstValue = enumValues[0];
      return `z.enum([${enumValuesStr}]).optional().default(${quoteChar}${firstValue}${quoteChar})`;
    }
  );
}

/**
 * Fix regex patterns with double backslashes before forward slashes.
 * e.g. /^[0-9]+\\/.+/ -> /^[0-9]+\/.+/
 * The double backslash causes the regex to terminate prematurely since \\ is a 
 * literal backslash and the following / ends the regex.
 */
function fixDoubleBackslashInRegex(content) {
  // Match .regex(/.../) patterns and fix \\/ to \/
  return content.replace(
    /\.regex\(\/([^/]*)\\\\\/(.*?)\/\)/g,
    '.regex(/$1\\/$2/)'
  );
}

/**
 * Transform content by rewriting single-argument z.record(valueSchema) to valueSchema
 * Only rewrites when the argument list to z.record has no top-level comma.
 */
function fixZodRecordSingleArg(content) {
  const needle = 'z.record(';
  let output = '';
  let cursor = 0;

  while (true) {
    const start = content.indexOf(needle, cursor);
    if (start === -1) {
      output += content.slice(cursor);
      break;
    }

    // Copy everything up to but not including 'z.record('
    output += content.slice(cursor, start);

    // Parse argument list until matching ')'
    let i = start + needle.length; // points at first char after '('
    let parenDepth = 1; // we are inside the first '('
    let inSingle = false;
    let inDouble = false;
    let inTemplate = false;
    let prevChar = '';
    let sawTopLevelComma = false;

    // Capture raw args for possible rewrite
    const argsStart = i;

    while (i < content.length && parenDepth > 0) {
      const ch = content[i];

      // Handle string/template contexts to ignore commas inside them
      if (!inDouble && !inTemplate && ch === "'" && prevChar !== '\\') {
        inSingle = !inSingle;
      } else if (!inSingle && !inTemplate && ch === '"' && prevChar !== '\\') {
        inDouble = !inDouble;
      } else if (!inSingle && !inDouble && ch === '`' && prevChar !== '\\') {
        inTemplate = !inTemplate;
      }

      if (!inSingle && !inDouble && !inTemplate) {
        if (ch === '(') parenDepth += 1;
        else if (ch === ')') parenDepth -= 1;
        else if (ch === ',' && parenDepth === 1) {
          // Comma at top-level of z.record call => already has two args
          sawTopLevelComma = true;
        }
      }

      if (parenDepth === 0) break;
      prevChar = ch;
      i += 1;
    }

    const args = content.slice(argsStart, i);
    const trimmed = args.trim();

    if (sawTopLevelComma) {
      // Already two-argument form: keep original call intact
      output += 'z.record(' + args + ')';
    } else {
      // Single-argument form: z.record(valueSchema) -> valueSchema
      output += trimmed.length > 0 ? trimmed : 'z.unknown()';
    }

    cursor = i + 1; // move past closing ')'
  }

  return output;
}

/**
 * Apply schema overrides from schema_overrides.json to fix incorrect types in the OpenAPI spec.
 * Mutates the openApiDoc in-place before it's passed to the Zod code generator.
 */
function applySchemaOverrides(openApiDoc, endpointName) {
  const overrides = schemaOverrides[endpointName];
  if (!overrides) return;

  const schemas = openApiDoc.components?.schemas || openApiDoc.definitions;
  if (!schemas) return;

  for (const [schemaName, propertyOverrides] of Object.entries(overrides)) {
    const schema = schemas[schemaName];
    if (!schema?.properties) {
      console.warn(`Schema override: "${schemaName}" not found in ${endpointName}`);
      continue;
    }

    for (const [propName, propOverride] of Object.entries(propertyOverrides)) {
      if (!(propName in schema.properties)) {
        console.warn(`Schema override: "${schemaName}.${propName}" not found in ${endpointName}`);
        continue;
      }

      schema.properties[propName] = propOverride;
      console.log(`Schema override: ${endpointName} ${schemaName}.${propName}`);
    }
  }
}

function listFilesRecursive(dirPath) {
  const entries = readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dirPath, entry.name);
    if (entry.isDirectory()) files.push(...listFilesRecursive(full));
    else files.push(full);
  }
  return files;
}

function applyZodRecordFixToFile(filePath) {
  if (!/\.(ts|d\.ts)$/.test(filePath)) return;
  try {
    const original = readFileSync(filePath, 'utf-8');
    let fixed = original;

    if (fixed.includes('z.record(')) {
      fixed = fixZodRecordSingleArg(fixed);
    }

    if (fixed.includes('(user|group)')) {
      fixed = fixUnescapedRegexSlashes(fixed);
    }

    if (fixed.includes('z.enum(') && fixed.includes('.optional().default(')) {
      fixed = fixInvalidEnumDefaults(fixed);
    }

    if (fixed.includes('\\\\/')) {
      fixed = fixDoubleBackslashInRegex(fixed);
    }

    if (fixed !== original) {
      writeFileSync(filePath, fixed, 'utf-8');
      console.log(`Patched ${filePath}`);
    }
  } catch (e) {
    console.warn(`Failed to patch ${filePath}: ${e}`);
  }
}

function applyZodRecordFixInDir(dirPath) {
  try {
    const files = listFilesRecursive(dirPath);
    for (const f of files) applyZodRecordFixToFile(f);
  } catch (e) {
    // Directory may not exist yet
  }
}
// ------------------------------------------------------------------------------------------------

const openCloudV1Apis = [
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/universes-api/v1.json',
    name: 'universes',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/messaging-service/v1.json',
    name: 'messaging',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/datastores-api/v1.json',
    name: 'datastores',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/datastores-api/ordered-v1.json',
    name: 'datastores-ordered',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/assets/v1.json',
    name: 'assets',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/asset-permissions-api/v1.json',
    name: 'asset-permissions',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/developer-products-api/v1.json',
    name: 'developer-products',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/game-passes-http-service/v1.json',
    name: 'game-passes',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/open-eval-api/v1.json',
    name: 'open-eval',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/secrets-store-service/v1.json',
    name: 'secrets-store',
    version: 'v1',
  },
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/toolbox-service/v1.json',
    name: 'toolbox',
    version: 'v1',
  }
];

const openCloudV2Apis = [
  {
    url: 'https://github.com/Roblox/creator-docs/blob/main/content/en-us/reference/cloud/cloud.docs.json',
    name: 'cloud',
    version: 'v2',
    baseUrl: 'https://apis.roblox.com'
  }
];

async function downloadGithubRawFile(githubUrl) {
  const rawUrl = githubUrl
    .replace('github.com', 'raw.githubusercontent.com')
    .replace('/blob/', '/');

  console.log(`Downloading ${rawUrl}`);
  const response = await fetch(rawUrl);
  return await response.json();
}

async function processOpenCloudApi(apiDef) {
  console.log(`Processing OpenCloud API: ${apiDef.name} ${apiDef.version}`);

  const outputFolder = `${FOLDER_OPENCLOUD}/${apiDef.version}`;
  ensureDirExists(outputFolder);

  try {
    const openApiDoc = await downloadGithubRawFile(apiDef.url);

    if (apiDef.name === 'assets' || apiDef.name === 'universes') {
      const paths = openApiDoc.paths;
      for (const path in paths) {
        if (!path.includes(':')) {
          continue
        }
        for (const method in paths[path]) {
          if (paths[path][method].operationId) {
            continue
          }
          // Create a simple operationId from the method and path
          const segments = path
            .split('/')
            .filter(Boolean)
            .map(s => s.replace(/^:/, ''))
            .join('_');
          paths[path][method].operationId = `${method}_${segments}`;
        }
      }
    }

    // Extract base URL from the OpenAPI spec's servers array, falling back to apiDef.baseUrl
    const baseUrl = openApiDoc.servers?.[0]?.url?.replace(/\/+$/, '') || apiDef.baseUrl;

    await generateZodClientFromOpenAPI({
      openApiDoc,
      templatePath: './opencloud_template.hbs',
      distPath: `${outputFolder}/${apiDef.name}.ts`,
      handlebars,
      options: {
        baseUrl,
        withDeprecatedEndpoints: true,
        withImplicitRequiredProps: true,
        withDefaultValues: true,
      },
    });

    // Apply Zod v4 record fix to the generated file before copying to lib
    applyZodRecordFixToFile(`${outputFolder}/${apiDef.name}.ts`);

    // Copy to lib directory for distribution
    ensureDirExists(`./lib/opencloud/${apiDef.version}`);
    writeFileSync(
      `./lib/opencloud/${apiDef.version}/${apiDef.name}.d.ts`,
      readFileSync(`${outputFolder}/${apiDef.name}.ts`, 'utf-8')
    );

    console.log(`Successfully generated ${apiDef.name} ${apiDef.version}`);
  } catch (error) {
    console.error(`Error generating OpenCloud API for ${apiDef.name} ${apiDef.version}: ${error}`);
  }
}

console.log('Generating OpenAPI files from Swagger files...');
const urls = readFileSync('urls.txt', 'utf-8')
  .split('\n')
  .filter((url) => url.trim() !== '');
Promise.all(
  urls.map((url) =>
    limit(async () => {
      if (url.trim()) {
        console.log(`Converting ${url}`);
        const endpointName = url.match(/\/legacy\/([^/]+)\/v\d+/)[1];
        const apiName = url.split('/').slice(-1)[0].replace(/\.json/, '');
        await promisify(exec)(
          `java -jar swagger-codegen-cli-3.0.42.jar generate -l openapi-yaml -i ${url} -o "${FOLDER_OPENAPI}/${endpointName}${apiName}"`,
        );
      }
    }),
  ),
).then(async () => {
  console.log('Generating Zodios endpoints...');

  // Create necessary directories
  ensureDirExists(FOLDER_ZODIOS);
  ensureDirExists(`${FOLDER_OPENCLOUD}/v1`);
  ensureDirExists(`${FOLDER_OPENCLOUD}/v2`);
  ensureDirExists('./lib/opencloud/v1');
  ensureDirExists('./lib/opencloud/v2');

  const openApiFiles = readdirSync(FOLDER_OPENAPI).filter((file) => {
    const folderContents = readdirSync(`${FOLDER_OPENAPI}/${file}`);
    return folderContents.some((file) => file.endsWith('.yaml'));
  });

  await Promise.all(openApiFiles.map(async (folder) => {
    console.log(`Generating Zodios for ${folder}`);

    const fileName = basename(folder, '.yaml');
    const matchingUrl = urls.find((url) => {
      const apiVersion = url.match(/\/v(\d+)/)[1];
      // new url is "https://prod.docsiteassets.roblox.com/assets/en-us/cloud/legacy/${fileName.replace(/v\d+$/, '')}/v${apiVersion}"
      return url.includes(`https://prod.docsiteassets.roblox.com/assets/en-us/cloud/legacy/${fileName.replace(/v\d+$/, '')}/v${apiVersion}`);
    });

    if (matchingUrl) {
      const subdomain = matchingUrl.match(/\/legacy\/([^/]+)\/v\d+/)[1];
      const domain = 'roblox.com';
      try {
        const openApiDoc = await parser.parse(`${FOLDER_OPENAPI}/${folder}/openapi.yaml`);
        applySchemaOverrides(openApiDoc, fileName);
        await generateZodClientFromOpenAPI({
          openApiDoc: openApiDoc,
          templatePath: './template.hbs',
          distPath: `${FOLDER_ZODIOS}/${fileName}.ts`,
          handlebars,
          options: {
            baseUrl: `https://${subdomain}.${domain}`,
            withDeprecatedEndpoints: true,
            withImplicitRequiredProps: true,
            withDefaultValues: true,
            withAlias: (path, method, OpenAPIOperation) => {
              // Returns a string that will be used as the alias for the endpoint
              // Example: GET /v1/private-servers/enabled-in-universe/:universeId => getPrivateServersEnabledInUniverse
              const url = path.replace(/\/v\d+\//, '/').replace(/\/:(\w+)/g, '/$1');
              const urlParts = url.split(/[/-]/).filter((part) => part !== '');
              const methodParts = method.split(' ');
              const methodPart = methodParts[0].toLowerCase();
              const endpointName = urlParts
                .map((part) => part.replace(/(\w)(\w*)/, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()))
                .join('')
                .replace(/[{}]/g, '');
              return `${methodPart}${endpointName}`;
            },
          },
        });
        // Apply Zod v4 record fix to the generated endpoint file
        applyZodRecordFixToFile(`${FOLDER_ZODIOS}/${fileName}.ts`);
      } catch (error) {
        console.error(`Error generating Zodios for ${folder}: ${error}`);
      }
    }
    return folder;
  }));

  // Take all the endpoint files and move them to ./lib/endpoints but renamed to their name plus .d.ts
  const endpointFiles = readdirSync(FOLDER_ZODIOS).filter((file) => file.endsWith('.ts'));
  endpointFiles.forEach((file) => {
    const fileName = basename(file, '.ts');
    ensureDirExists('./lib/endpoints');
    writeFileSync(`./lib/endpoints/${fileName}.d.ts`, readFileSync(`./src/endpoints/${fileName}.ts`, 'utf-8'));
  });

  // Process OpenCloud APIs
  console.log('Generating OpenCloud API endpoints...');
  await Promise.all([
    ...openCloudV1Apis.map(apiDef => processOpenCloudApi(apiDef)),
    ...openCloudV2Apis.map(apiDef => processOpenCloudApi(apiDef))
  ]);

  // Final sweep: ensure all generated files (src and lib) are patched
  applyZodRecordFixInDir(FOLDER_ZODIOS);
  applyZodRecordFixInDir(FOLDER_OPENCLOUD);
  applyZodRecordFixInDir('./lib/endpoints');
  applyZodRecordFixInDir('./lib/opencloud');

  console.log('All endpoints generated successfully!');
});