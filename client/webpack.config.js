const path =require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, './dist/'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
			{test: /\.vue$/, use: 'vue-loader'},
			//url-loader?后面指定配置参数， 当图片大于7631字节时，会使用file-loader模块去加载，即不会转换为base-64的格式
			//name指定源文件的命名格式
			{test: /\.(jpg|png|jpeg|bmp|gif)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
			{test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
			//在.vue文件中使用scss，或者单独使用.scss都要经过此配置
			{test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader']},
			{test: /\.css/, use: ['style-loader', 'css-loader']}
		]
	}
}