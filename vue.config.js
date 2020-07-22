require("babel-polyfill");
console.log(process.env.NODE_ENV)
const path = process.env.NODE_ENV === 'development' ? '/' : process.env.NODE_ENV === 'prehub' || process.env.NODE_ENV === 'staging' ? '/vue-cli4' : '//imgt.log56.com/vue-cli4'
module.exports = {
  publicPath: path,//打包后的位置(如果不设置这个静态资源会报404)
  // publicPath: process.env.NODE_ENV === 'production' ? 'http://47.92.237.225:8080/dist' : './',
  outputDir: 'vue-cli4',//打包后的目录名称
  assetsDir: 'V1.0.0',//静态资源目录名称
  productionSourceMap: false,  //去掉打包的时候生成的map文件
  lintOnSave: true,
  filenameHashing: false,
  devServer: {
    port: 3333,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://test-microservice.log56.com',
        changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL,
        ws: true, // 是否代理websockets
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
}