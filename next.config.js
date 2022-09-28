// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPWA({
  nextConfig,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
})

module.exports = withPWA({
  nextConfig
})
