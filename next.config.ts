import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['assets.aceternity.com'],
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'pro-wnetrze.pl',
					},
				],
				permanent: true,
				destination: 'https://www.pro-wnetrze.pl/:path*',
			},
		];
	},
};

export default nextConfig;
