const ghpages = require('gh-pages');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg = require('./package.json');

const TARGET= process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  style: path.join(__dirname, 'app/main.scss')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    publicPath: "/",
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
     {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'KnowThyShelf',
      appMountId: 'app',
      inject: false
    })
  ]
};

// needed for deploy..

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: PATHS.style
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  });
}

if(TARGET === 'build' || TARGET === 'stats') {
  module.exports = merge(common, {
    entry: {
      vendor: Object.keys(pkg.dependencies).filter(function(v) {
        return v !== 'alt-utils';
      })
    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: PATHS.app
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: PATHS.style
        }
      ]
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      // new CleanPlugin([path.join(PATHS.build, '/*')],
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV':'"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
