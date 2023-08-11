/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop',
        permanent: true,
      },
    ];
  },
  async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:8080/api/:path*",
			},
		];
	},
};

module.exports = nextConfig;
