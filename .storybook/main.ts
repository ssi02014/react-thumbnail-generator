import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    config.plugins?.push(vanillaExtractPlugin());

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '@assets': path.resolve(__dirname, '../src/assets'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@constants': path.resolve(__dirname, '../src/constants'),
        '@utils': path.resolve(__dirname, '../src/utils'),
        '@css': path.resolve(__dirname, '../src/css'),
        '@lib': path.resolve(__dirname, '../src/lib'),
        '@interfaces': path.resolve(__dirname, '../src/interfaces'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
      };
    }

    return config;
  },
};
export default config;
