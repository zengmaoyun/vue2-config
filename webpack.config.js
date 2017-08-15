const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  //css合成
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理dist


module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	
	entry: "./src/category/appcate_service/main.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].js"
	},
	resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions:['.js','.scss','.vue','.json']// 可以不加后缀, 直接使用 import xx from 'xx' 的语法
    },
	//热更新插件
	devServer: {
    	contentBase: './dist'
    },
	module: {
		rules: [{
			test: /\.js$/,
			use: ["babel-loader"],
			exclude: /node_modules/
		}, {
			test: /\.vue$/,
			use: ["vue-loader"],
			exclude: /node_modules/
		}, {
	        test: /\.(png|svg|jpg|gif)$/,
	        use: ['file-loader']
	    },{
	        test: /\.scss$/,
	        use: ExtractTextPlugin.extract({
	          fallback: 'style-loader',
	          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
	          use: ['css-loader', 'sass-loader']
	        })
      	}],
	},
	plugins: [
		//简写:
	    //new ExtractTextPlugin('style.css')
	    new ExtractTextPlugin({
		    filename:  (getPath) => {
		      return getPath('css/[name].css').replace('css', 'css');
		    },
		    allChunks: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html', /*文件名*/
            template: './src/category/appcate_service/index.html', /*模板路径*/
            inject: true  /*css和js按位置放置，body和head里面*/
      	}),
      	new CleanWebpackPlugin(['dist'])
	]
}