const common = require("./webpack.config.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...common,
  mode: "development",
  output: {
    path: __dirname + "/public",
    filename: "js/[name]-[fullhash].js",
    chunkFilename: "js/chunks/[name]-chunk-[chunkhash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["macro_copy"],
      filename: "macro_copy/index.html",
      template: "./src/template/macro_copy/index.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["timeapp"],
      filename: "timeapp/index.html",
      template: "./src/template/timeapp/index.html",
    }),
  ],
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
