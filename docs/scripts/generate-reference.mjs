/**
 * Generates Starlight-compatible markdown reference pages from RoZod endpoint source files.
 *
 * Parses the TypeScript source files using regex to extract endpoint definitions
 * and their associated Zod schemas, then generates markdown with fully resolved
 * type definitions (nested types are expanded inline).
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const SRC = join(ROOT, 'src');
const DOCS_CONTENT = join(__dirname, '..', 'src', 'content', 'docs', 'reference');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fileNameToTitle(filename) {
  const name = filename.replace(/\.ts$/, '');
  const match = name.match(/^(.+?)(v\d+)$/);
  if (!match) return name.charAt(0).toUpperCase() + name.slice(1);
  const [, service, version] = match;
  const spaced = service
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/accountinformation/i, 'Account Information')
    .replace(/accountsettings/i, 'Account Settings')
    .replace(/adconfiguration/i, 'Ad Configuration')
    .replace(/assetdelivery/i, 'Asset Delivery')
    .replace(/clientsettings/i, 'Client Settings')
    .replace(/economycreatorstats/i, 'Economy Creator Stats')
    .replace(/engagementpayouts/i, 'Engagement Payouts')
    .replace(/gameinternationalization/i, 'Game Internationalization')
    .replace(/gamejoin/i, 'Game Join')
    .replace(/itemconfiguration/i, 'Item Configuration')
    .replace(/localizationtables/i, 'Localization Tables')
    .replace(/premiumfeatures/i, 'Premium Features')
    .replace(/privatemessages/i, 'Private Messages')
    .replace(/thumbnailsresizer/i, 'Thumbnails Resizer')
    .replace(/translationroles/i, 'Translation Roles')
    .replace(/twostepverification/i, 'Two Step Verification');
  const titled = spaced.replace(/\b\w/g, (c) => c.toUpperCase());
  return `${titled} ${version}`;
}

function ocFileNameToTitle(filename) {
  return filename
    .replace(/\.ts$/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function fileNameToSlug(filename) {
  return filename
    .replace(/\.ts$/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])(\d)/g, '$1-$2')
    .toLowerCase();
}

/** Pretty-print a schema variable name: strip Roblox prefixes, add spaces */
function prettySchemaName(name) {
  return name
    .replace(/^Roblox_\w+_Api_/i, '')
    .replace(/^Roblox_\w+_Client_/i, '')
    .replace(/^Roblox_Web_WebAPI_Models_/i, '')
    .replace(/^Roblox_Web_WebAPI_/i, '')
    .replace(/_/g, '');
}

// ---------------------------------------------------------------------------
// Schema parsing — builds a tree of types that can be rendered recursively
// ---------------------------------------------------------------------------

/**
 * Parse all `const Name = z.xxx(...)` declarations in a source file.
 * Returns a Map<string, SchemaNode> where SchemaNode describes the structure.
 *
 * SchemaNode shapes:
 *   { kind: 'object', fields: [{ name, node, optional, nullable, default }] }
 *   { kind: 'array', element: SchemaNode }
 *   { kind: 'primitive', type: string }  // "string", "number", "integer", "boolean"
 *   { kind: 'enum', values: string[] }
 *   { kind: 'union', members: SchemaNode[] }
 *   { kind: 'literal', value: string }
 *   { kind: 'ref', name: string }       // reference to another schema by variable name
 *   { kind: 'unknown' }
 */
function parseAllSchemas(source) {
  const schemas = new Map();

  // Match all `const Name = z.xxx(` or `const Name = OtherName;` or `const Name = OtherName.partial();`
  const constPattern = /const\s+(\w+)\s*=\s*/g;
  let m;
  while ((m = constPattern.exec(source)) !== null) {
    const name = m[1];
    const afterEquals = source.slice(m.index + m[0].length);
    const node = parseZodExpression(afterEquals, source, m.index + m[0].length);
    if (node) {
      schemas.set(name, node);
    }
  }

  return schemas;
}

