import Head from 'next/head';

interface SEOProps {
	page?: 'home' | 'privacy';
}

const SEO: React.FC<SEOProps> = ({ page = 'home' }) => {
	const businessSchema = {
		'@context': 'https://schema.org',
		'@type': 'ConstructionBusiness',
		name: 'PROWnętrze',
		alternateName:
			'PROWnętrze - Firma budowlana Żywiec | usługi remontowo budowlane',
		url: 'https://www.pro-wnetrze.pl',
		logo: 'https://www.pro-wnetrze.pl/logo.png',
		description:
			'PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz w Żywcu oraz regionach Krakowa, Andrychowa i Bielska. Zaufaj naszym fachowcom i ciesz się nową jakością przestrzeni!',
		telephone: '+48 515-484-232',
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
	};

	const breadcrumb =
		page === 'home'
			? {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Strona główna',
							item: 'https://www.pro-wnetrze.pl',
						},
					],
			  }
			: {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Strona główna',
							item: 'https://www.pro-wnetrze.pl',
						},
						{
							'@type': 'ListItem',
							position: 2,
							name: 'Polityka prywatności',
							item: 'https://www.pro-wnetrze.pl/polityka-prywatnosci',
						},
					],
			  };

	return (
		<Head>
			<meta
				property='og:title'
				content='Profesjonalne usługi remontowo-budowlane Żywiec | PROWnętrze - firma budowlana'
			/>
			<meta
				property='og:description'
				content='PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz w Żywcu oraz regionach Krakowa, Andrychowa i Bielska. Zaufaj naszym fachowcom i ciesz się nową jakością przestrzeni!'
			/>
			<meta property='og:url' content='https://www.pro-wnetrze.pl' />
			<meta
				property='og:image'
				content='https://www.pro-wnetrze.pl/logo.png'
			/>
			<meta property='og:type' content='website' />

			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						url: 'https://www.pro-wnetrze.pl',
						potentialAction: {
							'@type': 'SearchAction',
							target: 'https://www.pro-wnetrze.pl/?s={search_term_string}',
							'query-input': 'required name=search_term_string',
						},
					}),
				}}
			/>

			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(businessSchema),
				}}
			/>

			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumb),
				}}
			/>
		</Head>
	);
};

export default SEO;
