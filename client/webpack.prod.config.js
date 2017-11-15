const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom'
];

module.exports = {
  entry: {
    bundle: './src/components/App.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        use: ['style-loader', 'css-loader', 'stylus-loader'],
        test: /\.styl$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        { path: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab', type: 'css' }
      ],
      append: false,
      publicPath: ''
    })
  ]
};
