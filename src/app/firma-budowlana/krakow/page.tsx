import React from 'react';
import { LocationStart } from '@/sections/Location_Start/LocationStart';
import { LocationAbout } from '@/sections/Location_About/LocationAbout';
import { LocationServices } from '@/sections/Location_Services/LocationServices';
import { LocationCoop } from '@/sections/Location_Coop/LocationCoop';
import { LocationArea } from '@/sections/Location_Area/LocationArea';

import renovationImg from '../../../assets/img/uslugi-remontowe-krakow.webp';
import renovation2Img from '../../../assets/img/adaptacja-poddasza.webp';
import decorationImg from '../../../assets/img/stiuk-wenecki.webp';
import { Metadata } from 'next';

const services: ServiceBoxType[] = [
	{
		title: 'Usługi remontowe w Krakowie',
		content:
			'Szukasz sprawdzonej ekipy remontowej w Krakowie? PRO Wnętrze to firma z bogatym doświadczeniem, specjalizująca się w kompleksowych remontach i wykończeniach wnętrz. Działamy na terenie Krakowa i okolic, oferując pełen zakres usług – od starannego przygotowania powierzchni, przez malowanie i tapetowanie, po montaż sufitów podwieszanych oraz precyzyjne gładzenie i tynkowanie. Dbamy o najwyższą jakość wykonania, terminowość i perfekcyjne wykończenie, aby sprostać oczekiwaniom zarówno klientów indywidualnych, jak i firm.',
		image: renovationImg,
		imageAlt: 'Kraków usługi remontowe',
	},
	{
		title: 'Kraków wykończenia wnętrz',
		content:
			'Planujesz remont i chcesz stworzyć wnętrze dopasowane do Twojego stylu? Zespół PRO Wnętrze to eksperci w kompleksowych wykończeniach mieszkań i domów na terenie Krakowa oraz okolic. Oferujemy szeroki zakres usług, obejmujący m.in. remonty łazienek, nowoczesne adaptacje przestrzeni oraz precyzyjne układanie podłóg. Każdy projekt realizujemy z dbałością o detale i pełnym zaangażowaniem, aby zapewnić najwyższą jakość i funkcjonalność wnętrza.',
		image: renovation2Img,
		imageAlt: 'Wykończenia wnętrz Kraków',
	},
	{
		title: 'Techniki dekoracyjne',
		content:
			'Chcesz odświeżyć swoje wnętrza i nadać im nowoczesny i elegancki wygląd w Krakowie? Zespół PRO Wnętrze to doświadczeni specjaliści, którzy kompleksowo realizują remonty oraz wykończenia mieszkań i domów na terenie Krakowa i okolic. Oferujemy m.in. modernizację łazienek, funkcjonalne adaptacje wnętrz oraz precyzyjne układanie podłóg. Każdy projekt traktujemy indywidualnie, dbając o najwyższą jakość wykonania oraz komfort użytkowania odnowionych przestrzeni.',
		image: decorationImg,
		imageAlt: 'Tynki dekoracyjne w Krakowie',
	},
];

const schema = {
	'@context': 'https://schema.org',
	'@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
	'@id': 'https://pro-wnetrze.pl/firma-budowlana/krakow#local',
	isPartOf: {
		'@type': 'WebPage',
		'@id': 'https://pro-wnetrze.pl',
	},
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	name: 'PRO Wnętrze',
	alternateName:
		'Firma budowlana Kraków | Kompleksowe usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl/firma-budowlana/krakow',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'Szukasz sprawdzonej ekipy remontowej w Krakowie? Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!',
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
			name: 'Kraków',
			hasMap:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97486.89411695105!2d19.938902148220475!3d50.05329204723824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1741196677958!5m2!1spl!2spl',
		},
	],
};

export const metadata: Metadata = {
	title: 'Firma budowlana Kraków | Kompleksowe usługi remontowo-budowlane',
	description:
		'Szukasz sprawdzonej ekipy remontowej w Krakowie? Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!',
	openGraph: {
		title: 'Firma budowlana Kraków | Kompleksowe usługi remontowo-budowlane',
		description:
			'Szukasz sprawdzonej ekipy remontowej w Krakowie? Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!',
		url: 'https://pro-wnetrze.pl/firma-budowlana/krakow',
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
		canonical: 'https://pro-wnetrze.pl/firma-budowlana/krakow',
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
				titleRow1='Firma budowlana Kraków'
				text1='Szukasz sprawdzonej ekipy remontowej w Krakowie?'
				text2='Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Kraków'
				paragraph1='Jako sprawdzona firma remontowo-budowlana działająca w Krakowie i okolicach, oferujemy kompleksowe usługi wykończeniowe dopasowane do potrzeb zarówno klientów indywidualnych, jak i firm. Korzystamy z nowoczesnych rozwiązań i dbamy o najwyższy standard wykonania, zwracając uwagę na każdy detal, aby spełnić oczekiwania nawet najbardziej wymagających inwestorów.'
				paragraph2='Precyzja, terminowość i dbałość o szczegóły to kluczowe aspekty naszych realizacji. Nasz doświadczony zespół zapewnia profesjonalną obsługę na każdym etapie – od pierwszej konsultacji i rzetelnej wyceny, przez staranne wykonanie prac, aż po finalne oddanie gotowego projektu. Dzięki przejrzystej współpracy i wysokim standardom nasze realizacje wyróżniają się funkcjonalnością oraz nowoczesnym wykończeniem, które idealnie wpisuje się w potrzeby mieszkańców Krakowa.'
				featureTitle='Dlaczego warto wybrać nasze usługi budowlane?'
			/>

			<LocationServices
				servicesArr={services}
				underline_word='Realizujemy'
				heading='większość usług remontowo-budowlanych'
				text='Jesteśmy firmą remontowo-budowlaną oferującą kompleksowe usługi wykończeniowe na terenie Krakowa i okolic. Wykonujemy zarówno drobne modernizacje, jak i kompleksowe remonty mieszkań, domów oraz lokali użytkowych. Nasze doświadczenie oraz zastosowanie nowoczesnych technologii gwarantują trwałość wykonania i estetyczny efekt końcowy. Bez względu na zakres projektu, zapewniamy fachowe doradztwo i kompleksową obsługę – od przygotowania powierzchni po precyzyjne wykończenie wnętrz, dostosowane do indywidualnych potrzeb klientów prywatnych i biznesowych.'
			/>
			<LocationCoop />
			<LocationArea
				location='Krakow'
				mapHref='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97486.89411695105!2d19.938902148220475!3d50.05329204723824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1741196677958!5m2!1spl!2spl'>
				Odmień swoje wnętrza dzięki naszym kompleksowym usługom
				remontowo-wykończeniowym – od drobnych ulepszeń po pełną transformację
				przestrzeni. Kładziemy nacisk na najwyższą jakość, terminowość oraz
				praktyczne rozwiązania, które zwiększają komfort życia, pracy i
				użytkowania lokali komercyjnych.
			</LocationArea>
		</>
	);
};
export default LocationPage;
