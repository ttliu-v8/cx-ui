const IS_PROD = ('development' !== process.env.NODE_ENV);
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  publicPath: './',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: IS_PROD,
  filenameHashing:true,
  parallel: require('os')
    .cpus().length > 1,
  pwa: {},
  devServer: {
    port: 8005,
    proxy:{
      '/api':{
        target:'https://testm.jxlife.com.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/api1':{
        target:'https://uatziplu.jxlife.com.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/api1':''
        }
      },
      '/jixiangbao':{
        target:'https://testm.jxlife.com.cn/jixiangbao',
        changeOrigin:true,
        pathRewrite:{
          '^/jixiangbao':''
        }
      }
    }
  },
  configureWebpack: {
    devtool: IS_PROD ? 'none' : 'cheap-module-eval-source-map'
  },
  chainWebpack: config => {
    // 打包分析
    if (IS_PROD) {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static'
          }
        ]);
    }
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@apis", resolve("src/apis"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@lib", resolve("src/lib"))
      .set("@views", resolve("src/views"))
      .set("@public", resolve("./public"))
  }

};
