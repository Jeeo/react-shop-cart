const path = require('path')
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({template: './src/index.html'})
  ]
}