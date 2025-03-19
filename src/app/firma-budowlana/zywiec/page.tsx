import React from 'react';
import { LocationStart } from '@/sections/Location_Start/LocationStart';
import { LocationAbout } from '@/sections/Location_About/LocationAbout';
import { LocationServices } from '@/sections/Location_Services/LocationServices';
import { LocationCoop } from '@/sections/Location_Coop/LocationCoop';
import { LocationArea } from '@/sections/Location_Area/LocationArea';

import renovationImg from '../../../assets/img/uslugi-remontowe.jpg';
import renovation2Img from '../../../assets/img/kompleksowy-remont.webp';
import decorationImg from '../../../assets/img/dekorowanie-scian.webp';
import { Metadata } from 'next';

const services: ServiceBoxType[] = [
	{
		title: 'Usługi remontowe w Żywcu',
		content:
			'Potrzebujesz solidnej ekipy remontowej w Żywcu? Nasza firma zajmuje się kompleksową realizacją prac remontowych – od przygotowania powierzchni po końcowe wykończenie. Wspieramy zarówno drobne poprawki, jak i duże projekty obejmujące malowanie ścian, tapetowanie, montaż sufitów podwieszanych czy gładzenie tynków. Dzięki wieloletniemu doświadczeniu zapewniamy terminowość i wysoką jakość usług.',
		image: renovationImg,
		imageAlt: 'Żywiec wykończenia wnętrz',
	},
	{
		title: 'Żywiec wykończenia wnętrz',
		content:
			'Marzysz o pięknie wykończonym wnętrzu? Nasz zespół specjalizuje się w kompleksowych wykończeniach mieszkań i domów w Żywcu i okolicach. Oferujemy m.in. remonty łazienek, adaptacje poddaszy, układanie podłóg, a także montaż stolarki okiennej. Stawiamy na profesjonalne doradztwo oraz indywidualne podejście do każdego projektu, abyś mógł cieszyć się wymarzonym efektem końcowym.',
		image: renovation2Img,
		imageAlt: 'Wykończenia wnętrz Żywiec',
	},
	{
		title: 'Techniki dekoracyjne',
		content:
			'Chcesz nadać wnętrzu unikalny charakter? Proponujemy szereg dekoracyjnych rozwiązań, które wyróżnią Twoje wnętrze. Wykonujemy m.in. imitację betonu, glinkę wenecką, trawertyn czy tynki dekoracyjne, dodając przestrzeni elegancji i niepowtarzalnego stylu. Zadbamy o odpowiedni dobór materiałów i perfekcyjne wykonanie, tak aby efekt zachwycał przez lata.',
		image: decorationImg,
		imageAlt: 'Tynki dekoracyjne Żywiec',
	},
];

const schema = {
	'@context': 'https://schema.org',
	'@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
	'@id': 'https://pro-wnetrze.pl/firma-budowlana/zywiec#local',
	isPartOf: {
		'@type': 'WebPage',
		'@id': 'https://pro-wnetrze.pl',
	},
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	name: 'PRO Wnętrze',
	alternateName:
		'Firma budowlana Żywiec | Kompleksowe usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl/firma-budowlana/oswiecim',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'Szukasz firmy budowlanej w okolicach Żywca? Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni',
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
		{
			'@type': 'City',
			name: 'Żywiec',
			hasMap: 'https://www.google.pl/maps/place/%C5%BBywiec/',
		},
	],
};

export const metadata: Metadata = {
	title: 'Firma budowlana Żywiec | Kompleksowe usługi remontowo-budowlane',
	description:
		'Szukasz firmy budowlanej w okolicach Żywca? Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni',
	openGraph: {
		title: 'Firma budowlana Żywiec | Kompleksowe usługi remontowo-budowlane',
		description:
			'Szukasz firmy budowlanej w okolicach Żywca? Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni',
		url: 'https://pro-wnetrze.pl/firma-budowlana/zywiec',
		siteName: 'PRO Wnętrze',
		images: [
			{
				url: 'https://pro-wnetrze.pl/og_img.jpg',
				width: 1200,
				height: 630,
				alt: 'PROWnętrze Logo',
			},
		],
		type: 'website',
		locale: 'pl_PL',
	},
	alternates: {
		canonical: 'https://pro-wnetrze.pl/firma-budowlana/zywiec',
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
				titleRow1='Firma budowlana Żywiec'
				text1='Szukasz firmy budowlanej w okolicach Żywca?'
				text2='Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Żywiec'
				paragraph1='Jesteśmy doświadczoną firmą remontowo-budowlaną działającą na terenie między innymi Żywca i okolic. Nasze usługi remontowo wykończeniowe, w tym kompleksowe wykończenia wnętrz pod klucz, to gwarancja najwyższej jakości oraz terminowości. Jako firma remontowa, realizujemy projekty dla klientów indywidualnych i biznesowych, dbając o każdy detal.'
				paragraph2='Dzięki wieloletniemu doświadczeniu wiemy, jak ważne jest terminowe i rzetelne wykonanie remontu. Nasza ekipa składa się z wykwalifikowanych fachowców, którzy dbają o wysoką jakość usług oraz estetykę każdego wykończenia. Gwarantujemy przejrzysty proces współpracy – od wyceny, przez realizację, aż po odbiór gotowej przestrzeni.'
				featureTitle='Dlaczego warto wybrać nasze usługi budowlane?'
			/>

			<LocationServices
				servicesArr={services}
				underline_word='Realizujemy'
				heading='większość usług remontowo-budowlanych'
				text='Jesteśmy firmą budowlaną specjalizującą się w kompleksowych remontach i wykończeniach wnętrz. Oferujemy szeroki zakres usług, obejmujących zarówno drobne modernizacje, jak i generalne remonty domów, mieszkań oraz lokali użytkowych. Dzięki doświadczeniu i wykorzystaniu sprawdzonych materiałów gwarantujemy solidne wykonanie oraz estetyczny efekt końcowy. Niezależnie od skali projektu, zapewniamy profesjonalne doradztwo oraz kompleksową realizację prac – od przygotowania powierzchni po finalne wykończenie wnętrz. Współpracujemy zarówno z klientami indywidualnymi, jak i firmami, oferując rozwiązania dostosowane do ich potrzeb i oczekiwań.'
			/>
			<LocationCoop />
			<LocationArea
				location='Żywiec'
				mapHref='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82567.17693981442!2d19.127505038383198!3d49.70657924019557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47142623c76da4bb%3A0x85a9dc5388d3f017!2zxbt5d2llYw!5e0!3m2!1spl!2spl!4v1741187267142!5m2!1spl!2spl'>
				Jeśli chcesz całkowicie odmienić swoją przestrzeń przyjemnością wykonamy
				kompleksowe prace remontowe, które zwiększą wygodę i funkcjonalność
				Twojego domu, apartamentu, biura czy obiektu komercyjnego. Realizujemy
				remonty – od drobnych modernizacji po pełne wykończenia wnętrz. Dzięki
				naszemu doświadczeniu i dbałości o detale możesz liczyć na terminową
				realizację oraz najwyższą jakość wykonania.
			</LocationArea>
		</>
	);
};

export default LocationPage;
