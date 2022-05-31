const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  //mode: "development",
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|pdf|doc|docx|ppt|pptx)(\?[a-z0-9=.]+)?$/,
        use: ["url-loader?limit=100000"],
      },
    ],
  },
  // devServer: {
  //   port: 8080,
  //   open: true,
  //   proxy: {
  //     "/api": "http://localhost:8080",
  //   },
  //   historyApiFallback: true,
  // },

  devServer: {
    contentBase: "./build",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
  ],
  resolve: {
    fallback: { crypto: false },
  },
};
