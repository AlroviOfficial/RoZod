const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const pLimit = require('p-limit');
const { generateZodClientFromOpenAPI } = require('@alexop/openapi-zod-client');
const SwaggerParser = require('@apidevtools/swagger-parser');

const limit = pLimit(2);

const FOLDER_OPENAPI = 'openapi';
const FOLDER_ZODIOS = 'src/endpoints';

const handlebars = require('handlebars').create();

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

console.log('Generating OpenAPI files from Swagger files...');
const urls = fs.readFileSync('urls.txt', 'utf-8')
  .split('\n')
  .filter((url) => url.trim() !== '');
Promise.all(
  urls.map((url) =>
    limit(async () => {
      if (url.trim()) {
        console.log(`Converting ${url}`);
        const [, subdomain, domain] = url.match(/https:\/\/([^\.]+)\.(.+)\//);
        const apiName = url.split('/').slice(-1)[0];
        await util.promisify(exec)(
          `java -jar swagger-codegen-cli-3.0.42.jar generate -l openapi-yaml -i ${url} -o "${FOLDER_OPENAPI}/${subdomain}${apiName}"`,
        );
      }
    }),
  ),
).then(() => {
  console.log('Generating Zodios endpoints...');

  const openApiFiles = fs.readdirSync(FOLDER_OPENAPI).filter((file) => {
    const folderContents = fs.readdirSync(`${FOLDER_OPENAPI}/${file}`);
    return folderContents.some((file) => file.endsWith('.yaml'));
  });

  openApiFiles.forEach(async (folder) => {
    console.log(`Generating Zodios for ${folder}`);

    const fileName = path.basename(folder, '.yaml');
    const matchingUrl = urls.find((url) => {
      const apiVersion = url.match(/\/v(\d+)/)[1];
      return url.includes(`${fileName.replace(/v\d+$/, '')}.roblox.com/docs/json/v${apiVersion}`);
    });

    if (matchingUrl) {
      const [, subdomain, domain] = matchingUrl.match(/https?:\/\/([^\.]+)\.([^\/]+)/);
      const openApiDoc = await SwaggerParser.parse(`${FOLDER_OPENAPI}/${folder}/openapi.yaml`);
      generateZodClientFromOpenAPI({
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
    }
  });

  // Take all the endpoint files and move them to ./lib/endpoints but renamed to their name plus .d.ts
  const endpointFiles = fs.readdirSync(FOLDER_ZODIOS).filter((file) => file.endsWith('.ts'));
  endpointFiles.forEach((file) => {
    const fileName = path.basename(file, '.ts');
    fs.writeFileSync(`./lib/endpoints/${fileName}.d.ts`, fs.readFileSync(`./src/endpoints/${fileName}.ts`, 'utf-8'));
  });
});