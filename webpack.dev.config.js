
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'font-awesome-webpack!./src/utils/font-awesome.config',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    }),
    // Fetch API
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, 
    {
      test: /\.(jpe?g|png|gif|ico)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=img/img-[hash:6].[ext]',
        // 'image-webpack?bypassOnDebug&optimizationLevel=5&interlaced=false'
      ],
      include: path.join(__dirname, 'static')
    }, 
    {
      test: /\.css$/,
      // loader: 'style-loader!css-loader!postcss-loader'
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]__[hash:5]!postcss')
    }, 
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]__[hash:5]!postcss!sass')
    }, 
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]__[hash:5]!less')
    }, 
    { 
      test: /\.json$/, 
      loader: 'json'
    },
    {
      test: /\.txt$/, 
      loader: 'raw'
    },
    // Icon Font
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&name=fonts/font-[hash:6].[ext]&mimetype=application/font-woff" },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&name=fonts/font-[hash:6].[ext]&mimetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&name=fonts/font-[hash:6].[ext]&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&name=fonts/font-[hash:6].[ext]&mimetype=image/svg+xml" },    
  ]},
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
      require('lost')(),
      require('autoprefixer')({
        browsers: ['> 5%', 'last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  }
};