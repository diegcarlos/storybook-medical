import type { StorybookConfig } from '@storybook/nextjs-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public', '../src/stories/assets'],
  viteFinal: async (config) => {
    // Adicionar o plugin SVGR
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(svgr());

    // Garantir que o PostCSS seja processado corretamente
    if (config.css) {
      config.css.postcss = {
        plugins: [require('@tailwindcss/postcss')],
      };
    }

    // Configurar assets
    if (config.assetsInclude) {
      config.assetsInclude = [
        ...((config.assetsInclude as string[]) || []),
        '**/*.svg',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif',
      ];
    }

    return config;
  },
};

export default config;
