'use strict';

import Config from 'webpack-config';
import webpack from 'webpack';


export default new Config().extend('./webpack.base.config.babel.js').merge({
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: 'cheap-inline-module-source-map'
});