const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.ts",
    devtool: isProduction ? "source-map" : "eval-source-map",
    output: {
      filename: isProduction ? "bundle.[contenthash].js" : "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        minify: isProduction
          ? {
              collapseWhitespace: true,
              removeComments: true
            }
          : false
      })
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist")
      },
      port: 3000,
      open: true,
      hot: true
    }
  };
};
