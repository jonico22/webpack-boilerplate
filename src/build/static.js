/* eslint-disable */

// this file lets you have multiples views
// also it compiles all the pug files to html for production

import cheerio from 'cheerio'
import {resolve} from 'universal-router'
import {onReady} from './utils'
import routes from './routes'

if (window.document) {
  onReady(resolveRoute)
}

if (module.hot) {
  module.hot.accept(() => {
    resolveRoute()
  })
}

function resolveRoute () {
  let rootEl = document.body

  resolve(routes, {path: window.location.pathname})
    .then((result) => {
      let $ = cheerio.load(result)
      rootEl.innerHTML = $('body').html()
    })
}

// static-site-generator-webpack-plugin export function
// converts pug files to html
export default function (locals, callback) {
  resolve(routes, {path: locals.path})
    .then((result) => {
      console.log('\nCurrent route: ', locals.path)
      console.log('\nHtml: \n', result, '\n')
      callback(null, result)
    })
    .catch((error) => {
      console.log('\nCurrent route: ', locals.path)
      console.log('Error: ', error)
    })
}
