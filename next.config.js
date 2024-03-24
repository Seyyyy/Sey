/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compiler: {
    reactRemoveProperties: process.env.APP_ENV !== 'production',
  },
  output: 'export',
}

module.exports = nextConfig
