const fs = require('fs');
const path = require('path');

// Função para gerar nome de componente válido
function generateValidComponentName(filename) {
  // Remove a extensão .svg
  const nameWithoutExt = path.basename(filename, '.svg');

  // Remove caracteres especiais e espaços, mantendo apenas letras, números e hífens
  const cleanName = nameWithoutExt
    .replace(/[^a-zA-Z0-9-]/g, ' ') // Substitui caracteres especiais por espaço
    .split(/[\s-]+/) // Divide por espaços e hífens
    .filter((word) => word.length > 0) // Remove strings vazias
    .map((word) => {
      // Se a palavra começa com número, adiciona um prefixo
      if (/^\d/.test(word)) {
        return 'Icon' + word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');

  // Se o nome resultante estiver vazio ou começar com número, adiciona prefixo
  if (!cleanName || /^\d/.test(cleanName)) {
    return 'Icon' + cleanName;
  }

  return cleanName;
}

// Função para converter SVG para formato React padrão
function convertSvgToReact(svgContent, componentName) {
  // Extrair viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extrair width e height
  const widthMatch = svgContent.match(/width="([^"]+)"/);
  const heightMatch = svgContent.match(/height="([^"]+)"/);
  const width = widthMatch ? widthMatch[1] : '24';
  const height = heightMatch ? heightMatch[1] : '24';

  // Extrair xmlns
  const xmlnsMatch = svgContent.match(/xmlns="([^"]+)"/);
  const xmlns = xmlnsMatch ? xmlnsMatch[1] : 'http://www.w3.org/2000/svg';

  // Extrair o conteúdo interno do SVG (tudo entre <svg> e </svg>)
  const svgInnerContentMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  let svgInnerContent = svgInnerContentMatch ? svgInnerContentMatch[1] : '';

  // Converter todos os fill para currentColor
  svgInnerContent = svgInnerContent.replace(
    /fill="[^"]*"/g,
    'fill="currentColor"'
  );

  return `import * as React from 'react';
const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={${width}}
    height={${height}}
    viewBox="${viewBox}"
    fill="currentColor"
    xmlns="${xmlns}"
    {...props}
  >
${svgInnerContent}
  </svg>
);
export default ${componentName};
`;
}

// Função para criar arquivo de índice para uma pasta
function createIndexFile(dirPath, relativePath = '') {
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);
  const tsxFiles = files.filter(
    (file) => file.endsWith('.tsx') && file !== 'index.tsx'
  );

  if (tsxFiles.length === 0) return;

  // Gerar exportações normais
  const exports = tsxFiles
    .map((file) => {
      const componentName = path.basename(file, '.tsx');
      return `import ${componentName} from './${componentName}';`;
    })
    .join('\n');

  // Gerar tipagens dos ícones
  const iconNames = tsxFiles.map((file) => path.basename(file, '.tsx'));
  const iconType = iconNames.map((name) => `'${name}'`).join(' | ');

  // Gerar array allIcons
  const allIconsArray = `[${iconNames.map((name) => `'${name}'`).join(', ')}]`;

  // Gerar switch case para cada ícone
  const switchCases = iconNames
    .map((name) => `    case '${name}':\n      return <${name} {...props} />;`)
    .join('\n');

  // Determinar o nome do componente baseado no diretório
  const componentName = relativePath ? relativePath.split('/').pop() : 'Icons';
  const capitalizedComponentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  const indexContent = `// Auto-generated index file for ${relativePath || 'icons'}
${exports}

// Tipagem dos ícones disponíveis
export type IconName = ${iconType};

// Array com todos os nomes dos ícones
export const allIcons: IconName[] = ${allIconsArray};

// Interface para as props do componente
interface ${capitalizedComponentName}Props extends React.SVGProps<SVGSVGElement> {
  icon: IconName;
}

// Componente React que aceita a prop icon
const ${capitalizedComponentName} = ({ icon, ...props }: ${capitalizedComponentName}Props) => {
  switch (icon) {
${switchCases}
    default:
      return null;
  }
};

export default ${capitalizedComponentName};
`;

  const indexPath = path.join(dirPath, 'index.tsx');
  fs.writeFileSync(indexPath, indexContent);
  console.log(
    `📁 Criado índice: ${relativePath || 'icons'}/index.tsx (${tsxFiles.length} componentes)`
  );
}

// Função para processar um diretório
function processDirectory(dirPath, outputDir, relativePath = '') {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(dirPath);
  let hasSvgFiles = false;

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Processar subdiretório
      const subOutputDir = path.join(outputDir, file);
      const subRelativePath = relativePath ? `${relativePath}/${file}` : file;
      processDirectory(filePath, subOutputDir, subRelativePath);
    } else if (file.endsWith('.svg')) {
      hasSvgFiles = true;
      // Converter arquivo SVG
      const svgContent = fs.readFileSync(filePath, 'utf8');
      const componentName = generateValidComponentName(file);

      const reactCode = convertSvgToReact(svgContent, componentName);
      const outputPath = path.join(outputDir, `${componentName}.tsx`);

      fs.writeFileSync(outputPath, reactCode);
      console.log(`✅ Convertido: ${file} -> ${componentName}.tsx`);
    }
  });

  // Criar índice para esta pasta se contiver arquivos SVG
  if (hasSvgFiles) {
    createIndexFile(outputDir, relativePath);
  }
}

// Função para criar índice principal
function createMainIndex(outputDir) {
  const subdirs = fs.readdirSync(outputDir).filter((file) => {
    const filePath = path.join(outputDir, file);
    return fs.statSync(filePath).isDirectory();
  });

  if (subdirs.length === 0) return;

  // Gerar exportações dos ícones
  let nameExports = [];
  const exports = subdirs
    .map((subdir) => {
      const nameSubdir = subdir.charAt(0).toUpperCase() + subdir.slice(1);
      nameExports.push(`Icons${nameSubdir}`);
      return `import Icons${nameSubdir} from './${subdir}';`;
    })
    .join('\n');

  const indexContent = `// Auto-generated main index file
${exports}

export { ${nameExports.join(', ')} };
`;

  const indexPath = path.join(outputDir, 'index.tsx');
  fs.writeFileSync(indexPath, indexContent);
  console.log(`📁 Criado índice principal: icons/index.ts`);
}

// Converter todos os SVGs
const svgDir = path.join(__dirname, '../src/assets/svg');
const outputDir = path.join(__dirname, '../src/components/icons');

console.log('🔄 Iniciando conversão de SVGs para componentes React...');
processDirectory(svgDir, outputDir);
createMainIndex(outputDir);
console.log('✅ Conversão concluída!');
