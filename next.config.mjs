/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Redirect boobismp.vunsh.xyz to Aternos
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'boobismp.vunsh.xyz',
          },
        ],
        destination: 'https://BoobiSMP.aternos.me/:path*',
        permanent: true,
      },

      // Redirect docs.vunsh.xyz to external docs site
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
