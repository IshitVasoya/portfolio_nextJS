/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // Required when using output: 'export'
  },
};

module.exports = nextConfig;
