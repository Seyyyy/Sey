/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  rootDir: 'src',
  productionBrowserSourceMaps: false,
  compiler: {
    reactRemoveProperties: process.env.APP_ENV !== 'production',
  },
}

module.exports = nextConfig