/** Parse a zod expression starting at position, return a SchemaNode */
function parseZodExpression(expr, fullSource, absPos) {
  const trimmed = expr.trimStart();

  // z.object({...})
  if (trimmed.startsWith('z.object(')) {
    const openParen = absPos + (expr.length - trimmed.length) + 'z.object('.length;
    const blockStart = fullSource.indexOf('{', openParen);
    if (blockStart === -1) return { kind: 'unknown' };
    const block = extractBalancedBlock(fullSource, blockStart);
    if (!block) return { kind: 'unknown' };
    return parseObjectBlock(block, fullSource);
  }

  // z.array(...)
  if (trimmed.startsWith('z.array(')) {
    const inner = extractParenContent(trimmed, 'z.array(');
    if (inner) {
      const elementNode = parseZodExpressionStr(inner, fullSource);
      return { kind: 'array', element: elementNode };
    }
  }

  // z.enum([...])
  if (trimmed.startsWith('z.enum(')) {
    const vals = trimmed.match(/z\.enum\(\[([^\]]+)\]\)/)?.[1];
    if (vals) {
      return { kind: 'enum', values: vals.match(/'([^']+)'/g)?.map((v) => v.replace(/'/g, '')) ?? [] };
    }
  }

  // z.union([...]) or z.discriminatedUnion(...)
  if (trimmed.startsWith('z.union(') || trimmed.startsWith('z.discriminatedUnion(')) {
    const literals = [...trimmed.matchAll(/z\.literal\(([^)]+)\)/g)].map((lm) => lm[1]);
    if (literals.length > 0) {
      return { kind: 'union', members: literals.map((v) => ({ kind: 'literal', value: v })) };
    }
    return { kind: 'primitive', type: 'union' };
  }

  // z.literal(...)
  if (trimmed.startsWith('z.literal(')) {
    const val = trimmed.match(/z\.literal\(([^)]+)\)/)?.[1];
    return { kind: 'literal', value: val ?? 'unknown' };
  }

  // z.string(), z.number(), z.boolean(), z.any(), etc.
  if (trimmed.startsWith('z.string(')) return { kind: 'primitive', type: 'string' };
  if (trimmed.startsWith('z.number(')) {
    return { kind: 'primitive', type: trimmed.includes('.int()') ? 'integer' : 'number' };
  }
  if (trimmed.startsWith('z.boolean(')) return { kind: 'primitive', type: 'boolean' };
  if (trimmed.startsWith('z.any(')) return { kind: 'primitive', type: 'any' };
  if (trimmed.startsWith('z.unknown(')) return { kind: 'primitive', type: 'unknown' };
  if (trimmed.startsWith('z.void(')) return { kind: 'primitive', type: 'void' };
  if (trimmed.startsWith('z.instanceof(')) {
    const cls = trimmed.match(/z\.instanceof\((\w+)\)/)?.[1];
    return { kind: 'primitive', type: cls ?? 'instance' };
  }
  if (trimmed.startsWith('z.record(')) return { kind: 'primitive', type: 'Record<string, unknown>' };

  // Variable reference: `OtherSchemaName` possibly followed by `.partial()` etc.
  const refMatch = trimmed.match(/^(\w+)/);
  if (refMatch && !trimmed.startsWith('z.')) {
    return { kind: 'ref', name: refMatch[1] };
  }

  return { kind: 'unknown' };
}

/** Parse a zod expression from a string (no absolute position tracking needed) */
function parseZodExpressionStr(str, fullSource) {
  const trimmed = str.trim();

  if (trimmed.startsWith('z.object(')) {
    // Find the block in the string itself
    const braceStart = trimmed.indexOf('{');
    if (braceStart !== -1) {
      const block = extractBalancedBlock(trimmed, braceStart);
      if (block) return parseObjectBlock(block, fullSource || trimmed);
    }
    return { kind: 'primitive', type: 'object' };
  }
  if (trimmed.startsWith('z.array(')) {
    const inner = extractParenContent(trimmed, 'z.array(');
    if (inner) return { kind: 'array', element: parseZodExpressionStr(inner, fullSource) };
    return { kind: 'primitive', type: 'array' };
  }
  if (trimmed.startsWith('z.enum(')) {
    const vals = trimmed.match(/z\.enum\(\[([^\]]+)\]\)/)?.[1];
    if (vals) return { kind: 'enum', values: vals.match(/'([^']+)'/g)?.map((v) => v.replace(/'/g, '')) ?? [] };
  }
  if (trimmed.startsWith('z.union(') || trimmed.startsWith('z.discriminatedUnion(')) {
    const literals = [...trimmed.matchAll(/z\.literal\(([^)]+)\)/g)].map((lm) => lm[1]);
    if (literals.length > 0) return { kind: 'union', members: literals.map((v) => ({ kind: 'literal', value: v })) };
    return { kind: 'primitive', type: 'union' };
  }
  if (trimmed.startsWith('z.literal(')) {
    const val = trimmed.match(/z\.literal\(([^)]+)\)/)?.[1];
    return { kind: 'literal', value: val ?? 'unknown' };
  }
  if (trimmed.startsWith('z.string(')) return { kind: 'primitive', type: 'string' };
  if (trimmed.startsWith('z.number(')) {
    return { kind: 'primitive', type: trimmed.includes('.int()') ? 'integer' : 'number' };
  }
  if (trimmed.startsWith('z.boolean(')) return { kind: 'primitive', type: 'boolean' };
  if (trimmed.startsWith('z.any(')) return { kind: 'primitive', type: 'any' };
  if (trimmed.startsWith('z.record(')) return { kind: 'primitive', type: 'Record<string, unknown>' };
  if (trimmed.startsWith('z.instanceof(')) {
    const cls = trimmed.match(/z\.instanceof\((\w+)\)/)?.[1];
    return { kind: 'primitive', type: cls ?? 'instance' };
  }

  const refMatch = trimmed.match(/^(\w+)/);
  if (refMatch && !trimmed.startsWith('z.')) {
    return { kind: 'ref', name: refMatch[1] };
  }

  return { kind: 'unknown' };
}

