var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var versionTime = new Date();
var version = versionTime.getTime();

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, './src/'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins:[
      new htmlWebpackPlugin(
        {
          filename: 'index.html',
          template: path.resolve(__dirname, './src/index.html'),
          lastModify: new Date(),
          date: version,
          minify: {
            removeComments: true,
            collapseWhitespace: true
          }
        }
      ),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,  // remove all comments
        },
        compress: {
          warnings: false
        }
      })
    ]
};
