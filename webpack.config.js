const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'toolbar-menu': path.resolve(__dirname, 'client/src/toolbar-menu-bundle/index.jsx'),
    'dom-script': path.resolve(__dirname, 'client/src/dom-script-bundle/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};
