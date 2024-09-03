const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack5: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // Important: return the modified config
    return {
      ...config,
      watchOptions: {
        ignored: /node_modules/,
      }
    };
  },

  async headers() {
    return [
      {
        source: '/fonts/:slug*',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000'
          }
        ]
      }
    ];
  }
};