/** Parse the fields inside a z.object({...}) block string */
function parseObjectBlock(block, fullSource) {
  // block is "{...}" — the inner content between the braces
  const inner = block.slice(1, -1);
  const fields = [];

  // We need to handle nested objects/arrays, so we parse field by field
  // Pattern: fieldName: <expression>,
  let pos = 0;
  while (pos < inner.length) {
    // Skip whitespace
    while (pos < inner.length && /\s/.test(inner[pos])) pos++;
    if (pos >= inner.length) break;

    // Try to match a field name followed by ':'
    const fieldMatch = inner.slice(pos).match(/^(\w+)\s*:\s*/);
    if (!fieldMatch) {
      pos++;
      continue;
    }

    const fieldName = fieldMatch[1];
    pos += fieldMatch[0].length;

    // Now extract the value expression — need to handle balanced parens/braces/brackets
    const valueStart = pos;
    let depth = 0;
    let inString = false;
    let stringChar = '';

    while (pos < inner.length) {
      const ch = inner[pos];
      if (inString) {
        if (ch === stringChar && inner[pos - 1] !== '\\') inString = false;
      } else {
        if (ch === "'" || ch === '"' || ch === '`') {
          inString = true;
          stringChar = ch;
        } else if (ch === '(' || ch === '{' || ch === '[') {
          depth++;
        } else if (ch === ')' || ch === '}' || ch === ']') {
          if (depth === 0) break; // hit the outer closing brace
          depth--;
        } else if (ch === ',' && depth === 0) {
          break;
        }
      }
      pos++;
    }

    const valueStr = inner.slice(valueStart, pos).trim().replace(/,\s*$/, '');
    pos++; // skip comma

    // Determine modifiers
    const optional = /\.optional\(\)/.test(valueStr) || /\.nullish\(\)/.test(valueStr);
    const nullable = /\.nullable\(\)/.test(valueStr) || /\.nullish\(\)/.test(valueStr);
    const defaultMatch = valueStr.match(/\.default\(([^)]+)\)/);
    const defaultVal = defaultMatch ? defaultMatch[1].replace(/'/g, '"') : null;

    // Strip modifiers to get the core expression
    const coreStr = valueStr
      .replace(/\.optional\(\)/g, '')
      .replace(/\.nullish\(\)/g, '')
      .replace(/\.nullable\(\)/g, '')
      .replace(/\.default\([^)]*\)/g, '')
      .replace(/\.int\(\)/g, '')
      .replace(/\.min\(\d+\)/g, '')
      .replace(/\.max\(\d+\)/g, '')
      .replace(/\.datetime\([^)]*\)/g, '')
      .replace(/\.url\(\)/g, '')
      .replace(/\.uuid\(\)/g, '')
      .replace(/\.regex\([^)]*\)/g, '')
      .replace(/\.partial\(\)/g, '')
      .trim();

    const node = parseZodExpressionStr(coreStr, fullSource);

    fields.push({ name: fieldName, node, optional, nullable, default: defaultVal });
  }

  return { kind: 'object', fields };
}

