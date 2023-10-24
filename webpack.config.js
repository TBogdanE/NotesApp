const path = require("path");
//const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "project.js", //
    path: path.resolve(__dirname, "dist"),
    //publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]", // Output path and filename for images
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /*new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["../dist/index.html"] },
    }),*/
  ],
};
