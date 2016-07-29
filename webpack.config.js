module.exports = {
  entry: './js/TeamDisplay.jsx',
  output: {
    filename: 'bundle.js'   
  },
  module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    }
};