const path = require('path')
const { test } = require('../module')
module.exports = {
    mode: "none",//工作模式
    entry: './src/main.css', // 入口
    output: { // 输出
        filename: 'bundle.js',
        path: path.join(__dirname, 'output')
    },
    //其它资源模块加载
    module:{
        rules: [
            {
                test:/.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
           }
        ]
    }
}