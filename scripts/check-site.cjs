const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../landingpage-desafio-amarelo/landingpage');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const errors = [];

for (const [, reference] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) continue;
  const [file, fragment] = reference.split('#');
  if (!file && fragment && !ids.has(fragment)) {
    errors.push(`Âncora inexistente: ${reference}`);
  }
  if (file && !fs.existsSync(path.resolve(root, decodeURIComponent(file.split('?')[0])))) {
    errors.push(`Arquivo inexistente: ${reference}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Arquivos locais e âncoras da página válidos.');
}
