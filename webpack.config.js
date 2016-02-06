var path = require('path');
var webpack = require('webpack');
var yargs = require('yargs');

module.exports = {
  debug: true,
  entry: [
    // For ES6
    'babel-polyfill',

    // This app
    './app.js',

    // Webpack dev-only
    'webpack-dev-server/?http://localhost:8081'
  ],
  target: 'node',
  extensions: [
    '.jsx', '.js',
    '.json',
    '.html',
    //'.css', '.less'
  ],
  output: {
    path: './public/js',
    filename: 'app.min.js',
    library: 'FlipTweet',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, "node_modules")],
        // Babel build options
        query: {
          plugins: ['transform-runtime', 'transform-react-jsx'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: 'babel-loader'
      },
      {
        test: /\.handlebars$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: 'handlebars-loader'
      }
    ]
  },
  devtool: 'source-map'
};
