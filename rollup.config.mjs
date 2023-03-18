import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import pkg from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.tsx', // 진입 경로
  output: [
    {
      file: pkg.main,
      format: 'esm',
      sourcemap: false,
    },
  ],
  external: ['react'],
  plugins: [
    peerDepsExternal(),
    commonjs({ include: 'node_modules/**' }),
    nodeResolve({
      extensions,
    }),
    babel({
      exclude: /node_modules/,
      extensions,
      include: ['src/**/*'],
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    alias({
      entries: [{ find: '@', replacement: './src' }],
    }),
    terser(),
  ],
};