/** Extract content inside a function call like `z.array(...)` — handles nested parens */
function extractParenContent(str, prefix) {
  const start = str.indexOf(prefix);
  if (start === -1) return null;
  let pos = start + prefix.length;
  let depth = 1;
  const contentStart = pos;
  while (pos < str.length && depth > 0) {
    if (str[pos] === '(') depth++;
    else if (str[pos] === ')') depth--;
    if (depth > 0) pos++;
  }
  // Now strip trailing method chains from the inner content:
  // e.g. z.array(z.string()).nullable() — inner is just "z.string()"
  return str.slice(contentStart, pos);
}

function extractBalancedBlock(source, start) {
  let depth = 0;
  let i = start;
  while (i < source.length) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
    i++;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Rendering schemas to TypeScript-like markdown
// ---------------------------------------------------------------------------

/**
 * Render a SchemaNode as a TypeScript-like type definition in markdown.
 * For objects, renders a field table with nested types expanded.
 * `schemas` is the Map from parseAllSchemas for resolving refs.
 * `depth` prevents infinite recursion.
 */
function renderSchemaAsTS(node, schemas, depth = 0, seen = new Set()) {
  if (depth > 4) return '`object`'; // safety limit

  switch (node.kind) {
    case 'primitive':
      return `\`${node.type}\``;

    case 'literal':
      return `\`${node.value}\``;

    case 'enum':
      return `\`${node.values.map((v) => `"${v}"`).join(' | ')}\``;

    case 'union':
      return `\`${node.members.map((m) => (m.kind === 'literal' ? m.value : 'unknown')).join(' | ')}\``;

    case 'array': {
      // Check if element resolves to an object — use a fresh seen set each time
      const resolved = resolveRef(node.element, schemas, new Set(seen));
      if (resolved?.kind === 'object' && resolved.fields.length > 0) {
        return null; // signal to caller to render as expanded block
      }
      const elRendered = renderSchemaAsTS(node.element, schemas, depth, new Set(seen));
      return `\`${stripBackticks(elRendered)}[]\``;
    }

    case 'ref': {
      const resolved = resolveRef(node, schemas, seen);
      if (resolved) {
        return renderSchemaAsTS(resolved, schemas, depth, seen);
      }
      return `\`${prettySchemaName(node.name)}\``;
    }

    case 'object':
      return null; // signal to render as a field table

    default:
      return '`unknown`';
  }
}

function resolveRef(node, schemas, seen = new Set()) {
  if (node.kind !== 'ref') return node;
  if (seen.has(node.name)) return null; // prevent cycles
  seen.add(node.name);
  const target = schemas.get(node.name);
  if (!target) return null;
  if (target.kind === 'ref') return resolveRef(target, schemas, seen);
  return target;
}

function stripBackticks(s) {
  return s?.replace(/^`|`$/g, '') ?? 'unknown';
}

/**
 * Render a schema node as markdown — either a field table (for objects) or inline type.
 * Returns an array of markdown lines.
 */
function renderSchemaBlock(node, schemas, depth = 0, indent = '', seen = new Set()) {
  if (depth > 4) return ['`object`'];

  // Resolve refs
  let resolved = node;
  if (node.kind === 'ref') {
    resolved = resolveRef(node, schemas, new Set(seen)) ?? node;
  }

  const lines = [];

  if (resolved.kind === 'object' && resolved.fields.length > 0) {
    lines.push(`${indent}| Field | Type | Description |`);
    lines.push(`${indent}|-------|------|-------------|`);

    for (const field of resolved.fields) {
      let fieldNode = field.node;
      if (fieldNode.kind === 'ref') {
        fieldNode = resolveRef(fieldNode, schemas, new Set(seen)) ?? fieldNode;
      }

      // Build modifier suffix that gets appended to the type inline
      const typeSuffix = [];
      if (field.nullable) typeSuffix.push('null');
      if (field.optional) typeSuffix.push('undefined');
      const suffixStr = typeSuffix.length > 0 ? ` \\| ${typeSuffix.join(' \\| ')}` : '';
      const defaultStr = field.default ? ` *(default: ${field.default})* ` : '';

      // For simple types, just render inline
      const inlineType = renderSchemaAsTS(fieldNode, schemas, depth + 1, new Set(seen));
      if (inlineType !== null) {
        const typeWithMods = `\`${stripBackticks(inlineType)}${suffixStr}\``;
        lines.push(`${indent}| \`${field.name}\` | ${typeWithMods}${defaultStr} | |`);
      } else if (fieldNode.kind === 'object') {
        lines.push(`${indent}| \`${field.name}\` | \`object${suffixStr}\`${defaultStr} | See below |`);
      } else if (fieldNode.kind === 'array') {
        const elResolved = resolveRef(fieldNode.element, schemas, new Set(seen)) ?? fieldNode.element;
        if (elResolved.kind === 'object') {
          lines.push(`${indent}| \`${field.name}\` | \`object[]${suffixStr}\`${defaultStr} | See below |`);
        } else {
          const elType = renderSchemaAsTS(fieldNode.element, schemas, depth + 1, new Set(seen));
          lines.push(`${indent}| \`${field.name}\` | \`${stripBackticks(elType)}[]${suffixStr}\`${defaultStr} | |`);
        }
      }
    }

    // Now render nested object/array-of-object fields as sub-sections
    for (const field of resolved.fields) {
      let fieldNode = field.node;
      if (fieldNode.kind === 'ref') {
        fieldNode = resolveRef(fieldNode, schemas, new Set(seen)) ?? fieldNode;
      }

      if (fieldNode.kind === 'object' && fieldNode.fields.length > 0) {
        lines.push('');
        lines.push(`${indent}**\`${field.name}\`** fields:`);
        lines.push('');
        lines.push(...renderSchemaBlock(fieldNode, schemas, depth + 1, indent, new Set(seen)));
      } else if (fieldNode.kind === 'array') {
        const elResolved = resolveRef(fieldNode.element, schemas, new Set(seen)) ?? fieldNode.element;
        if (elResolved.kind === 'object' && elResolved.fields.length > 0) {
          lines.push('');
          lines.push(`${indent}**\`${field.name}[]\`** item fields:`);
          lines.push('');
          lines.push(...renderSchemaBlock(elResolved, schemas, depth + 1, indent, new Set(seen)));
        }
      }
    }
  } else if (resolved.kind === 'array') {
    const elResolved = resolveRef(resolved.element, schemas, new Set(seen)) ?? resolved.element;
    if (elResolved.kind === 'object' && elResolved.fields.length > 0) {
      lines.push(`Array of objects:`);
      lines.push('');
      lines.push(...renderSchemaBlock(elResolved, schemas, depth + 1, indent, new Set(seen)));
    } else {
      const elType = renderSchemaAsTS(resolved.element, schemas, depth + 1, new Set(seen));
      lines.push(`Type: \`${stripBackticks(elType)}[]\``);
    }
  } else {
    const inline = renderSchemaAsTS(resolved, schemas, depth, new Set(seen));
    lines.push(`Type: ${inline ?? '`unknown`'}`);
  }

  return lines;
}

// ---------------------------------------------------------------------------
// Endpoint parsing
// ---------------------------------------------------------------------------

function parseEndpointFile(filePath) {
  const source = readFileSync(filePath, 'utf-8');
  const endpoints = [];
  const schemas = parseAllSchemas(source);

  const exportPattern = /\/\*\*([\s\S]*?)\*\/\s*export\s+const\s+(\w+)\s*=\s*endpoint\(\{/g;
  let match;

  while ((match = exportPattern.exec(source)) !== null) {
    const jsdoc = match[1];
    const name = match[2];
    const startIdx = match.index + match[0].length;
    const block = extractBalancedBlock(source, startIdx - 1);
    if (!block) continue;

    const ep = parseEndpointBlock(block, jsdoc, name, schemas, source);
    if (ep) endpoints.push(ep);
  }

  return endpoints;
}

function parseEndpointBlock(block, jsdoc, name, schemas, fullSource) {
  const method = block.match(/method:\s*'(\w+)'/)?.[1] ?? 'GET';
  const path = block.match(/path:\s*'([^']+)'/)?.[1] ?? '';
  const baseUrl = block.match(/baseUrl:\s*'([^']+)'/)?.[1] ?? '';

  const scopesMatch = block.match(/scopes:\s*\[([^\]]*)\]/);
  const scopes = scopesMatch
    ? scopesMatch[1].match(/'([^']+)'/g)?.map((s) => s.replace(/'/g, '')) ?? []
    : [];

  const summary = jsdoc.match(/@summary\s+(.+)/)?.[1]?.trim() ?? '';
  const api = jsdoc.match(/@api\s+(.+)/)?.[1]?.trim() ?? '';
  const deprecated = /@deprecated/.test(jsdoc);
  const description = extractJSDocDescription(jsdoc);
  const paramDocs = extractJSDocParams(jsdoc);
  const seeLinks = [...jsdoc.matchAll(/@see\s+(.+)/g)].map((m) => m[1].trim());

  const parameters = extractParameters(block);
  const bodyNode = extractBodyNode(block, schemas);
  const responseNode = extractResponseNode(block, schemas);
  const errors = extractErrors(block);

  return {
    name,
    method,
    path,
    baseUrl,
    scopes,
    summary: summary || description,
    api,
    deprecated,
    seeLinks,
    paramDocs,
    parameters,
    bodyNode,
    responseNode,
    schemas,
    errors,
  };
}

