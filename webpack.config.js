const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
        options: {
          name: "[name].[contenthash].[ext]",
        },
        include: path.resolve(__dirname, "src", "assets"),
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: ["node_modules", "./src"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
};
