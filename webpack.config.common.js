module.exports = {
  entry: {
    macro_copy: "./src/ts/macro_copy/index.tsx",
    timeapp: "./src/ts/timeapp/index.tsx",
  },
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
