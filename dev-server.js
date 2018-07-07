var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var express = require('express')
var app = express()
var opn = require('opn')
var path = require('path')

var port = 3000
var page = '/index.html'
var uri = 'http://localhost:' + port + page

/**
 * 给入口文件添加浏览器热刷新的关联
 */
for(let name in webpackConfig.entry){
    webpackConfig.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(webpackConfig.entry[name])
}

var compiler = webpack(webpackConfig)
/**
 * 我们的静态服务器是node.js,现在文件修改了
 * webpack-dev-middleware将修改的文件编译后
 * 告诉nodejs服务器哪些文件修改了
 * 并且把最新的文件上传到静态服务器
 */
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    quiet: true
})

/**
 * 用来将webpack-dev-middleware编译更新后的文件通知浏览器
 * 并且告诉浏览器如何更新文件,从而实现 Webpack hot reloading
 * 将这两个插件配合起来使用你就可以不需要webpack-dev-server
 * 即可以自己实现hot-replacement热替换功能
 */
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
})


/**
 * 挂载静态资源
 */
app.use('/static',express.static('./static'))

/** 
 * waitUntilValid是webpack-dev-middleware实例的方法，在编译成功之后调用 
 */
devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n')
})

/**
 * use热加载工具
 */
app.use(devMiddleware)
app.use(hotMiddleware)

/**
 * 启动服务,并打开默认浏览器跳到指定url
 */
app.listen(port, function (err) {
    opn(uri)
})