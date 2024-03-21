const resolve = require("path").resolve;
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry(),
    "admin-page": resolve(process.cwd(), "src", "admin-page", "index.js"),
  },
};
