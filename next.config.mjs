/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'docs.vunsh.xyz',
          },
        ],
        destination: '/docs/:path*',
      },
    ];
  },
};

export default nextConfig;
