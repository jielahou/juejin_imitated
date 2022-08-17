module.exports = {
    lintOnSave: false,
    configureWebpack: (config) => {
        //调试JS
        config.devtool = "source-map"
      },
      css: {
        //查看CSS属于哪个css文件
        sourceMap: true,
      },
    
      // chainWebpack: config => {
      //   config.module.rule('md')
      //   .test(/\.md/)
      //   .use('vue-loader')
      //   .loader('vue-loader')
      //   .end()
      //   .use('vue-markdown-loader')
      //   .loader('vue-markdown-loader/lib/markdown-compiler')
      //   .options({
      //     raw: true
      //   })
      // }   

}
