const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 自动清除打包目录插件
const HtmlWebpackPlugin = require('html-webpack-plugin') //html插件


module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: '[name]-[chunkhash:8].bundle.js',
        path: path.join(__dirname, 'dist'),
        // publicPath: 'dist/'
    },
    devServer:{
        contentBase: ['./public','./src'],
    },
    module: {
        rules: [
           {
            test:/.vue$/,
            use: 'vue-loader'
           },
           {
               test: /.js$/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env','@vue/cli-plugin-babel/preset']
                   }
               }
           },
          { test: /\.less$/, 
            use: [
            'style-loader', 
            'css-loader', 
            'less-loader'
            ] 
          },
         { test: /\.css$/, 
            use: [
            'style-loader', 
            'css-loader'
           ]
        },
        {
            test:/\.(png|jpg|jpeg|svg|gif)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:2048,
                        name:'[name].[ext]'
                    }
                }
            ]
        }
    ]
    },
    plugins: [
       new CleanWebpackPlugin(),
        // 用于生成index.html
        //new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}