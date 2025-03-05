import React from 'react';
import { LocationStart } from '@/sections/Location_Start/LocationStart';
import { LocationAbout } from '@/sections/Location_About/LocationAbout';
import { LocationServices } from '@/sections/Location_Services/LocationServices';
import { LocationCoop } from '@/sections/Location_Coop/LocationCoop';
import { LocationArea } from '@/sections/Location_Area/LocationArea';

import renovationImg from '../../../assets/img/uslugi-remotnowe-tychy.webp';
import renovation2Img from '../../../assets/img/remont-lazienki-tychy.webp';
import decorationImg from '../../../assets/img/imitacja-betonu-tychy.webp';
import { Metadata } from 'next';

const services: ServiceBoxType[] = [
	{
		title: 'Usługi remontowe w Tychach',
		content:
			'Poszukujesz rzetelnej ekipy remontowej w Tychach? PRO Wnętrze to firma z bogatym doświadczeniem, specjalizująca się w kompleksowych remontach i wykończeniach wnętrz. Realizujemy projekty w Tychach i pobliskich miejscowościach, zapewniając pełen zakres usług – od starannego przygotowania powierzchni, przez malowanie i tapetowanie, po montaż sufitów podwieszanych oraz precyzyjne gładzenie i tynkowanie. Dbamy o terminowość oraz najwyższą jakość wykonania, gwarantując satysfakcję zarówno klientom indywidualnym, jak i firmom.',
		image: renovationImg,
		imageAlt: 'Tychy usługi remontowe',
	},
	{
		title: 'Tychy wykończenia wnętrz',
		content:
			'Planujesz remont i chcesz nadać swoim wnętrzom wyjątkowy charakter? Zespół PRO Wnętrze to eksperci, którzy kompleksowo zajmą się wykończeniem mieszkań i domów w Tychach oraz pobliskich miejscowościach. Oferujemy szeroki zakres usług, w tym remonty łazienek, kreatywne adaptacje przestrzeni oraz profesjonalne układanie podłóg. Każdy projekt realizujemy z pełnym zaangażowaniem, dbając o detale i dostosowując rozwiązania do Twoich oczekiwań.',
		image: renovation2Img,
		imageAlt: 'Wykończenia wnętrz Tychy',
	},
	{
		title: 'Techniki dekoracyjne',
		content:
			'Chcesz stworzyć nowoczesne i funkcjonalne wnętrze w Tychach? Zespół PRO Wnętrze to specjaliści od kompleksowych remontów i wykończeń mieszkań oraz domów na terenie Tychów i okolic. Oferujemy m.in. modernizację łazienek, kreatywne adaptacje przestrzeni oraz staranne układanie podłóg. Każdy projekt realizujemy z indywidualnym podejściem, zapewniając efekt, który nada Twoim wnętrzom niepowtarzalny styl i komfort użytkowania.',
		image: decorationImg,
		imageAlt: 'Tynki dekoracyjne w Tychach',
	},
];

const schema = {
	'@context': 'https://schema.org',
	'@type': 'HomeAndConstructionBusiness',
	name: 'PRO Wnętrze',
	alternateName:
		'Firma budowlana Tychy | Kompleksowe usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl/firma-budowlana/tychy',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'Poszukujesz rzetelnej ekipy remontowej w Tychach? Powierz swój projekt naszym specjalistom i ciesz się atrakcyjnie wykończonym wnętrzem!',
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
			name: 'Tychy',
			hasMap:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68825.70903898988!2d18.959030246617427!3d50.128386529802135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c7e202408281%3A0xda564472a0b326a1!2sTychy!5e0!3m2!1spl!2spl!4v1741193505977!5m2!1spl!2spl',
		},
	],
};

export const metadata: Metadata = {
	title: 'Firma budowlana Tychy | Kompleksowe usługi remontowo-budowlane',
	description:
		'Poszukujesz rzetelnej ekipy remontowej w Tychach? Powierz swój projekt naszym specjalistom i ciesz się atrakcyjnie wykończonym wnętrzem!',
	openGraph: {
		title: 'Firma budowlana Tychy | Kompleksowe usługi remontowo-budowlane',
		description:
			'Poszukujesz rzetelnej ekipy remontowej w Tychach? Powierz swój projekt naszym specjalistom i ciesz się atrakcyjnie wykończonym wnętrzem!',
		url: 'https://pro-wnetrze.pl/firma-budowlana/tychy',
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
		canonical: 'https://pro-wnetrze.pl/firma-budowlana/tychy',
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
				titleRow1='Firma budowlana Tychy'
				text1='Poszukujesz rzetelnej ekipy remontowej w Tychach?'
				text2='Powierz swój projekt naszym specjalistom i ciesz się atrakcyjnie wykończonym wnętrzem!'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Tychy'
				paragraph1='Jako rzetelna firma remontowo-budowlana działająca w Tychach i okolicach, oferujemy kompleksowe usługi wykończeniowe dostosowane do indywidualnych potrzeb klientów prywatnych i biznesowych. Stawiamy na nowoczesne rozwiązania i najwyższą jakość wykonania, dbając o każdy detal, by sprostać oczekiwaniom nawet najbardziej wymagających inwestorów.'
				paragraph2='W remontach liczy się precyzja, terminowość i dbałość o szczegóły. Nasz zespół fachowców zapewnia profesjonalną realizację na każdym etapie – od pierwszej konsultacji i rzetelnej wyceny, przez dokładne wykonanie prac, aż po finalne oddanie gotowego projektu. Dzięki transparentnej współpracy i wysokim standardom nasze realizacje wyróżniają się funkcjonalnością i nowoczesnym designem.'
				featureTitle='Dlaczego warto wybrać nasze usługi budowlane?'
			/>

			<LocationServices
				servicesArr={services}
				underline_word='Realizujemy'
				heading='większość usług remontowo-budowlanych'
				text='Jesteśmy firmą remontowo-budowlaną świadczącą kompleksowe usługi wykończeniowe na terenie Tychów i okolic. Realizujemy zarówno drobne modernizacje, jak i gruntowne remonty mieszkań, domów oraz lokali użytkowych. Dzięki naszemu doświadczeniu i wykorzystaniu nowoczesnych technologii zapewniamy trwałość wykonania oraz estetyczny efekt końcowy. Bez względu na zakres prac, oferujemy fachowe doradztwo i pełną obsługę – od przygotowania powierzchni po staranne wykończenie wnętrz, dostosowując rozwiązania do indywidualnych potrzeb klientów prywatnych oraz biznesowych.'
			/>
			<LocationCoop />
			<LocationArea
				location='Tychy'
				mapHref='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68825.70903898988!2d18.959030246617427!3d50.128386529802135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c7e202408281%3A0xda564472a0b326a1!2sTychy!5e0!3m2!1spl!2spl!4v1741193505977!5m2!1spl!2spl'>
				Zmień swoje wnętrza z naszą kompleksową ofertą remontowo-wykończeniową –
				od niewielkich modernizacji po całkowitą metamorfozę przestrzeni.
				Stawiamy na najwyższą jakość, terminowość oraz funkcjonalne rozwiązania,
				które podnoszą komfort mieszkania, pracy czy użytkowania lokali
				komercyjnych.
			</LocationArea>
		</>
	);
};
export default LocationPage;
