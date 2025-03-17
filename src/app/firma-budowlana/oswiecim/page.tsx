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
		title: 'Usługi remontowe w Oświęcimiu',
		content:
			'Szukasz sprawdzonej ekipy remontowej w Oświęcimiu?  Nasza firma "PRO Wnętrze" oferuje kompleksowe usługi remontowe, obejmujące pełen zakres prac – od precyzyjnego przygotowania podłoża aż po perfekcyjne wykończenie. Z równym zaangażowaniem podejmujemy się zarówno niewielkich poprawek, jak i rozbudowanych projektów, w tym malowania ścian, aplikacji tapet, instalacji sufitów podwieszanych czy profesjonalnego gładzenia ścian i tynków.  Długoletnie doświadczenie w branży remontowej gwarantuje terminową realizację zleceń i  wysoki standard wykonania.',
		image: renovationImg,
		imageAlt: 'Oświęcim wykończenia wnętrz',
	},
	{
		title: 'Oświęcim wykończenia wnętrz',
		content:
			'Czy marzysz o idealnie wykończonym wnętrzu w Oświęcimiu? Nasz zespół PRO Wnętrze to eksperci od kompleksowych wykończeń mieszkań i domów w Oświęcimiu i okolicach.  W naszej ofercie znajdziesz między innymi:  remonty łazienek,  nowoczesne adaptacje poddaszy,  profesjonalne oraz układanie podłóg. Zapewniamy profesjonalne doradztwo i  ściśle indywidualne podejście do każdego zlecenia,  abyś w pełni cieszył się wymarzonym efektem.',
		image: renovation2Img,
		imageAlt: 'Wykończenia wnętrz Oświęcim',
	},
	{
		title: 'Techniki dekoracyjne',
		content:
			'Chcesz nadać wnętrzu unikalny charakter? Proponujemy szereg dekoracyjnych rozwiązań, które wyróżnią Twoje wnętrze. Wykonujemy m.in. imitację betonu, glinkę wenecką, trawertyn czy tynki dekoracyjne, dodając przestrzeni elegancji i niepowtarzalnego stylu. Zadbamy o odpowiedni dobór materiałów i perfekcyjne wykonanie, tak aby efekt zachwycał przez lata.',
		image: decorationImg,
		imageAlt: 'Tynki dekoracyjne Oświęcim',
	},
];

const schema = {
	'@context': 'https://schema.org',
	'@type': 'HomeAndConstructionBusiness',
	'@id': 'https://pro-wnetrze.pl/firma-budowlana/oswiecim#business',
	name: 'PRO Wnętrze',
	alternateName:
		'Firma budowlana Oświęcim | Kompleksowe usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl/firma-budowlana/oswiecim',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'Potrzebujesz remontu w okolicach Oświęcimia? Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni',
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
			name: 'Oświęcim',
			hasMap: 'https://www.google.com/maps/search/O%C5%9Bwi%C4%99cim',
		},
	],
};

export const metadata: Metadata = {
	title: 'Firma budowlana Oświęcim | Kompleksowe usługi remontowo-budowlane',
	description:
		'Potrzebujesz remontu w okolicach Oświęcimia? Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni',
	openGraph: {
		title: 'Firma budowlana Oświęcim | Kompleksowe usługi remontowo-budowlane',
		description:
			'Potrzebujesz remontu w okolicach Oświęcimia? Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni',
		url: 'https://pro-wnetrze.pl/firma-budowlana/oswiecim',
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
		canonical: 'https://pro-wnetrze.pl/firma-budowlana/oswiecim',
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
				titleRow1='Firma budowlana Oświęcim'
				text1='Potrzebujesz remontu w okolicach Oświęcimia?'
				text2='Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Oświęcim'
				paragraph1='Jako doświadczona firma remontowo-budowlana, świadczymy usługi na terenie Oświęcimia i pobliskich miejscowości. Specjalizujemy się w usługach remontowo-wykończeniowych, oferując kompleksowe wykończenia wnętrz pod klucz, które cechuje najwyższa jakość i terminowość. Nasza firma remontowa realizuje projekty zarówno dla klientów indywidualnych, jak i biznesowych, dbając o każdy szczegół.'
				paragraph2='Zdajemy sobie sprawę, jak istotne jest terminowe i precyzyjne wykonanie każdego remontu. Nasi doświadczeni fachowcy dbają o najwyższą jakość pracy oraz estetykę końcowego efektu. Oferujemy przejrzysty proces współpracy, obejmujący wszystko od wyceny, przez realizację, aż po odbiór ukończonego projektu.'
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
				location='Oświęcim'
				mapHref='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41003.13846560372!2d19.241013348828123!3d50.03578906462216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471694e04f384c31%3A0x1e1c6b2131976ebd!2zT8Wbd2nEmWNpbQ!5e0!3m2!1spl!2spl!4v1741187166788!5m2!1spl!2spl'>
				Odmień swoją przestrzeń dzięki naszym kompleksowym pracom remontowym –
				od drobnych modernizacji po pełne wykończenia wnętrz. Gwarantujemy
				terminowość, najwyższą jakość wykonania oraz zwiększenie komfortu i
				funkcjonalności Twojego domu, apartamentu, biura czy obiektu
				komercyjnego.
			</LocationArea>
		</>
	);
};
export default LocationPage;
