const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'client/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
