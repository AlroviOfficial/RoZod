const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FOLDER_OPENAPI = 'openapi';
const FOLDER_ZODIOS = 'src/endpoints';

console.log('Generating OpenAPI files from Swagger files...');
const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').filter(url => url.trim() !== '');

urls.forEach(async (url) => {
  if (url.trim()) {
    console.log(`Converting ${url}`);
    const [, subdomain, domain] = url.match(/https:\/\/([^.]*)\.(.*)\//);
    const apiName = url.split('/').slice(-1)[0];

    execSync(`npx swagger2openapi -r -p -y -u "https://${subdomain}.${domain}" -o "${FOLDER_OPENAPI}/${subdomain}${apiName}.yaml" "${url}"`);
  }
});


console.log('Generating Zodios endpoints...');

const openApiFiles = fs.readdirSync(FOLDER_OPENAPI).filter(file => file.endsWith('.yaml'));

const { generateZodClientFromOpenAPI } = require('openapi-zod-client');
const SwaggerParser = require('@apidevtools/swagger-parser');

openApiFiles.forEach(async file => {
  console.log(`Generating Zodios for ${file}`);

  const fileName = path.basename(file, '.yaml');
  const matchingUrl = urls.find(url => {
    const apiVersion = url.match(/\/v(\d+)/)[1];
    return url.includes(`${fileName.replace(/v\d+$/, '')}.roblox.com/docs/json/v${apiVersion}`);
  });

  if (matchingUrl) {
    const [, subdomain, domain] = matchingUrl.match(/https?:\/\/([^\.]+)\.([^\/]+)/);
    const openApiDoc = await SwaggerParser.parse(`${FOLDER_OPENAPI}/${file}`);
    generateZodClientFromOpenAPI({
      openApiDoc: openApiDoc,
      templatePath: './template.hbs',
      distPath: `${FOLDER_ZODIOS}/${fileName}.ts`,
      options: {
        baseUrl: `https://${subdomain}.${domain}`,
        withDeprecatedEndpoints: true,
        withImplicitRequiredProps: true,
        withDefaultValues: true,
        withAlias: (path, method, OpenAPIOperation) => {
          // Returns a string that will be used as the alias for the endpoint
          // Example: GET /v1/private-servers/enabled-in-universe/:universeId => getPrivateServersEnabledInUniverse
          const url = path.replace(/\/v\d+\//, '/').replace(/\/:(\w+)/g, '/$1');
          const urlParts = url.split(/[/-]/).filter(part => part !== '');
          const methodParts = method.split(' ');
          const methodPart = methodParts[0].toLowerCase();
          const endpointName = urlParts
            .map(part => part.replace(/(\w)(\w*)/, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()))
            .join('')
            .replace(/[{}]/g, '');
          return `${methodPart}${endpointName}`;
        }
      }
    });
  }
});