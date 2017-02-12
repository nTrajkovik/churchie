const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    "menu-content": path.resolve(__dirname, 'client/views/menu-content/index.jsx'),
    "page-content": path.resolve(__dirname, 'client/views/page-content/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].js',
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
