const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: [
    'babel-polyfill',
    './src/index.js'
  ],

  output: {
    filename: '[name].[chunkhash].js',
    publicPath: process.env.PUBLIC_PATH || '/'
  },

  resolve: {
    modules: [
      Path.resolve(__dirname),
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  devtool: 'source-maps',

  devServer: {
    stats: {
      children: false
    },
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: {
      rewrites: [
        {
          from: /./,
          to: '/index.html'
        }
      ]
    }
  }
}
