import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import pkg from './package.json' assert { type: 'json' };
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const __dirname = path.resolve();

export default {
  input: './src/index.tsx', // 진입 경로
  output: [
    {
      file: pkg.main,
      sourcemap: true,
      format: 'cjs',
      assetFileNames({ name }) {
        return (
          name?.replace(
            /src\/(.*)(?:\/.*)*\/(.*)\.css\.ts\.vanilla\.css$/,
            '$1/$2.css',
          ) ?? ''
        );
      },
    },
    {
      file: pkg.module,
      sourcemap: true,
      format: 'esm',
      assetFileNames({ name }) {
        return (
          name?.replace(
            /src\/(.*)(?:\/.*)*\/(.*)\.css\.ts\.vanilla\.css$/,
            '$1/$2.css',
          ) ?? ''
        );
      },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    vanillaExtractPlugin(),
    peerDepsExternal(),
    nodeResolve({
      extensions,
      browser: true,
    }),
    commonjs({ include: 'node_modules/**' }),
    esbuild(),
    typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.stories.tsx'] }),
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    }),
    json(),
  ],
  onwarn: (warning, warn) => {
    if (
      warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
      warning.message.includes(`"use client"`)
    ) {
      return;
    }
    warn(warning);
  },
};
