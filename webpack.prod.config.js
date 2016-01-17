
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var banner = path.resolve(__dirname, 'static/data/banner.txt');

module.exports = {
  devtool: 'source-map',
  entry: [
    'font-awesome-webpack!./src/utils/font-awesome.config.prod',
    'eventsource-polyfill', // necessary for hot reloading with IE
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/public/'
  },
  plugins: [
    // CSS
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    }),
    // Fetch API
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    // Add Banner
    new webpack.BannerPlugin(fs.readFileSync(banner, { encoding: 'utf8' }), {
      entryOnly: true
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
        'image-webpack?bypassOnDebug&optimizationLevel=4&interlaced=false'
      ],
      include: path.join(__dirname, 'static/img')
    }, 
    {
      test: /\.css$/,
      // loader: 'style-loader!css-loader!postcss-loader'
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[hash:base64:6]!postcss')
    }, 
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[hash:base64:6]!postcss!sass')
    }, 
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[hash:base64:6]!less')
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
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  }
};