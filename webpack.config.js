const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const webpackConfig = {
    entry: {
        index: './app/src/js/main.js'
    }
    ,
    output: {
        publicPath:'http://localhost:3000/',
        path: __dirname + '/dist/',
        filename: '[name].js'
    }
    ,
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                // 这里得顺序是从右到左的
                use: [
                    {loader: "style-loader"}, // 将 JS 字符串生成为 style 节点,达到css热更新功能
                        
                    {loader: "css-loader"}, // 将 CSS 转化成 CommonJS 模块
                            
                    {loader: "sass-loader"}, // 将 Sass 编译成 CSS
                ]
            }
            ,
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                    outputPath: 'static/img'
                }
            }
            ,
            {
                test: /\.(jsx|js)$/, 
                loader: 'babel-loader'
            }
        ]
    }
    ,
    resolve:{
        alias: {
            toSrc: path.resolve(__dirname,'app/src/'),
            toStatic: path.resolve(__dirname,'static/')
        }
    }
    ,
    plugins: [
        new htmlWebpackPlugin({
            title: "index",
            filename: "./index.html",// 路径相对于output.path
            template: "./app/src/index.html",
            chunks: ['index']
        }),
        
        new webpack.HotModuleReplacementPlugin(),// 实现浏览器刷新必须
        new extractTextPlugin({
            filename: './app/src/css/[name].css'// 抽离的css文件地址
        })
    ]
    ,
    mode: 'development'
}

module.exports = webpackConfig