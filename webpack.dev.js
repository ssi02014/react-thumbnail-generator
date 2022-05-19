const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

require('dotenv').config({ path: './.env.development' });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: false,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    port: 3000,
    compress: true,
    hot: true, // HMR 적용
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ...process.env,
    }),
  ],
});
