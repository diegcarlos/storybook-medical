#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Deploy do Storybook');

// Verificar se o build existe
const buildPath = path.join(__dirname, '../storybook-static');
if (!fs.existsSync(buildPath)) {
  console.log(
    '❌ Build não encontrado. Execute "npm run build-storybook" primeiro.'
  );
  process.exit(1);
}

console.log('✅ Build encontrado em:', buildPath);
console.log('');
console.log('📋 Opções de deploy:');
console.log('');
console.log('1. GitHub Pages:');
console.log('   - Copie a pasta storybook-static para a branch gh-pages');
console.log('   - Configure GitHub Pages para servir da branch gh-pages');
console.log('');
console.log('2. Netlify:');
console.log('   - Arraste a pasta storybook-static para o Netlify');
console.log('   - Ou conecte o repositório e configure o build command:');
console.log('     Build command: npm run build-storybook');
console.log('     Publish directory: storybook-static');
console.log('');
console.log('3. Vercel:');
console.log('   - Conecte o repositório no Vercel');
console.log('   - Configure o build command: npm run build-storybook');
console.log('   - Configure o output directory: storybook-static');
console.log('');
console.log('4. Servidor local:');
console.log(
  '   - Use qualquer servidor HTTP para servir a pasta storybook-static'
);
console.log('   - Exemplo com Python: python -m http.server 8000');
console.log('   - Exemplo com Node: npx serve storybook-static');
console.log('');
console.log('📁 Arquivos gerados:');
fs.readdirSync(buildPath).forEach((file) => {
  const stats = fs.statSync(path.join(buildPath, file));
  if (stats.isDirectory()) {
    console.log(`   📁 ${file}/`);
  } else {
    console.log(`   �� ${file}`);
  }
});
