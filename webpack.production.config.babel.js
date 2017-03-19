'use strict';

import Config from 'webpack-config';
import webpack from 'webpack';


export default new Config().extend('./webpack.base.config.babel.js').merge({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
});