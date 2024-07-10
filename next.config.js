const path = require('path');
module.exports = {
  images: {
    domains: ['api.suppkart.com'],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
  compress: true,
  webpack: config => {
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 0,
      maxInitialRequests: Infinity,
      automaticNameDelimiter: '-',
    };
    return config
  },
  async rewrites() {
    return [
      {
        source: '/custom-route/:path*',
        destination: '/another-path/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  },
}