function extractJSDocDescription(jsdoc) {
  const lines = jsdoc.split('\n').map((l) => l.replace(/^\s*\*\s?/, '').trim());
  const descLines = [];
  for (const line of lines) {
    if (line.startsWith('@')) break;
    if (line.startsWith('**Lua equivalent') || line.startsWith('**Scopes')) continue;
    descLines.push(line);
  }
  return descLines
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/\*\*([^*]+)\*\*\s*·?\s*`[^`]*`\s*/g, '')
    .trim();
}

function extractJSDocParams(jsdoc) {
  const params = {};
  const paramPattern = /@param\s+(\w+)\s+([\s\S]*?)(?=@\w|$)/g;
  let m;
  while ((m = paramPattern.exec(jsdoc)) !== null) {
    params[m[1]] = m[2].replace(/\s*\*\s*/g, ' ').replace(/\s+/g, ' ').trim();
  }
  return params;
}

function extractParameters(block) {
  const paramsMatch = block.match(/parameters:\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/);
  if (!paramsMatch) return [];
  const paramsBlock = paramsMatch[1];
  const params = [];
  const paramPattern = /(\w+):\s*(z\.[^,\n]+(?:\.[^,\n]+)*)/g;
  let m;
  while ((m = paramPattern.exec(paramsBlock)) !== null) {
    const paramName = m[1];
    const zodSchema = m[2].trim().replace(/,\s*$/, '');
    const isOptional = /\.optional\(\)/.test(zodSchema) || /\.nullish\(\)/.test(zodSchema);
    const isNullable = /\.nullable\(\)/.test(zodSchema) || /\.nullish\(\)/.test(zodSchema);
    const defaultMatch = zodSchema.match(/\.default\(([^)]+)\)/);

    // Get simple type string for the table
    let type = 'unknown';
    if (zodSchema.includes('z.string()')) type = 'string';
    else if (zodSchema.includes('z.number()')) type = zodSchema.includes('.int()') ? 'integer' : 'number';
    else if (zodSchema.includes('z.boolean()')) type = 'boolean';
    else if (zodSchema.includes('z.array(')) type = 'array';
    else if (zodSchema.includes('z.enum(')) {
      const vals = zodSchema.match(/z\.enum\(\[([^\]]+)\]\)/)?.[1];
      type = vals ? vals.replace(/'/g, '"') : 'enum';
    }

    let suffix = '';
    if (isNullable) suffix += ' \\| null';
    if (isOptional) suffix += '?';
    if (defaultMatch) suffix += ` = ${defaultMatch[1].replace(/'/g, '"')}`;

    params.push({
      name: paramName,
      type: type + suffix,
      required: !isOptional,
    });
  }
  return params;
}

