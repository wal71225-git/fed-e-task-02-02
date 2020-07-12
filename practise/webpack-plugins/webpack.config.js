const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { compilation } = require('webpack')
/* 
*通过插件实现去除js中的 注释符号，便于阅读
*插件是一个函数或者一个包含apply方法在的对象
*通过在webpack生命周期的钩子中挂载函数实现
*/
class MyPlugin {
    apply(compiler) {//此方法会在webpack启动时自动被调用
        console.log('MyPlugin 启动')
        // 通过tap方法给compiler对象的钩子函数emit（即将到输出到文档的钩子函数）上挂载函数
        // tap接收两个参数，第一个插件名称，第二个就是要挂载到钩子上的函数
        compiler.hooks.emit.tap('MyPlugin', compilation => {
                // compilation可以理解为此次打包的上下文
                for(const name in compilation.assets){
                   // console.log("============="+name) 文件名称
                   // console.log(compilation.assets[name].source()) 文件内容
                   if(name.endsWith('.js')) {
                       const contents = compilation.assets[name].source(); // 需要替换的文件内容
                       const replaceContents = contents.replace(/\/\*\*+\*\//g,'') // 替换后的内容
                       // 设置要输入到文档的内容
                       compilation.assets[name] = {
                           source: () => replaceContents,
                           size: ()=> replaceContents.length
                       }
                   }
                }
        })
    }
}

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        // publicPath: 'dist/'
    },
    module: {
        rules: [
           {
            test:/.md$/,
            use: [
                'html-loader',
                './markdown-loader'
            ]
           }
        ]
    },
    plugins: [
       new CleanWebpackPlugin(),
       // 用于生成index.html
       new HtmlWebpackPlugin({
           title: 'webpack-plugin-sample',
           meta: {
               viewport: 'width=device-width'
           },
           template: './src/index.html'
       }),
       // 生成多个html
       new HtmlWebpackPlugin({
           filename: 'about.html'
       }),
       new MyPlugin()
    ]
}