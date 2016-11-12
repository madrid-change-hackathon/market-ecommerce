var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: {
    app: ['./app-entry.js'],
    vendor: ['./vendor-entry.js']
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'app-bundle.js',
    publicPath: '/build'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      'vendor',
      'vendor-bundle.js'
    )
  ],
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
    ]
  },
  devServer: {
    contentBase: './',
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://locahost:8000',
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: true
  }
}