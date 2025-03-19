import React from 'react';
import { LocationStart } from '@/sections/Location_Start/LocationStart';
import { LocationAbout } from '@/sections/Location_About/LocationAbout';
import { LocationServices } from '@/sections/Location_Services/LocationServices';
import { LocationCoop } from '@/sections/Location_Coop/LocationCoop';
import { LocationArea } from '@/sections/Location_Area/LocationArea';

import renovationImg from '../../../assets/img/uslugi-remontowe-bielsko.webp';
import renovation2Img from '../../../assets/img/wykonczenia-wnetrz-bielsko-biala.webp';
import decorationImg from '../../../assets/img/tynki-dekoracyjne-bielsko-biala.webp';
import { Metadata } from 'next';

const services: ServiceBoxType[] = [
	{
		title: 'Usługi remontowe w Bielsku-Białej',
		content:
			'Szukasz doświadczonej ekipy remontowej w Bielsku-Białej? Firma PRO Wnętrze oferuje kompleksowe usługi remontowe, obejmujące cały zakres prac – od starannego przygotowania powierzchni, aż po perfekcyjne wykończenie. Z pełnym zaangażowaniem podejmujemy się zarówno drobnych poprawek, jak i rozbudowanych projektów remontowych, w tym malowania ścian, montażu tapet, instalacji sufitów podwieszanych oraz profesjonalnego gładzenia i tynkowania. Wieloletnie doświadczenie gwarantuje terminowość realizacji oraz wysoki standard wykonania.',
		image: renovationImg,
		imageAlt: 'Bielsko usługi remontowe',
	},
	{
		title: 'Bielsko-Biała wykończenia wnętrz',
		content:
			'Czy marzysz o idealnie wykończonym wnętrzu w Oświęcimiu? Nasz zespół PRO Wnętrze to eksperci od kompleksowych wykończeń mieszkań i domów w Oświęcimiu i okolicach.  W naszej ofercie znajdziesz między innymi:  remonty łazienek,  nowoczesne adaptacje poddaszy,  profesjonalne oraz układanie podłóg. Zapewniamy profesjonalne doradztwo i  ściśle indywidualne podejście do każdego zlecenia,  abyś w pełni cieszył się wymarzonym efektem.',
		image: renovation2Img,
		imageAlt: 'Wykończenia wnętrz Bielsko-Biała',
	},
	{
		title: 'Techniki dekoracyjne',
		content:
			'Marzysz o nowoczesnym i funkcjonalnym mieszkaniu w Bielsku-Białej? Zespół ekspertów z PRO Wnętrze specjalizuje się w kompleksowych wykończeniach mieszkań i domów, oferując rozwiązania idealnie dopasowane do Twoich potrzeb. W naszej ofercie znajdziesz m.in. remonty łazienek, kreatywne adaptacje przestrzeni oraz precyzyjne układanie podłóg. Zapewniamy fachowe doradztwo i indywidualne podejście do każdego projektu, gwarantując efekt, który odmieni Twoje wnętrze.',
		image: decorationImg,
		imageAlt: 'Tynki dekoracyjne w Bielsku-Białej',
	},
];

const schema = {
	'@context': 'https://schema.org',
	'@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
	'@id': 'https://pro-wnetrze.pl/firma-budowlana/bielsko-biala#local',
	isPartOf: {
		'@type': 'WebPage',
		'@id': 'https://pro-wnetrze.pl',
	},
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	name: 'PRO Wnętrze',
	alternateName:
		'Firma budowlana Bielsko-Biała | Kompleksowe usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl/firma-budowlana/bielsko-biala',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'Potrzebujesz remontu w Bielsku-Białej? Zaufaj naszym ekspertom i ciesz się nowoczesnym, funkcjonalnym wnętrzem!',
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
			'@type': 'City',
			name: 'Bielsko-Biała',
			hasMap:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116499.80613606292!2d18.92376414909595!3d49.817907290437205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169f63dd80507b%3A0x6811f587fa4fe3a7!2sBielsko-Bia%C5%82a!5e0!3m2!1spl!2spl!4v1741188477722!5m2!1spl!2spl',
		},
	],
};

