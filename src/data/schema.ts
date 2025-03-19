export const businessSchema = {
	'@context': 'https://schema.org',
	'@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
	'@id': 'https://pro-wnetrze.pl/#business',
	name: 'PRO Wnętrze – Remonty i Wykończenia Wnętrz Żywiec, Bielsko-Biała i okolice',
	alternateName: 'Firma budowlana Żywiec, Bielsko-Biała | Usługi remontowo-budowlane Śląsk i Małopolska',
	url: 'https://pro-wnetrze.pl',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'PRO Wnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz na terenie województwa Śląskiego oraz Małopolskiego. Zaufaj naszym fachowcom!',
	telephone: '+48 515-484-232',
	email: 'prownetrze.zywiec@gmail.com',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'ul. Parkowa 43',
		addressLocality: 'Kocierz Moszczanicki',
		postalCode: '34-321',
		addressCountry: 'PL',
	},
	hasMap: 'https://maps.app.goo.gl/16b83CP9iQeqTBjp9',
	geo: {
		'@type': 'GeoCoordinates',
		latitude: '49.74023502968384',
		longitude: '19.259109544674573',
	},
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
		opens: '07:00',
		closes: '18:00',
	},
	sameAs: [
		'https://www.instagram.com/prownetrze/profilecard/?igsh=NWxrOGMzazA2M29s',
		'https://g.co/kgs/2t1nJxJ',
	],
	serviceType: 'Usługi remontowo-budowlane',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+48 515-484-232',
		contactType: 'customer service',
		email: 'prownetrze.zywiec@gmail.com',
	},
	areaServed: [
		{
			'@type': 'AdministrativeArea',
			name: 'Województwo Śląskie',
		},
		{
			'@type': 'AdministrativeArea',
			name: 'Województwo Małopolskie',
		},
	],
};
