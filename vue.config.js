const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      entry:"src/main.js" // 入口
    }
  },
  lintOnSave:false,
  // devServer
})
