# Documentation

This boilerplate assumes you are somewhat familiar with Webpack.

**It is recommended to use npm 3+ for a more efficient dependency tree.**

## Project structure

```
.
├── yarn.lock                 # https://yarnpkg.com/en/docs/yarn-lock
├── .babelrc                  # babel config
├── .editorconfig             # editor config
├── .eslintrc                 # eslint config
├── .eslintignore             # eslint ignore config
├── .nvmrc                    # nvm config
├── package.json              # build scripts and dependencies
├── src/                      # source code
│   ├── app/
│   │   └── main.js           # app entry file
│   ├── styles
│   │   └── main.scss         # main sass file
│   ├── data                  # data for pug templates
│   ├── views                 # pug templates
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev
│   └── index.html            # index.html template
└── build/                    # build scripts files (webpack)
    └── ...
```

## How it works?

The pug templates are loaded with [pug-loader](https://github.com/pugjs/pug-loader), the boilerplate support multiples routes by using [universal-router](https://github.com/kriasoft/universal-router).

In production, the pug templates are compiled to html files by [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)

## Configure routes

Update the following files:

* `build/routes.js`
* `src/app/static.js`
