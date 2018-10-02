const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true
    })
  ]
}
