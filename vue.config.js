const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: {
      entry: "src/main.js", // 入口
    },
  },
  publicPath: "./",
  lintOnSave: false,
  // devServer
 /*  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://lushengtao0115.github.io",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  }, */
});
