const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = {
    entry: {
        index: './app/src/main.js'
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
                test: /\.css$/,
                loader: extractTextPlugin.extract({//提取css成单独文件
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
                })
            }
            ,
            {
                test: /\.scss$/,
                loader: extractTextPlugin.extract({
                    use: [
                        {loader: "style-loader"}, // 将 JS 字符串生成为 style 节点
                            
                        {loader: "css-loader"}, // 将 CSS 转化成 CommonJS 模块
                             
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
                    outputPath: '/imgs'
                }
            }
            ,
            {
                test: /\.jsx$/, 
                loader: "jsx-loader"
            }
        ]
    }
    ,
    plugins: [
        new htmlWebpackPlugin({
            title: "index",
            filename: "./index.html",//路径相对于output.path
            template: "./app/src/index.html",
            chunks: ['index']
        }),
        new webpack.HotModuleReplacementPlugin(),//实现浏览器刷新必须
        new extractTextPlugin({
            filename: './app/src/css/[name].css'
        })
    ]
    ,
    mode: 'development'
}

module.exports = webpackConfig