/*
 * https://github.com/kriasoft/react-static-boilerplate/blob/master/run.js
 */

const config = require('./config')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const tasks = new Map()

function run (task) {
  const start = new Date()
  console.log(`Starting '${task}'...`)
  return Promise.resolve().then(() => tasks.get(task)()).then(() => {
    console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`)
  }, err => console.error(err.stack))
}

tasks.set('clean', () => require('del')([ config.dirs.dest ], { dot: true }))

tasks.set('copy', (cb) => {
  const copy = require('copy')
  const wpThemeFiles = [
    `${config.dirs.src}/*.{php,css,png}`,
    `${config.dirs.src}/inc/*.php`
  ]

  copy(wpThemeFiles, config.dirs.dest, cb)
})

tasks.set('bundle', () => {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        reject(err)
      } else {
        console.log(stats.toString(webpackConfig.stats))
        resolve()
      }
    })
  })
})

tasks.set('devServer', () => {
  return new Promise((resolve, reject) => {
    const browserSync = require('browser-sync').create()
    const bsHtmlInjector = require('bs-html-injector')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const bundler = webpack(webpackConfig)

    browserSync.use(bsHtmlInjector)

    browserSync.init({
      files: [
        `${config.dirs.dest}/index.php`,
        {
          match: [
            'src/**/*.!(css|js)'
          ],
          fn: function (event, file) {
            if (file.endsWith('php')) bsHtmlInjector()
          }
        }
      ],
      proxy: {
        target: config.url,
        middleware: [
          webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            noInfo: true
          }),
          webpackHotMiddleware(bundler)
        ]
      }
    })
  })
})

tasks.set('watch', () => {
  const chokidar = require('chokidar')
  const staticFiles = [
    `${config.dirs.src}/*.{php,css,png}`,
    `${config.dirs.src}/inc/*.php`
  ]
  const staticFilesWatcher = chokidar.watch(staticFiles)

  staticFilesWatcher.on('change', () => {
    run('copy')
  })
})

tasks.set('build', () => {
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('copy'))
    .then(() => run('bundle'))
})

tasks.set('start', () => {
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('copy'))
    .then(() => run('watch'))
    .then(() => run('devServer'))
})

run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start')
