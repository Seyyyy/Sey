/**
 * @type {import('next').NextConfig}
 */

const APP_ENV = process.env.APP_ENV

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compiler: {
    reactRemoveProperties: process.env.APP_ENV !== 'production',
  },
}

if (APP_ENV === 'production') {
  nextConfig.output = 'export'
}

module.exports = nextConfig
