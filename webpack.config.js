var webpack = require('webpack');
module.exports = {
  entry: './js/TeamDisplay.jsx',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};