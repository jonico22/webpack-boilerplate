/* eslint-disable */

import cheerio from 'cheerio'
import {resolve} from 'universal-router'

const routes = [
  {
    path: '/',
    action: () => {
      let tplData = require('src/data').default
      let tpl = require('views/home.pug')
      let html = tpl(tplData)
      return html
    }
  }, {
    path: '/contact',
    action: () => {
      let tplData = require('src/data').default
      let tpl = require('views/contact.pug')
      let html = tpl(tplData)
      return html
    }
  }
]

if (window.document) {
  let rootEl = document.getElementById('root')

  resolve(routes, {path: window.location.pathname})
    .then((result) => {
      let $ = cheerio.load(result)
      rootEl.innerHTML = $('#root').html()
    })

  // enable HMR
  if (module.hot) {
    module.hot.accept(['src/data', 'views/home.pug', 'views/contact.pug'], () => {
      resolve(routes, {path: window.location.pathname})
        .then((result) => {
          let $ = cheerio.load(result)
          rootEl.innerHTML = $('#root').html()
        })
    })
  }
}

// static-site-generator-webpack-plugin export function
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
