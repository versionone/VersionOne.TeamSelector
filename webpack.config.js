module.exports = {
  entry: './js/TeamDisplay.jsx',
  output: {
    filename: 'bundle.js'   
  },
  module: {
        loaders: [
          {test: /\.jsx?$/, loader: 'babel-loader'},
        ]
    }
};