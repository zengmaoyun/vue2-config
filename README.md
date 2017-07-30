# vue2-config
study the config og vue2 with webpack 
>* 安装webpack
>* 安装webpck-dev-server
>* 安装的loader:
+ style-loader  
+ css-loader 
```
用yarn安装
yarn add --dev style-loader css-loader
```
+ file-loader
+ html-webpack-plugin(处理生成的老文件，没理解清楚)
+ clean-webpack-plugin(生成dist之前清理dist)
+ babel-preset-es2015  

错误记录：

+ 报错：$export is not a function
+ 解决： exclude的拍出node_moduldes写错了
```
{
	test: /\.js$/,
	use: ["babel-loader"],
	 exclude: /node_modules/
}
```

+ 问题2：
+ You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

为什么 vue 默认导出的是 vue.common.js，它和 vue.js 的区别在哪里，又有什么关系？

这个问题在囧克斯的博客中有提到。

Vue 最早会打包生成三个文件，一个是 runtime only 的文件 vue.common.js，一个是 compiler only 的文件 compiler.js，一个是 runtime + compiler 的文件 vue.js。

作者：Disciple_D
链接：http://www.jianshu.com/p/c440f17c0118
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。