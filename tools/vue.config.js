const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
module.exports = {
    lintOnSave:false,
    devServer:{
        host: '0.0.0.0',
        port:9010,
        //historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        proxy: {
            '/api': {
                //正式环境：
                target: 'http://localhost:8080/',
                pathRewrite: {"^/api" : ""},
                changeOrigin: true,
                secure: false
            },
        }, // 设置代理
    },
    publicPath:process.env.VUE_APP_publicPath,
    configureWebpack: {
        resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    enforce: 'pre',
                    loader: 'tslint-loader'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        }
    },
    chainWebpack: config => {
        // 不是独立运行的时候，将公共npm包抽离
        if(process.env.VUE_APP_SINGLERUN !== 'true') {
            config.externals(['vue',{'vue-router':'vueRouter'},{'element-ui':'elementUI'},'axios',{'vuex':'Vuex'},'hytools'])
        }
        config.plugin('script-ext-html')
            .use(ScriptExtHtmlWebpackPlugin,[{
                custom: {
                    test: /app.*\.js$/,
                    attribute: 'entry',
                    value: true
                }
            }]);
        config.output
            .libraryTarget('umd')
            .library('')
            .jsonpFunction('webpackJsonp_goods')
    },
    css:{
    loaderOptions:{
        postcss:{
            plugins:[require('postcss-plugin-namespace')('.tools-project',{ ignore: [ '*','#app' ] })]
        }
    }
}
}
