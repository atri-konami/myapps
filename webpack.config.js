module.exports = {
  mode: "development",
  entry: {
    macro_copy: "./src/ts/macro_copy/macro_copy.tsx",
    timeapp: "./src/ts/timeapp/timeapp.tsx",
  },
  output: {
    path: __dirname + "/public/js",
    filename: "[name].js",
    chunkFilename: "chunks/[name]-chunk-[chunkhash].js",
    publicPath: "/js/",
  },
  devtool: "inline-source-map",
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

  devServer: {
    //contentBase: __dirname + '/public'
    static: {
      staticOptions: {
        extensions: ["html"],
      },
    },
  },
};
