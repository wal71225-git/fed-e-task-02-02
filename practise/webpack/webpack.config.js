const path = require('path')
const { test } = require('../webpack-import-export/module')
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
            // webpack只是一个打包工具，加载器用来编译转换代码
            //js文件
            {
                test:/.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // css文件
            {
                test:/.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
           },
        //    // 图片文件
        //    {
        //        test: /.png$/,
        //        use: 'file-loader'
        //    }
        {
           test:  /.png$/,
           use: {
             loader:'url-loader',
             options: {
                limit: 10 * 1024 // 10KB
             }
           }
        },
        // html文件
        {
            test:  /.html$/,
            use: {
              loader:'html-loader',
              options: {
                  attrs: ['img:src','a:href'] // 设置需要打包的引用资源
              }
            }
         }
        ]
    }
}