const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
module.exports = {
    lintOnSave:false,
    devServer:{
        host: '0.0.0.0',
        port:9100,
        //historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
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
        if(process.env.VUE_APP_SINGLERUN !== 'true') {
            config.externals(
                [
                    'vue',
                    {'vue-router':'vueRouter'},
                    {'element-ui':'elementUI'},
                    'axios',
                    'hytools'
                ]
            )
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
            .jsonpFunction('webpackJsonp_main_project')
    },
    css:{
        loaderOptions:{
            postcss:{
                plugins:[require('postcss-plugin-namespace')('.main-project',{ ignore: [ '*','#app' ] })]
            }
        }
    }
}
