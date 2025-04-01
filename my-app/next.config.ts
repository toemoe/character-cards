const nextConfig = {
  output: 'export',
  basePath: '/character-cards',
  assetPrefix: '/character-cards/',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  }
};

export default nextConfig;