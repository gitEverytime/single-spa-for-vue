const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
module.exports = {
    lintOnSave:false,
    devServer:{
        host: '0.0.0.0',
        port:5100,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        // historyApiFallback: true,
    },
    publicPath:process.env.VUE_APP_publicPath,
    chainWebpack: config => {
        if(process.env.VUE_APP_SINGLERUN !== 'true'){
            config.externals(['vue', {'vue-router':'vueRouter'},'hytools'])
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
            .jsonpFunction('webpackJsonp_customers')
    },
    css:{
    loaderOptions:{
        postcss:{
            plugins:[require('postcss-plugin-namespace')('.customers-project',{ ignore: [ '*','#app' ] })]
        }
    }
}
}
