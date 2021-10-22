module.exports = {
  reactStrictMode: true,
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://frontend-interview-api.vercel.app/:path*',
        },
      ]
    },
};