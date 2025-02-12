import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ['assets.aceternity.com'],
	},
	eslint: {
		ignoreDuringBuilds: false
	}
};

export default nextConfig;
