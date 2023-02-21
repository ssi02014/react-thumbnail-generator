import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
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
    commonjs(),
    nodeResolve({
      extensions,
    }),
    babel({
      exclude: /node_modules/,
      extensions,
      include: ['src/**/*'],
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    terser({
      ecma: 5,
      module: true,
      toplevel: true,
      safari10: true,
    }),
  ],
};
