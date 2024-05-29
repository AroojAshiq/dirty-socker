// const withBuilderDevTools = require("@builder.io/dev-tools/next")();
const withCSS = require("@zeit/next-css");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
};
module.exports = withCSS({});

module.exports = nextConfig;
