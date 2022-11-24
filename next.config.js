/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['syaikh-ali-jaber.yhotie.com', 'drive.google.com','blogger.googleusercontent.com','picsum.photos', 'lh3.googleusercontent.com','avatars.githubusercontent.com', 'images.pexels.com'],
  },
}

module.exports = nextConfig
