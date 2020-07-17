//引入webpack公共配置文件
const webpack = require('webpack')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
module.exports = merge(common,{
    // mode: 'production',
    mode: 'none',
    devServer: {
        hot: true,
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})