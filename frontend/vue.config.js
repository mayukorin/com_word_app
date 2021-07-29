module.exports = {
  outputDir: "../static",
  indexPath: "../templates/index.html",
  publicPath: process.env.NODE_ENV === "production" ? "/static" : "/",
  configureWebpack: {
    devServer: {
      //port: 8080,
      //disableHostCheck: true,
      watchOptions: {
        poll: true,
      },
    },
  },
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      entry: "src/main.js",
      title: "COMWORD",
    },
  },
};
