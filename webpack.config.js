const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env",["@babel/preset-react",{"runtime":"automatic"}]]
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App by M Umair",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