export const metadata: Metadata = {
	title:
		'Firma budowlana Bielsko-Biała | Kompleksowe usługi remontowo-budowlane',
	description:
		'Potrzebujesz remontu w Bielsku-Białej? Zaufaj naszym ekspertom i ciesz się nowoczesnym, funkcjonalnym wnętrzem!',
	openGraph: {
		title:
			'Firma budowlana Bielsko-Biała | Kompleksowe usługi remontowo-budowlane',
		description:
			'Potrzebujesz remontu w Bielsku-Białej? Zaufaj naszym ekspertom i ciesz się nowoczesnym, funkcjonalnym wnętrzem!',
		url: 'https://pro-wnetrze.pl/firma-budowlana/bielsko-biala',
		siteName: 'PRO Wnętrze',
		images: [
			{
				url: 'https://pro-wnetrze.pl/og_img.jpg',
				width: 1200,
				height: 630,
				alt: 'PRO Wnętrze Logo',
			},
		],
		type: 'website',
		locale: 'pl_PL',
	},
	alternates: {
		canonical: 'https://pro-wnetrze.pl/firma-budowlana/bielsko-biala',
	},
};

const LocationPage = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<LocationStart
				titleRow1='Firma budowlana'
				titleRow2='Bielsko-Biała'
				text1='Potrzebujesz remontu w Bielsku-Białej?'
				text2='Zaufaj naszym ekspertom i ciesz się nowoczesnym, funkcjonalnym wnętrzem!'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Bielsko-Biała'
				paragraph1='Jako doświadczona firma remontowo-budowlana działająca na terenie Bielsku-Białej i okolic, oferujemy kompleksowe wykończenia wnętrz pod klucz. Specjalizujemy się w realizacji projektów zarówno dla klientów indywidualnych, jak i biznesowych, dbając o każdy detal i gwarantując najwyższy standard wykonania.'
				paragraph2='Rozumiemy, jak ważna jest terminowość i precyzja w realizacji remontów. Nasi wykwalifikowani fachowcy zapewniają pełen profesjonalizm na każdym etapie – od szczegółowej wyceny, przez realizację, aż po odbiór ukończonego projektu. Dzięki transparentnemu procesowi współpracy, Twoje wnętrza zyskają nowoczesny i funkcjonalny charakter.'
				featureTitle='Dlaczego warto wybrać nasze usługi budowlane?'
			/>

			<LocationServices
				servicesArr={services}
				underline_word='Realizujemy'
				heading='większość usług remontowo-budowlanych'
				text='Jesteśmy firmą budowlaną specjalizującą się w kompleksowych remontach i wykończeniach wnętrz, świadcząc usługi na terenie Bielsku-Białej i okolic. Oferujemy szeroki zakres prac – od drobnych modernizacji po generalne remonty domów, mieszkań i lokali użytkowych. Dzięki naszemu wieloletniemu doświadczeniu oraz stosowaniu sprawdzonych technologii gwarantujemy solidne wykonanie i estetyczny efekt końcowy. Bez względu na skalę projektu, zapewniamy fachowe doradztwo oraz kompleksową realizację – od przygotowania powierzchni po finalne wykończenie wnętrz, dostosowując rozwiązania do indywidualnych potrzeb klientów biznesowych i prywatnych.'
			/>
			<LocationCoop />
			<LocationArea
				location='Bielsko-Biała'
				mapHref='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116499.80613606292!2d18.92376414909595!3d49.817907290437205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169f63dd80507b%3A0x6811f587fa4fe3a7!2sBielsko-Bia%C5%82a!5e0!3m2!1spl!2spl!4v1741188477722!5m2!1spl!2spl'>
				Odmień swoje wnętrza dzięki naszym kompleksowym usługom
				remontowo-wykończeniowym – od drobnych modernizacji po pełne
				przekształcenia przestrzeni. Gwarantujemy terminowość, najwyższą jakość
				wykonania oraz poprawę komfortu i funkcjonalności Twojego domu,
				mieszkania, biura czy obiektu komercyjnego.
			</LocationArea>
		</>
	);
};
export default LocationPage;
