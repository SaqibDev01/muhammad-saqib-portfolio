/** @type {import('next').NextConfig} */
const nextConfig = {
  // static export for Netlify
  output: 'export',
  // images are already optimised, so next/image optimisation is off
  images: { unoptimized: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
