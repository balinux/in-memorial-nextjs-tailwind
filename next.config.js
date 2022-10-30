/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['syaikh-ali-jaber.yhotie.com', 'drive.google.com','blogger.googleusercontent.com','picsum.photos'],
  },
}

module.exports = nextConfig
