const path = require("path");
const glob = require("glob");

const fileLoaderConfig = {
  loader: "file-loader",
  options: {
    name: "[path][name].[ext]",
    context: "src",
  },
};

module.exports = {
  entry: glob.sync(
    "./src/**/*.?(js|ts|tsx|css|scss|svg|png|jpg|woff|woff2|eot|ttf|otf)"
  ),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: fileLoaderConfig,
      },
      {
        test: /\.(css|scss)$/,
        use: fileLoaderConfig,
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(ts|tsx)$/,
        exclude: /(\.d\.ts|node_modules\/)/,
        use: [fileLoaderConfig, "ts-loader"],
      },
      {
        test: /\.d\.ts$/,
        loader: "ignore-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(\*.stories.js|node_modules\/)/,
        use: [fileLoaderConfig, "babel-loader"],
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: fileLoaderConfig,
      },
    ],
  },
};
