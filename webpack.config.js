const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const repoName = "New_v9_[company]";

const htmlFiles = fs
  .readdirSync(path.resolve(__dirname, "src"))
  .filter((file) => file.endsWith(".html"))
  .map(
    (file) =>
      new HtmlWebpackPlugin({
        template: `./src/${file}`,
        filename: file,
        inject: false,
        minify: false,
      })
  );

module.exports = {
  mode: "production",
  devtool: false,
  entry: path.resolve(__dirname, "./src/script.js"),
  resolve: {
    extensions: [".js"],
  },
  output: {
    publicPath: "public",
    filename: "script.js",
    path: path.resolve(__dirname, "public"),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlFiles,
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/assets", to: "assets" },
        { from: "./src/ext_files", to: "" },
        { from: "./src/style.css", to: "" },
        { from: "./src/script.js", to: "" },
      ],
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ["mozjpeg", { quality: 80, progressive: true }],
            ["pngquant", { quality: [0.7, 0.9] }],
            ["svgo", { plugins: [{ name: "removeMetadata", active: true }] }],
          ],
        },
      },
    }),
    new ZipPlugin({
      filename: `${repoName}.zip`,
      path: path.resolve(__dirname, "public"),
    }),
  ],
};
