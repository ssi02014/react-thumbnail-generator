import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import pkg from './package.json' assert { type: 'json' };
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const __dirname = path.resolve();

process.env.BABEL_ENV = 'production';

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
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions,
    }),
    commonjs({ include: 'node_modules/**' }),
    esbuild(),
    typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.stories.tsx'] }),
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    }),
    terser(),
  ],
};