/** Extract body as a SchemaNode (or null) */
function extractBodyNode(block, schemas) {
  // Match all occurrences of `body:` — skip the one inside serializationMethod ({})
  const bodyPattern = /body:\s*([^,\n]+?)(?:\.partial\(\))?\s*,/g;
  let bodyMatch;
  while ((bodyMatch = bodyPattern.exec(block)) !== null) {
    const bodyVal = bodyMatch[1].trim();
    // Skip `body: {}` which appears inside serializationMethod, not the actual body schema
    if (bodyVal === '{}' || bodyVal === '{ }') continue;

    const isPartial = bodyMatch[0].includes('.partial()');
    let node;
    if (bodyVal.startsWith('z.')) {
      node = parseZodExpressionStr(bodyVal);
    } else {
      node = { kind: 'ref', name: bodyVal };
    }
    return { node, partial: isPartial };
  }
  return null;
}

/** Extract response as a SchemaNode (or null) */
function extractResponseNode(block, schemas) {
  const responseMatch = block.match(/response:\s*([^,\n]+)/);
  if (!responseMatch) return null;
  let respVal = responseMatch[1].trim().replace(/,\s*$/, '');

  if (respVal.startsWith('z.')) {
    return parseZodExpressionStr(respVal);
  }
  return { kind: 'ref', name: respVal };
}

