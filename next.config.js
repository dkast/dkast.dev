require("dotenv").config();
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    // .env plugin
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  }
});
