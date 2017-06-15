const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/components/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(ttf|eot|woff|woff|png|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /(\.scss|\.css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]

}
