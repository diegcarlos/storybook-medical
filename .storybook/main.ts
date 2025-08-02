import type { StorybookConfig } from '@storybook/nextjs-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../public'],
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      plugins: [svgr({ include: '**/*.svg?react' })],
      resolve: {
        alias: {
          '@': '/src',
        },
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
      optimizeDeps: {
        exclude: ['virtual:next-image'],
      },
      build: {
        rollupOptions: {
          external: ['virtual:next-image'],
        },
      },
      server: {
        fs: {
          allow: ['..'],
        },
      },
      assetsInclude: [
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif',
        '**/*.webp',
      ],
    });
  },
};

export default config;
