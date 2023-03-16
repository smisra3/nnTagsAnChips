const path = require("path");

const jsRules = {
  test: /\.jsx?$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: {
    presets: ["@babel/preset-react", "@babel/preset-env", "@babel/preset-flow"],
  },
};

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index",
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "nnTagsAndChips.js",
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true,
  },
  plugins: [],
  module: {
    rules: [jsRules],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
