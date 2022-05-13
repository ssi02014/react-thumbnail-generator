const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

require('dotenv').config({ path: './.env' });

const mode = process.env.NODE_ENV || 'development'; // 기본값 development

module.exports = () => ({
  mode,
  entry: './src/index.tsx',
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: path.resolve(__dirname + '/build'),
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    publicPath: '/',
  },
  // // Webpack의 출력물에서 디버깅을 하기위해 소스 맵을 허용합니다.
  devtool: 'source-map',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // prod모드에서 콘솔 로그를 제거한다
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader', // html-loader 웹팩이 이해할 수 있게 하고 options 로는 minimize라는 코드 최적화 옵션을 사용하고 있다.
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    // HtmlWebPackPlugin 웹팩이 html 파일을 읽어서 html 파일을 빌드할 수 있게 해준다.
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      minify: process.env.NODE_ENV === 'production' && {
        collapseWhitespace: true, // 빈칸 제거
        removeComments: true, // 주석제거
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new webpack.EnvironmentPlugin({
      ...process.env,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // 빌드할 때 typescript의 타입 검사 속도 증가
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    static: false,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    port: 8080,
    compress: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
});
