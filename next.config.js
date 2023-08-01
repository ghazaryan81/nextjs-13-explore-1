/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
 reactStrictMode: true,
 swcMinify: true,
 compress: false,

 sassOptions: {
  logger: {
   warn: function (message) {
    console.warn(message);
   },
   debug: function (message) {
    console.log(message);
   },
   error: function (message) {
    console.log(message);
   },
  },
 },

 webpack: (
  config,
  { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack, ...options },
 ) => {
  // config.optimization.minimizer = [];
  // config.optimization.minimize = false;

  return config;
 },
};

module.exports = nextConfig;
