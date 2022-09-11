const { withContentlayer } = require('next-contentlayer');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.ANALYZE,
});

/**
 * @type {import('next').NextConfig}
 */
module.exports = withBundleAnalyzer(
  withContentlayer({
    images: {
      formats: ['image/avif', 'image/webp'],
    },
    swcMinify: true,
    reactStrictMode: true,
  })
);
