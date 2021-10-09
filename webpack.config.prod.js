const common = require("./webpack.config.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...common,
  mode: "production",
  output: {
    clean: true,
    path: __dirname + "/dist",
    filename: "js/[name]-[fullhash].js",
    chunkFilename: "js/chunks/[name]-chunk-[chunkhash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["macro_copy"],
      filename: "product/macro_copy/index.html",
      template: "./src/template/macro_copy/index.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["timeapp"],
      filename: "product/timeapp/index.html",
      template: "./src/template/timeapp/index.html",
    }),
  ],
};
