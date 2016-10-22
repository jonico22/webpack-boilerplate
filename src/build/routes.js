export default [
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
