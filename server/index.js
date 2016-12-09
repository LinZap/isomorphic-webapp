import path from 'path'
import http from 'http'
import express from 'express'
import webpack from 'webpack'
import reload from 'reload'
import chokidar from 'chokidar'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import webpackDevConfig from '../webpack.config.js'
import config from '../config.json'
import extAPI from './api/index.js'

const app = express()

// pack web app
const compiler = webpack(webpackDevConfig)

// calculation bundling time
let bundleStart
compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
})
compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
})

// set server env
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './view'))
app.set('port', (process.env.PORT || config.PORT))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

// express can get source from webpack
app.use(webpackDevMiddleware(compiler,{
	publicPath: webpackDevConfig.output.publicPath,
	noInfo: true,
	stats: { colors: true }
}))

// express can HMR (hot module replacement)
app.use(webpackHotMiddleware(compiler))

// static path for express
app.use('/static',express.static(path.join(__dirname, 'public')))

// extension route rules
extAPI(app)

// for react-router, if the path match the rele send index page
app.get(/^\/[A-Za-z0-9-\/]*$/, function (req, res) {
  res.render('index', { DEBUG: true })
})

// create server for reload module to handle reload event
const server = http.createServer(app),
	  reloadServer = reload(server, app)

// launch web server
server.listen(app.get('port'),()=>{
	console.log(`server is running on port ${app.get('port')}`)
})

// if views changed, reload webpage 
// (nodemon will restart express so we ignore that)
chokidar.watch(path.join(__dirname,'view/**'))
.on('change', (event, path) => {
	reloadServer.reload()
})