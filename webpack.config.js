const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const dist = path.resolve(__dirname, ".");
module.exports = {
  mode: "development",
  entry: {
    ".": "./main.ts",
  },
  output: {
    path: dist,
    filename: "[name]/index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    // contentBase: dist,
    compress: false,
    port: 8082,
    host: "0.0.0.0",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html",
      inject: false,
      title: "WebComponent-Lit",
    }),
  ],
};
