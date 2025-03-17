const config = {
	siteUrl: 'https://pro-wnetrze.pl',
	generateRobotsTxt: false,
	exclude: ['/polityka-prywatnosci'],
	changefreq: 'monthly',
	priority: 0.5,
	sitemapSize: 5000,
	transform: async (config, path) => {
		let priority = 0.5;
		let changefreq = 'monthly';

		if (path === '/') {
			priority = 1.0;
			changefreq = 'weekly';
		} else if (path.startsWith('/firma-budowlana/')) {
			priority = 0.9;
			changefreq = 'monthly';
		} else if (
			path === '/uslugi-remontowo-budowlane' ||
			path === '/wykonczenia-wnetrz' ||
			path === '/tynki-dekoracyjne'
		) {
			priority = 0.8;
			changefreq = 'monthly';
		} else if (
			path.startsWith('/uslugi-remontowo-budowlane/') ||
			path.startsWith('/wykonczenia-wnetrz/') ||
			path.startsWith('/tynki-dekoracyjne/')
		) {
			priority = 0.8;
			changefreq = 'monthly';
		} else if (path === '/kontakt') {
			priority = 0.7;
			changefreq = 'monthly';
		}

		return {
			loc: path,
			changefreq,
			priority,
			lastmod: new Date().toISOString(),
		};
	},
};

export default config;
