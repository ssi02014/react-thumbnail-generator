import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import pkg from './package.json' assert { type: 'json' };
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { dts } from 'rollup-plugin-dts';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const __dirname = path.resolve();

process.env.BABEL_ENV = 'production';

export default [
  {
    input: './src/index.tsx', // 진입 경로
    output: [
      {
        file: pkg.main,
        sourcemap: true,
        format: 'cjs',
        assetFileNames: ({ name }) => {
          if (name?.split('.').pop() === 'css') {
            const adjustedName =
              name?.replace(
                /src\/(.*)(?:\/.*)*\/(.*)\.css\.ts\.vanilla\.css$/,
                'css/$1/$2.css'
              ) ?? '';

            console.log(`[BUILD-VE_CSS] ${name} -> ${adjustedName}`);
            return adjustedName;
          }

          return name;
        },
      },
      {
        file: pkg.module,
        sourcemap: true,
        format: 'esm',
        assetFileNames: ({ name }) => {
          if (name?.split('.').pop() === 'css') {
            const adjustedName =
              name?.replace(
                /src\/(.*)(?:\/.*)*\/(.*)\.css\.ts\.vanilla\.css$/,
                'css/$1/$2.css'
              ) ?? '';

            console.log(`[BUILD-VE_CSS] ${name} -> ${adjustedName}`);
            return adjustedName;
          }

          return name;
        },
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      vanillaExtractPlugin(),
      peerDepsExternal(),
      nodeResolve({
        extensions,
      }),
      commonjs({ include: 'node_modules/**' }),
      esbuild(),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
      }),
    ],
  },
  {
    // d.ts 파일 직접 생성
    input: './src/index.tsx',
    output: [
      {
        dir: 'dist',
      },
    ],
    plugins: [dts()],
  },
];
