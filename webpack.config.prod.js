const common = require("./webpack.config.common");

module.exports = {
  ...common,
  mode: "production",
  output: {
    clean: true,
    path: __dirname + "/dist",
    filename: "js/[name]-[fullhash].js",
    chunkFilename: "js/chunks/[name]-chunk-[chunkhash].js",
  },
};
