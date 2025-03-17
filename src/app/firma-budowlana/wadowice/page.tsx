import React from 'react';
import { LocationStart } from '@/sections/Location_Start/LocationStart';
import { LocationAbout } from '@/sections/Location_About/LocationAbout';
import { LocationServices } from '@/sections/Location_Services/LocationServices';
import { LocationCoop } from '@/sections/Location_Coop/LocationCoop';
import { LocationArea } from '@/sections/Location_Area/LocationArea';

import renovationImg from '../../../assets/img/uslugi-remontowe-wadowice.webp';
import renovation2Img from '../../../assets/img/remont-lazienki-wadowice.webp';
import decorationImg from '../../../assets/img/tynki-dekoracyjne-wadowice.webp';
import { Metadata } from 'next';

const services: ServiceBoxType[] = [
	{
		title: 'Usługi remontowe w Wadowicach',
		content:
			'Szukasz profesjonalnej ekipy remontowej w Wadowicach? PRO Wnętrze to firma z wieloletnim doświadczeniem, specjalizująca się w kompleksowych remontach i wykończeniach wnętrz. Działamy na terenie Wadowic i okolic, oferując szeroki zakres usług – od precyzyjnego przygotowania powierzchni, poprzez malowanie i tapetowanie, aż po montaż sufitów podwieszanych oraz perfekcyjne gładzenie i tynkowanie. Stawiamy na terminowość, wysoką jakość wykonania i dbałość o detale, zapewniając satysfakcję zarówno klientom indywidualnym, jak i biznesowym.',
		image: renovationImg,
		imageAlt: 'Wadowice usługi remontowe',
	},
	{
		title: 'Wadowice wykończenia wnętrz',
		content:
			'Planujesz remont i chcesz stworzyć przestrzeń dopasowaną do Twoich potrzeb? Zespół PRO Wnętrze to specjaliści od kompleksowych wykończeń mieszkań i domów w Wadowicach oraz okolicznych miejscowościach. Oferujemy szeroki wachlarz usług, w tym remonty łazienek, funkcjonalne adaptacje wnętrz oraz precyzyjne układanie podłóg. Każdy projekt realizujemy z dbałością o detale i pełnym zaangażowaniem, aby spełnić Twoje oczekiwania i nadać wnętrzom nową jakość.',
		image: renovation2Img,
		imageAlt: 'Wykończenia wnętrz Wadowice',
	},
	{
		title: 'Techniki dekoracyjne',
		content:
			'Chcesz odświeżyć swoje wnętrza i nadać im nowoczesny, funkcjonalny charakter w Wadowicach? Zespół PRO Wnętrze to doświadczeni specjaliści, którzy kompleksowo realizują remonty oraz wykończenia mieszkań i domów w Wadowicach i okolicach. Oferujemy m.in. modernizację łazienek, przemyślane adaptacje przestrzeni oraz precyzyjne układanie podłóg. Do każdego projektu podchodzimy indywidualnie, dbając o najwyższą jakość wykonania i komfort użytkowania odnowionych wnętrz.',
		image: decorationImg,
		imageAlt: 'Tynki dekoracyjne w Wadowicach',
	},
];

const schema = {
	'@context': 'https://schema.org',
	'@type': 'HomeAndConstructionBusiness',
	'@id': 'https://pro-wnetrze.pl/firma-budowlana/wadowice#business',
	name: 'PRO Wnętrze',
	alternateName:
		'Firma budowlana Wadowice | Kompleksowe usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl/firma-budowlana/wadowice',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'Szukasz sprawdzonej ekipy remontowej w Wadowicach? Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!',
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
			name: 'Wadowice',
			hasMap:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34585.56181781707!2d19.471202506949094!3d49.887777081943646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716889608939ca5%3A0xb33fdae9a20eb189!2s34-100%20Wadowice!5e0!3m2!1spl!2spl!4v1741194696822!5m2!1spl!2spl',
		},
	],
};

export const metadata: Metadata = {
	title: 'Firma budowlana Wadowice | Kompleksowe usługi remontowo-budowlane',
	description:
		'Szukasz sprawdzonej ekipy remontowej w Wadowicach? Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!',
	openGraph: {
		title: 'Firma budowlana Wadowice | Kompleksowe usługi remontowo-budowlane',
		description:
			'Szukasz sprawdzonej ekipy remontowej w Wadowicach? Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!',
		url: 'https://pro-wnetrze.pl/firma-budowlana/wadowice',
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
		canonical: 'https://pro-wnetrze.pl/firma-budowlana/wadowice',
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
				titleRow1='Firma budowlana Wadowice'
				text1='Szukasz sprawdzonej ekipy remontowej w Wadowicach?'
				text2='Zaufaj naszym fachowcom i ciesz się perfekcyjnie wykończonym wnętrzem!'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Wadowice'
				paragraph1='Jako sprawdzona firma remontowo-budowlana działająca w Wadowicach i okolicach, oferujemy kompleksowe usługi wykończeniowe dopasowane do potrzeb zarówno klientów indywidualnych, jak i firm. Korzystamy z nowoczesnych rozwiązań i dbamy o najwyższy standard wykonania, zwracając uwagę na każdy detal, aby spełnić oczekiwania nawet najbardziej wymagających inwestorów.'
				paragraph2='Precyzja, terminowość i dbałość o szczegóły to kluczowe aspekty naszych realizacji. Nasz doświadczony zespół zapewnia profesjonalną obsługę na każdym etapie – od pierwszej konsultacji i rzetelnej wyceny, przez staranne wykonanie prac, aż po finalne oddanie gotowego projektu. Dzięki przejrzystej współpracy i wysokim standardom nasze realizacje wyróżniają się funkcjonalnością oraz nowoczesnym wykończeniem, które idealnie wpisuje się w potrzeby mieszkańców Wadowic.'
				featureTitle='Dlaczego warto wybrać nasze usługi budowlane?'
			/>

			<LocationServices
				servicesArr={services}
				underline_word='Realizujemy'
				heading='większość usług remontowo-budowlanych'
				text='Jesteśmy firmą remontowo-budowlaną oferującą kompleksowe usługi wykończeniowe na terenie Wadowic i okolic. Wykonujemy zarówno drobne modernizacje, jak i kompleksowe remonty mieszkań, domów oraz lokali użytkowych. Nasze doświadczenie oraz zastosowanie nowoczesnych technologii gwarantują trwałość wykonania i estetyczny efekt końcowy. Bez względu na zakres projektu, zapewniamy fachowe doradztwo i kompleksową obsługę – od przygotowania powierzchni po precyzyjne wykończenie wnętrz, dostosowane do indywidualnych potrzeb klientów prywatnych i biznesowych.'
			/>
			<LocationCoop />
			<LocationArea
				location='Wadowice'
				mapHref='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34585.56181781707!2d19.471202506949094!3d49.887777081943646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716889608939ca5%3A0xb33fdae9a20eb189!2s34-100%20Wadowice!5e0!3m2!1spl!2spl!4v1741194696822!5m2!1spl!2spl'>
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
