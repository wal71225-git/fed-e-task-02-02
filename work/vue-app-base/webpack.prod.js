const copyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
//引入webpack公共配置文件
const common = require('./webpack.common')
module.exports = merge(common,{
    // mode: 'production',
    mode: 'none',
     devtool: 'source-map',
    plugins: [
        //new copyWebpackPlugin()
    ]
})