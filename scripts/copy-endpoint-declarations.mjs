// Copies src/endpoints/*.ts to lib/endpoints/*.d.ts.
//
// tsconfig.declarations.json excludes src/endpoints/** (emitting declarations
// for the large zod schemas is prohibitively slow), so the shipped .d.ts for
// endpoints are verbatim source copies instead. Running this as part of the
// build keeps them in sync with src even when endpoint files are edited by
// hand rather than regenerated.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';

mkdirSync('lib/endpoints', { recursive: true });

let copied = 0;
for (const file of readdirSync('src/endpoints').filter((f) => f.endsWith('.ts'))) {
  const name = file.replace(/\.ts$/, '');
  writeFileSync(`lib/endpoints/${name}.d.ts`, readFileSync(`src/endpoints/${file}`, 'utf-8'));
  copied++;
}
console.log(`Copied ${copied} endpoint declaration file(s) to lib/endpoints`);
