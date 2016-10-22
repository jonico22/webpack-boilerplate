# Base webpack

> Start your next project using technologies that you love

## Features

* [Pug](https://pugjs.org)
* [HMR](https://webpack.github.io/docs/hot-module-replacement.html)
* [ESLint](http://eslint.org/)
* [ES2015](https://babeljs.io/docs/plugins/preset-es2015/) + [stage-3](https://babeljs.io/docs/plugins/preset-stage-3/)
* [SASS](http://sass-lang.com/)
* [PostCSS](https://github.com/postcss/postcss)
* [BrowserSync](https://www.browsersync.io/)

## Development

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification and serve dist files at localhost:8080
$ npm run build
```

In development if you are working with a backend like [Laravel](https://laravel.com/), you will need to add a script to your template file:

```html
...
<script src="http:/[localhost|ip]:8080/app.js"></script>
...
```

Use `IP` if you run your app from external devices.
