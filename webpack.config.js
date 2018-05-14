const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    vuetify: 'vuetify'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'quick-dialogue.min.js',
      libraryTarget: 'window',
      library: 'quick-dialogue',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/quick-dialogue.vue'),
    output: {
      filename: 'quick-dialogue.js',
      libraryTarget: 'umd',
      library: 'quick-dialogue',
      umdNamedDefine: true
    }
  })
];