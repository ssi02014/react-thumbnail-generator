const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

require('dotenv').config({ path: './.env.production' });

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      ...process.env,
    }),
  ],
});
