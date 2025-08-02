const fs = require('fs');
const path = require('path');

function copyAssets() {
  const srcAssets = path.join(__dirname, '../src/assets');
  const distAssets = path.join(__dirname, '../dist/assets');

  // Verifica se a pasta src/assets existe
  if (!fs.existsSync(srcAssets)) {
    console.log('Pasta src/assets não encontrada, pulando cópia...');
    return;
  }

  // Cria a pasta dist/assets se não existir
  if (!fs.existsSync(distAssets)) {
    fs.mkdirSync(distAssets, { recursive: true });
  }

  // Função recursiva para copiar arquivos e pastas
  function copyRecursive(src, dest) {
    const stats = fs.statSync(src);

    if (stats.isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }

      const files = fs.readdirSync(src);
      files.forEach((file) => {
        copyRecursive(path.join(src, file), path.join(dest, file));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  try {
    copyRecursive(srcAssets, distAssets);
    console.log('✅ Assets copiados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao copiar assets:', error.message);
  }
}

copyAssets();
