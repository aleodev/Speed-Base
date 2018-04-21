const path = require('path');
const webpack = require('webpack');
const VENDOR_LIBS = ['redux', 'react-redux', 'react-dom']
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor: VENDOR_LIBS,
    index: './src/index.js'

  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 3,
          maxInitialRequests: 10, //
          minSize: 5 //
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'es2015', {
                modules: false
              }
            ],
            'stage-0',
            'react'
          ]
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader', 'eslint-loader']
      // } ESLINT VERSION
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Simple React Boilerplate',
      template: 'src/index.html',
      files: {
        css: ["/css/main.css"],
        js: ["/scripts/vendor.js", "/scripts/index.js"]
      },
      description: "This is a simple react boilerplate that can be used for simple react based projects.",
      keywords: "react, simple, boilerplate, developer, website",
      viewport: "width=device-width, initial-scale=1",
      fontsUrl: "https://fonts.googleapis.com/css?family=Crimson+Text|Roboto",
      appEntryId: "root"
    })]
};
