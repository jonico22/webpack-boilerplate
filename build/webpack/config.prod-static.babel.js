import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import path from 'path'
import chalk from 'chalk'

import webpackConfigBase from './config.base.babel'
import {projectRootPath} from '../config'

// static things
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import routes from '../routes'
console.log(chalk.yellow('Routes to build: \n'), routes, '\n')

export default webpackMerge(webpackConfigBase, {
  devtool: 'eval',
  entry: {
    static: path.join(projectRootPath, 'src/app/static.js')
  },
  output: {
    publicPath: '/',
    filename: '_static/js/[name].js',
    chunkFilename: '_static/js/chunk.[id].js',
    // necessary for 'static-site-generator-webpack-plugin' works
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new StaticSiteGeneratorPlugin('static', routes, {}, {
      window: {}
    })
  ]
})
