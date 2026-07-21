/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you use next/image, unoptimize it for static hosting:
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig