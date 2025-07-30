import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import SVGSpritemapPlugin from "svg-spritemap-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default {
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
            ["pngquant", { quality: [0.6, 0.8] }],
            ["svgo", { plugins: [{ name: "removeMetadata", active: true }] }],
          ],
        },
      },
    }),
    new SVGSpritemapPlugin("./src/icons/*.svg", {
      output: {
        filename: "assets/img/sprite.svg",
        svg: {
          sizes: false,
          xmlDeclaration: false,
          doctypeDeclaration: false,
          namespaceIDs: false,
          namespaceClassnames: false,
        },
      },
      sprite: {
        prefix: "icon-",
        generate: {
          title: false,
          use: true,
        },
      },
    }),
  ],
};
