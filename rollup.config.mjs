import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import pkg from './package.json' with { type: 'json' };
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const __dirname = path.resolve();

export default {
  input: './src/index.tsx', // 진입 경로
  output: [
    {
      file: pkg.main,
      sourcemap: true,
      format: 'cjs',
    },
    {
      file: pkg.module,
      sourcemap: true,
      format: 'esm',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [
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
