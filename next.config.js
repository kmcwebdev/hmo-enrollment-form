/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/acceptance',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.kmc.solutions'],
  },
};
