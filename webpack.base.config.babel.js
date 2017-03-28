// IMPORTANT to make weboack working you need to install it globaly on your machine: npm install webpack -g
//for testing time on compilation run this: webpack --profile --display-modules --display-reasons
// require.ensure(['name.js'], function(require){require(name.js).xyz();})

import webpack from 'webpack';
import path from 'path';
import rimraf from 'rimraf';// remove files
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "../css/style.css",
  //disable: process.env.NODE_ENV !== "development"
});

module.exports = {
  context: __dirname + '/frontend', //base directory for enrty files
  entry: {
    'main': './js/main',
    'css' : './scss/styles.scss' // Styles entry point
  },

  output: {
    path: __dirname + '/public/js',
    publicPath: '/', // internet path for our files, in the end of path must be a slash '/'
    filename: '[name].js',
    libraryTarget: "var",
    library: '[name]'
  },

  resolve: {
    modules: ['frontend/js', 'node_modules'], // define url where to look for modules
    alias: {

    }
  },
  resolveLoader: {
    modules: ['node_modules'] // define url where to look for loader modules
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), //if we have error during compilation then webpack will not compile files
    new webpack.optimize.CommonsChunkPlugin({ // if you use one module in more then 2 files this modules will go in common.js file
     name: 'main',
     minChunks: 2
     }),
    {
      apply: (compiler) => {
        rimraf.sync(compiler.options.output.path); // will remove everything what is in /public/js
      }
    },
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ["url-loader?limit=100&name=fonts/[name].[ext]"]
      }
    ]
  }
};