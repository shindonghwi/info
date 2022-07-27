const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, "./public/index.html"),
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: path.join(__dirname, "index.web.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/build"),
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
