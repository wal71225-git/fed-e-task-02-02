const path = require('path')
module.exports = {
    mode: "none",//工作模式
    entry: './src/main.js', // 入口
    output: { // 输出
        filename: 'bundle.js', // 文件名称
        path: path.join(__dirname, 'dist'), // 打包后文件地址
        publicPath:'/dist/' // 指定资源文件引用的目录
    },
    devServer: {
        contentBase: ['./public','./src'],
        proxy: {
            '/api': {
                // http:loaclhost:8080/api/users =>  https://api.github.com/api/users
                target: 'https://api.github.com',
                pathRewrite: { //地址重写
                    '^/api': ''
                },
                changeOrigin: true //不能使用localhost:8080 作为请求的主机名
            }
        }
    },
    //其它资源模块加载
    module:{

    }
}