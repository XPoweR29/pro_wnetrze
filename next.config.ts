import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	productionBrowserSourceMaps: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '*.acernity.com'
			}
		],
	},
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'www.pro-wnetrze.pl',
					},
				],
				permanent: true,
				destination: 'https://pro-wnetrze.pl/:path*',
			},
		];
	},
};

export default nextConfig;
