const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

require('dotenv').config({ path: './.env.production' });

// merge를 이용해서 webpack.common 와 병합
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      ...process.env,
    }),
  ],
});
