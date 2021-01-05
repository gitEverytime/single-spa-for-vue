const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports =  {
    entry:{
        app:'./src/index.js'
    },
    devServer: {
        port: 5003,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        disableHostCheck: true,
        // historyApiFallback: true,
        proxy: {
            '/api': {
                //正式环境：
                target: 'https://fspro.wx.nxmcs.com/',
                pathRewrite: {"^/api" : ""},
                changeOrigin: true,
                secure: false
            },
        }, // 设置代理
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'single-spa 微前端项目',
            template:'./index.html'
        }),
        new webpack.DefinePlugin({
            'process.env':{mode:'"dev"'}
        })
    ]
}
