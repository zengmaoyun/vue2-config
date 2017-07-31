# vue2-config
## 项目介绍
+  使用webpack(最新) + vue2 搭建打包配置。
vue有一个脚手架vue-cli，功能很齐全，安装好之后马上就可以运行使用了，推荐使用
但是还是想自己动手用webpack搭建一个打包服务，走一下流程，更了解实现和原理。
涉及内容：vue2启动，热更新

>* 安装webpack
>* 安装webpck-dev-server
>* 安装的loader:
+ style-loader  
+ css-loader 
```
用yarn代替npm安装包
yarn add --dev style-loader css-loader
```
+ file-loader
+ html-webpack-plugin(处理生成的老文件，没理解清楚)
+ clean-webpack-plugin(生成dist之前清理dist)
+ babel-preset-es2015  


## 遇到的问题

### 报错：$export is not a function
解决： exclude的拍出node_moduldes写错了
```
{
	test: /\.js$/,
	use: ["babel-loader"],
	 exclude: /node_modules/
}
```

### 问题
+ You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

为什么 vue 默认导出的是 vue.common.js，它和 vue.js 的区别在哪里，又有什么关系？

这个问题在囧克斯的博客中有提到。

Vue 最早会打包生成三个文件，一个是 runtime only 的文件 vue.common.js，一个是 compiler only 的文件 compiler.js，一个是 runtime + compiler 的文件 vue.js。

作者：Disciple_D
链接：http://www.jianshu.com/p/c440f17c0118
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### 执行dev之后出来，热更新服务器指向的是main.js文件 
webpack 插件： html-webpack-plugin
没加下面的filename到index.html之前，执行dev之后出来，服务器指向的是main.js文件
``` javscript
new HtmlWebpackPlugin({
	filename: 'index.html',
    template: 'index.html',
	title: 'Development'
})
```

```
插件html-webpack-plugin会`自动帮你生成一个 html 文件，并且引用相关的 assets 文件(如 css, js)`，如果你有index.html问价，会自动读取里面的内容。

自己在六月第一次接触前端自动化构建，学习 webpack 和 react 时，曾经简单使用过这个插件，但也只是用了常见的几个选项，今天就跟着官方文档走一走，看看它的所有用法。

+ title
顾名思义，设置生成的 html 文件的标题。

+ filename
也没什么说的，生成 html 文件的文件名。默认为 index.html.

+ template
根据自己的指定的模板文件来生成特定的 html 文件。这里的模板类型可以是任意你喜欢的模板，可以是 html, jade, ejs, hbs, 等等
```

### 没有生成dist文件夹
原因：执行dev的时候，启动的是`webpack-dev-server --open`热更新，相应的代码会读进内存，所以不会生成dist文件夹，在执行build，也就是`webpack`直接打包，才会生成dist文件夹。