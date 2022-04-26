const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n,
};
