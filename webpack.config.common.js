const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    macro_copy: "./src/ts/macro_copy/index.tsx",
    timeapp: "./src/ts/timeapp/index.tsx",
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
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
