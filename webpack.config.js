const common = require("./webpack.config.common");

module.exports = {
  ...common,
  mode: "development",
  output: {
    path: __dirname + "/public",
    filename: "js/[name]-[fullhash].js",
    chunkFilename: "js/chunks/[name]-chunk-[chunkhash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    //contentBase: __dirname + '/public'
    static: {
      staticOptions: {
        extensions: ["html"],
      },
    },
  },
};
