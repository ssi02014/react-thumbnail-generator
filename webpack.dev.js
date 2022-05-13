const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
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
