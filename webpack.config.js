const path = require('path');
const webpack = require('webpack');

let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|eot|woff|woff|png|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|svg)$/i,
        use: [{
          loader: 'url-loader?limit=10000',
          loader: 'img-loader'
        }]
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

  output: {
    path: path.resolve(__dirname),
    filename: 'index_bundle.js',
    publicPath: '/'
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new FaviconsWebpackPlugin('./favicon.png')
  ]

};
