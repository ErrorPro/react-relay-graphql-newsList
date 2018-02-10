const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/frontend/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      frontend: path.join(__dirname, 'src', 'frontend'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV,
    }),
  ].concat(process.env.NODE_ENV === 'production'
    ? [new webpack.optimize.UglifyJsPlugin()]
    : []),
};
