export const businessSchema = {
	'@context': 'https://schema.org',
	'@type': 'HomeAndConstructionBusiness',
	name: 'PROWnętrze',
	alternateName:
		'PROWnętrze - Firma budowlana Żywiec | usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz w Żywcu oraz regionach Krakowa, Andrychowa, Kęt i Bielsko-Białej. Zaufaj naszym fachowcom i ciesz się nową jakością przestrzeni!',
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
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		opens: '07:00',
		closes: '16:00',
	},
	sameAs: [
		'https://www.instagram.com/prownetrze/profilecard/?igsh=NWxrOGMzazA2M29s',
	],
	serviceType: 'Usługi remontowo-budowlane',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+48 515-484-232',
		contactType: 'customer service',
		email: 'prownetrze.zywiec@gmail.com',
	},
	areaServed: [
		{ '@type': 'City', name: 'Żywiec' },
		{ '@type': 'City', name: 'Kraków' },
		{ '@type': 'City', name: 'Andrychów' },
		{ '@type': 'City', name: 'Kęty' },
		{ '@type': 'City', name: 'Bielsko-Biała' },
	],
	makesOffer: [
		{
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: 'Kompleksowe wykończenia wnętrz',
				description:
					'Kompleksowe wykończenia wnętrz obejmujące wszystkie etapy prac wykończeniowych.',
			},
		},
		{
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: 'Gładzie gipsowe i montaż płyt GK',
				description:
					'Wykonujemy gładzie gipsowe oraz montaż płyt GK, gwarantując idealną powierzchnię pod dalsze prace wykończeniowe.',
			},
		},
		{
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: 'Malowanie i dekoracje ścian (tapetowanie)',
				description:
					'Profesjonalne malowanie, dekoracje ścian oraz tapetowanie, dostosowane do indywidualnych potrzeb klienta.',
			},
		},
		{
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: 'Tapety z włókna szklanego',
				description:
					'Instalacja tapet z włókna szklanego, które są trwałe i łatwe do utrzymania w czystości.',
			},
		},
		{
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: 'Układanie podłóg i paneli',
				description:
					'Profesjonalne układanie podłóg oraz paneli, gwarantujące estetyczny i trwały efekt.',
			},
		},
		{
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: 'Kafelkowanie i remonty łazienek',
				description:
					'Kompleksowe usługi kafelkowania i remontów łazienek, zapewniające nowoczesne i funkcjonalne rozwiązania.',
			},
		},
	],
};
