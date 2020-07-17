# vue-app-base

1. 首先安装webpack基础插件 webpack webpack-cli webpack-dev-server
- npm install  webpack webpack-cli webpack-dev-server --save-dev

2. 引入webpack配置公共文件webpack.common.js,根据环境使用不同的配置文件(使用webpack-merge覆盖公共配置)
- npm install webpack-merge --save-dev 

3. 安装文件加载器，以及插件
- loader
-  》vue文件处理加载器 vue-loader, vue-template-compiler
-  npm install vue-loader vue-template-compiler --save-dev

- 》js文件处理器 babel-loader  @babel/core @babel/preset-env  
- npm install babel-loader @babel/core @babel/preset-env --save-dev

-  》css, less处理加载器 style-loader、css-loader、less-loader
-  npm install style-loader css-loader less-loader --save-dev

-  》图片字体svg等文件处理加载器 url-loader 
- npm install file-loader url-loader --save-dev

- plugins
-  》copy插件
- npm install copy-webpack-plugin --save-dev

-  》html插件
- npm install html-webpack-plugin --save-dev

4. 安装webpack-dev-server实现自动编译和自动刷新浏览器功能
- npm install webpack-dev-server --save-dev
- 使用devserver的代理功能

5. 使用热更新模块HMR

6. 代码分割--多入口打包和动态导入 