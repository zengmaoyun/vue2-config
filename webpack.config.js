const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  //css合成
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理dist


module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "build.js"
	},
	resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
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
      		title: 'Development'
      	}),
      	new CleanWebpackPlugin(['dist'])
	]
}