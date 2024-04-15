import withSvgr from 'next-plugin-svgr'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  redirects: async () => [],
  rewrites: async () => [],
  webpack: (config) => {
    config.externals.push('pino-pretty', 'encoding')
    return config
  }
}

export default withSvgr(nextConfig)
