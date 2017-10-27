const path = require('path');
const webpack = require('webpack');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

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
        test: /\.(png|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /(\.scss|\.css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            minimize: true
          }
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
    new FaviconsWebpackPlugin('./favicon.png'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]

};
