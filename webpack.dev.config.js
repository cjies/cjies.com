
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.(png|jpg|gif)$/,
      loaders: ['url?limit=25000'],
      include: path.join(__dirname, 'static/img')
    }, {
      test: /\.css$/,
      // loader: 'style-loader!css-loader!postcss-loader'
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
    }]
  },
  // PostCSS
  postcss: function() {
    return [
      require('postcss-import')({
        glob: true,
        onImport: function (files) {
            files.forEach(this.addDependency);
        }.bind(this)
      }),
      require('postcss-simple-vars')(),
      require('postcss-nested')(),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  }
};