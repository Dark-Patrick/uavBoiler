
const path = require('path')
module.exports = {
    publicPath: './',
    assetsDir: 'static',
    assetsPublicPath: './',
    outputDir: 'uavBoiler',
   
    runtimeCompiler: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            // '/api': {
            //     target: process.env.VUE_APP_BASE_URL,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         "^/api": ''

            //     }
            // },
            '/juhe': {
                target: "http://apis.juhe.cn",
                changeOrigin: true,
                autoRewrite:true,
                cookieDomainRewrite:true,
                ws:true,
                pathRewrite: {
                    "^/juhe/": ''
                }
            },
        },
    },

    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({ //配置项，详见官方文档
                        remUnit: 192 // 换算的基数
                    })
                ]
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    }
}
