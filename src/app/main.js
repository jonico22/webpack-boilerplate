require('src/favicon.ico')
require('src/styles/main.scss')

import {onReady} from '../build/utils'

onReady(function () {
  // your code goes here
})

// This tells Webpack that this file and all of its dependencies can be replaced.
// http://andrewhfarmer.com/webpack-hmr-tutorial/#the-simple-way
if (module.hot) {
  module.hot.accept()
}
