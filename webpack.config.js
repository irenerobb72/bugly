
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
  ]},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './'
  },
  sassLoader: {
     includePaths: [path.resolve(__dirname, "./styles")]
   },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
