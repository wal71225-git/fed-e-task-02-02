const path = require('path')
const { test } = require('../module')
module.exports = {
    mode: "none",//工作模式
    entry: './src/index.js', // 入口
    output: { // 输出
        filename: 'bundle.js', // 文件名称
        path: path.join(__dirname, 'dist'), // 打包后文件地址
        publicPath:'/dist/' // 指定资源文件引用的目录
    },
    //其它资源模块加载
    module:{
        rules: [
            // css文件
            {
                test:/.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
           },
           // 图片文件
           {
               test: /.png$/,
               use: 'file-loader'
           }
        ]
    }
}