function extractErrors(block) {
  const errorsStart = block.match(/errors:\s*\[/);
  if (!errorsStart) return [];
  const startIdx = block.indexOf('[', errorsStart.index);
  let depth = 0;
  let i = startIdx;
  while (i < block.length) {
    if (block[i] === '[') depth++;
    else if (block[i] === ']') {
      depth--;
      if (depth === 0) break;
    }
    i++;
  }
  const errorsBlock = block.slice(startIdx, i + 1);
  const errors = [];
  const errorPattern = /status:\s*(\d+),\s*description:\s*`([^`]*)`/gs;
  let em;
  while ((em = errorPattern.exec(errorsBlock)) !== null) {
    errors.push({ status: parseInt(em[1], 10), description: em[2].trim() });
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Markdown generation
// ---------------------------------------------------------------------------

function generateEndpointMarkdown(ep, importPath) {
  const lines = [];
  const badge = ep.deprecated ? ' ~~deprecated~~' : '';
  lines.push(`### \`${ep.name}\`${badge}`);
  lines.push('');
  lines.push(`\`${ep.method} ${ep.path}\``);
  lines.push('');

  if (ep.summary) {
    lines.push(ep.summary);
    lines.push('');
  }

  if (ep.seeLinks.length > 0) {
    for (const link of ep.seeLinks) lines.push(`> See: \`${link}\``);
    lines.push('');
  }

  if (ep.scopes.length > 0) {
    lines.push(`**Scopes:** ${ep.scopes.map((s) => `\`${s}\``).join(', ')}`);
    lines.push('');
  }

  // Usage example
  lines.push('<details>');
  lines.push('<summary>Usage</summary>');
  lines.push('');
  lines.push('```ts');
  lines.push(`import { fetchApi } from 'rozod';`);
  lines.push(`import { ${ep.name} } from '${importPath}';`);
  lines.push('');
  if (ep.parameters.length > 0 || ep.bodyNode) {
    const paramEntries = ep.parameters.map((p) => `  ${p.name}: /* ${p.type} */`);
    if (ep.bodyNode) paramEntries.push('  body: { /* ... */ }');
    lines.push(`const data = await fetchApi(${ep.name}, {`);
    lines.push(paramEntries.join(',\n'));
    lines.push('});');
  } else {
    lines.push(`const data = await fetchApi(${ep.name}, undefined);`);
  }
  lines.push('```');
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Parameters
  if (ep.parameters.length > 0) {
    lines.push('#### Parameters');
    lines.push('');
    lines.push('| Name | Type | Required | Description |');
    lines.push('|------|------|----------|-------------|');
    for (const p of ep.parameters) {
      const desc = (ep.paramDocs[p.name] || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
      lines.push(`| \`${p.name}\` | \`${p.type}\` | ${p.required ? 'Yes' : 'No'} | ${desc} |`);
    }
    lines.push('');
  }

  // Body
  if (ep.bodyNode) {
    lines.push('#### Request Body');
    if (ep.bodyNode.partial) lines.push('*All fields are optional (PATCH partial update)*');
    lines.push('');
    lines.push(...renderSchemaBlock(ep.bodyNode.node, ep.schemas, 0, '', new Set()));
    lines.push('');
  }

  // Response
  if (ep.responseNode) {
    lines.push('#### Response');
    lines.push('');
    lines.push(...renderSchemaBlock(ep.responseNode, ep.schemas, 0, '', new Set()));
    lines.push('');
  }

  // Errors
  if (ep.errors.length > 0) {
    lines.push('#### Errors');
    lines.push('');
    lines.push('| Status | Description |');
    lines.push('|--------|-------------|');
    for (const err of ep.errors) {
      const desc = err.description.replace(/\n/g, '<br/>').replace(/\|/g, '\\|');
      lines.push(`| ${err.status} | ${desc} |`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

function generatePage(title, description, endpoints, importBasePath, sidebarOrder) {
  const lines = [];
  lines.push('---');
  lines.push(`title: "${title}"`);
  lines.push(`description: "API reference for ${title}"`);
  if (sidebarOrder !== undefined) {
    lines.push(`sidebar:`);
    lines.push(`  order: ${sidebarOrder}`);
  }
  lines.push('---');
  lines.push('');
  lines.push(description);
  lines.push('');

  if (endpoints.length > 0 && endpoints[0].baseUrl) {
    lines.push(`**Base URL:** \`${endpoints[0].baseUrl}\``);
    lines.push('');
  }

  lines.push('## Endpoints');
  lines.push('');
  lines.push('| Method | Path | Name |');
  lines.push('|--------|------|------|');
  for (const ep of endpoints) {
    const dep = ep.deprecated ? ' *(deprecated)*' : '';
    lines.push(`| \`${ep.method}\` | \`${ep.path}\` | [\`${ep.name}\`](#${ep.name.toLowerCase()})${dep} |`);
  }
  lines.push('');

  for (const ep of endpoints) {
    lines.push(generateEndpointMarkdown(ep, importBasePath));
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('Generating API reference pages...');

  const classicDir = join(SRC, 'endpoints');
  const classicFiles = readdirSync(classicDir).filter((f) => f.endsWith('.ts'));
  const classicOutDir = join(DOCS_CONTENT, 'classic');
  mkdirSync(classicOutDir, { recursive: true });

  let classicOrder = 0;
  let totalClassicEndpoints = 0;

  for (const file of classicFiles.sort()) {
    const filePath = join(classicDir, file);
    const endpoints = parseEndpointFile(filePath);
    if (endpoints.length === 0) continue;
    const title = fileNameToTitle(file);
    const slug = fileNameToSlug(file);
    const importPath = `rozod/lib/endpoints/${file.replace(/\.ts$/, '')}`;
    const content = generatePage(title, `Reference for the ${title} endpoints on Roblox.`, endpoints, importPath, classicOrder++);
    writeFileSync(join(classicOutDir, `${slug}.md`), content, 'utf-8');
    totalClassicEndpoints += endpoints.length;
    console.log(`  ${file} → ${slug}.md (${endpoints.length} endpoints)`);
  }

  const ocV1Dir = join(SRC, 'opencloud', 'v1');
  const ocV1Files = readdirSync(ocV1Dir).filter((f) => f.endsWith('.ts'));
  const ocOutDir = join(DOCS_CONTENT, 'opencloud');
  mkdirSync(ocOutDir, { recursive: true });

  let ocOrder = 0;
  let totalOCEndpoints = 0;

  for (const file of ocV1Files.sort()) {
    const filePath = join(ocV1Dir, file);
    const endpoints = parseEndpointFile(filePath);
    if (endpoints.length === 0) continue;
    const title = `${ocFileNameToTitle(file)} (v1)`;
    const slug = file.replace(/\.ts$/, '');
    const importPath = `rozod/lib/opencloud/v1/${slug}`;
    const content = generatePage(title, `OpenCloud v1 reference for ${ocFileNameToTitle(file)}.`, endpoints, importPath, ocOrder++);
    writeFileSync(join(ocOutDir, `${slug}.md`), content, 'utf-8');
    totalOCEndpoints += endpoints.length;
    console.log(`  opencloud/v1/${file} → ${slug}.md (${endpoints.length} endpoints)`);
  }

  const ocV2Path = join(SRC, 'opencloud', 'v2', 'cloud.ts');
  try {
    const v2Endpoints = parseEndpointFile(ocV2Path);
    if (v2Endpoints.length > 0) {
      const content = generatePage(
        'Cloud v2',
        'OpenCloud v2 reference — the newer unified Cloud API covering a broad range of Roblox resources.',
        v2Endpoints,
        'rozod/lib/opencloud/v2/cloud',
        ocOrder++,
      );
      writeFileSync(join(ocOutDir, 'cloud-v2.md'), content, 'utf-8');
      totalOCEndpoints += v2Endpoints.length;
      console.log(`  opencloud/v2/cloud.ts → cloud-v2.md (${v2Endpoints.length} endpoints)`);
    }
  } catch (err) {
    console.warn(`  Warning: Could not parse opencloud/v2/cloud.ts: ${err.message}`);
  }

  console.log(`\nDone! Generated ${classicOrder + ocOrder + 1} pages with ${totalClassicEndpoints + totalOCEndpoints} endpoints total.`);
}

main();
