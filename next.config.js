/** @type {import('next').NextConfig} */

// const {i18n} = require('./next-i18next.config')

const nextConfig = {
  webpack(config, context) {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  // i18n,
  reactStrictMode: true,
}
module.exports = nextConfig
