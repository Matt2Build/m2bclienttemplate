/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for simple sites
  // output: 'export',
  
  // Server mode for API routes
  output: 'standalone',
  
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
