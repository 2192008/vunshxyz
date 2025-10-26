/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'docs.vunsh.xyz',
          },
        ],
        destination: 'https://docs.vunsh.xyz/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
