const webpack = require('webpack'),
	path = require('path'),
	config = require('./config.json'),
	hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

var devConfig = {

	entry: {	
		app: [path.join(__dirname, 'app/index.jsx'),hotMiddlewareScript]
	},

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	
	devtool: 'cheap-module-eval-source-map',
	watch: true,

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: { presets: ['es2015','react', 'stage-2'] , compact: false }
			},
			{
				test: /\.json?$/,
				loader: 'json'
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /.*\.(gif|png|jpe?g|svg|ico)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack'
				]
			},
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),	
	],

	imageWebpackLoader: {
		pngquant:{
			quality: "65-90",
			speed: 4
		},
		svgo:{
			plugins: [
				{ emoveViewBox: false },
				{ removeEmptyAttrs: false}
			]
		}
	}
}

if(!config.DEBUG){
	devConfig.plugins.push(new webpack.optimize.DedupePlugin())
	devConfig.plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}))
	devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())
	devConfig.plugins.push(new webpack.NoErrorsPlugin())
	devConfig.watch = false
	delete devConfig.devtool
}


module.exports = devConfig