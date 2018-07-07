const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = {
    entry: {
        index: './app/src/js/main.js'
    }
    ,
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    }
    ,
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                loader: extractTextPlugin.extract({
                    // 这里得顺序是从右到左的
                    use: [
                        {loader: "style-loader"}, // 将 JS 字符串生成为 style 节点
                            
                        {loader: "css-loader"}, // 将 CSS 转化成 CommonJS 模块
                             
                        {loader: "sass-loader"}, // 将 Sass 编译成 CSS
                    ]
                })
            }
            ,
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[hash:8].[name].[ext]',
                    outputPath: '/static/imgs'
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