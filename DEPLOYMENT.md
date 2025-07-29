# 🚀 Guia de Deployment do Storybook

Este guia explica como usar o Storybook como um sistema de design e fazer deploy para diferentes plataformas.

## 📋 Resumo das Opções

### 1. **Build Estático (Recomendado para UX)**

- ✅ Gera arquivos estáticos
- ✅ Pode ser hospedado em qualquer servidor
- ✅ Funciona offline
- ✅ Fácil de compartilhar

### 2. **NPM Package**

- ✅ Instalável em outros projetos
- ✅ Versionamento semântico
- ✅ TypeScript support
- ✅ Tree-shaking

### 3. **Storybook Cloud**

- ✅ Deploy automático
- ✅ Integração com GitHub
- ✅ Visual testing
- ✅ Collaboration features

## 🛠️ Como Fazer Deploy

### Opção 1: Build Estático

```bash
# Gerar build
npm run build-storybook

# O build será gerado em: storybook-static/
```

#### GitHub Pages

```bash
# 1. Criar branch gh-pages
git checkout -b gh-pages

# 2. Copiar build para a branch
cp -r storybook-static/* .

# 3. Commit e push
git add .
git commit -m "Deploy Storybook"
git push origin gh-pages

# 4. Configurar GitHub Pages para servir da branch gh-pages
```

#### Netlify

1. Arraste a pasta `storybook-static` para o Netlify
2. Ou conecte o repositório e configure:
   - Build command: `npm run build-storybook`
   - Publish directory: `storybook-static`

#### Vercel

1. Conecte o repositório no Vercel
2. Configure:
   - Build command: `npm run build-storybook`
   - Output directory: `storybook-static`

#### Servidor Local

```bash
# Python
cd storybook-static
python -m http.server 8000

# Node.js
npx serve storybook-static

# PHP
php -S localhost:8000 -t storybook-static
```

### Opção 2: NPM Package

```bash
# 1. Build da biblioteca
npm run build:lib

# 2. Publicar no NPM
npm publish

# 3. Em outro projeto
npm install @seu-org/storybook-components
```

### Opção 3: Storybook Cloud

1. Conecte seu repositório no [Storybook Cloud](https://storybook.js.org/cloud)
2. Configure o build automaticamente
3. Acesse via URL pública

## 📦 Estrutura do Build

```
storybook-static/
├── index.html          # Página principal
├── iframe.html         # Frame para stories
├── assets/            # JavaScript e CSS
├── sb-manager/        # Interface do Storybook
├── sb-addons/         # Addons
└── [outros assets]    # Imagens, fontes, etc.
```

## 🔧 Configuração Avançada

### Customizar Build

```javascript
// .storybook/main.ts
export default {
  // ... outras configs
  staticDirs: ['../public', '../src/assets'],
  viteFinal: async (config) => {
    // Customizações do Vite
    return config;
  },
};
```

### Adicionar Analytics

```javascript
// .storybook/preview.ts
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Google Analytics
  googleAnalytics: {
    trackingId: 'GA_TRACKING_ID',
  },
};
```

## 🎨 Personalização

### Tema Customizado

```javascript
// .storybook/preview.ts
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Meu Sistema de Design',
  brandUrl: 'https://exemplo.com',
  brandImage: '/logo.png',
});

export const parameters = {
  docs: {
    theme,
  },
};
```

### CSS Global

```css
/* .storybook/preview.css */
@import '../src/styles/globals.css';

/* Customizações específicas do Storybook */
.sb-show-main {
  background: #f5f5f5;
}
```

## 🚀 Scripts Úteis

```bash
# Build e deploy
npm run build-storybook
npm run deploy:storybook

# Desenvolvimento
npm run storybook

# Build da biblioteca
npm run build:lib

# Lint e format
npm run lint
npm run format
```

## 📊 Monitoramento

### Performance

- Use Lighthouse para auditar performance
- Monitore Core Web Vitals
- Otimize imagens e assets

### Analytics

- Google Analytics
- Hotjar para heatmaps
- Custom events para tracking

## 🔒 Segurança

- HTTPS obrigatório em produção
- Headers de segurança
- CSP (Content Security Policy)
- Rate limiting se necessário

## 📈 Próximos Passos

1. **Adicionar mais componentes**
2. **Configurar testes automatizados**
3. **Implementar CI/CD**
4. **Adicionar documentação interativa**
5. **Criar tokens de design**
6. **Integrar com Figma**

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature
3. Adicione componentes e stories
4. Teste localmente
5. Abra um Pull Request

## 📞 Suporte

- 📧 Email: suporte@exemplo.com
- 💬 Discord: [link]
- 📖 Documentação: [link]
- 🐛 Issues: [GitHub Issues]
