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
		title: 'Usługi remontowe w Katowicach',
		content:
			'Poszukujesz sprawdzonej ekipy remontowej, która zrealizuje Twój projekt w Katowicach? PRO Wnętrze to firma z wieloletnim doświadczeniem, specjalizująca się w kompleksowych remontach i wykończeniach wnętrz. Działamy na terenie Katowic i okolic, oferując usługi od precyzyjnego przygotowania powierzchni, przez malowanie i montaż tapet, aż po instalację sufitów podwieszanych oraz profesjonalne gładzenie i tynkowanie. Nasze projekty wyróżniają się terminowością i wysoką jakością, co przekłada się na satysfakcję zarówno klientów indywidualnych, jak i biznesowych.',
		image: renovationImg,
		imageAlt: 'Katowice usługi remontowe',
	},
	{
		title: 'Katowice wykończenia wnętrz',
		content:
			'Masz pomysł na idealnie wykończone wnętrze? Zespół PRO Wnętrze to specjaliści, którzy kompleksowo zajmą się wykończeniem mieszkań i domów w Katowicach oraz okolicznych rejonach. W naszej ofercie znajdziesz między innymi remonty łazienek, nowoczesne adaptacje przestrzeni oraz precyzyjne układanie podłóg. Dzięki indywidualnemu podejściu i profesjonalnemu doradztwu, realizujemy każdy projekt z dbałością o każdy detal, gwarantując efekt, który przekroczy Twoje oczekiwania.',
		image: renovation2Img,
		imageAlt: 'Wykończenia wnętrz Katowice',
	},
	{
		title: 'Techniki dekoracyjne',
		content:
			'Marzysz o nowoczesnym, funkcjonalnym wnętrzu w Katowicach? Zespół ekspertów z PRO Wnętrze specjalizuje się w kompleksowych remontach i wykończeniach mieszkań oraz domów w Katowicach i okolicach. W naszej ofercie znajdziesz m.in. modernizację łazienek, innowacyjne adaptacje przestrzeni oraz precyzyjne układanie podłóg. Oferujemy indywidualne doradztwo i spersonalizowane podejście do każdego projektu, gwarantując efekt, który odmieni Twoje wnętrza i podkreśli ich wyjątkowy charakter.',
		image: decorationImg,
		imageAlt: 'Tynki dekoracyjne w Katowicach',
	},
];

const schema = {
	'@context': 'https://schema.org',
	'@type': 'HomeAndConstructionBusiness',
	name: 'PRO Wnętrze',
	alternateName:
		'Firma budowlana Katowice | Kompleksowe usługi remontowo-budowlane',
	url: 'https://pro-wnetrze.pl/firma-budowlana/katowice',
	logo: 'https://pro-wnetrze.pl/logo.jpg',
	image: 'https://pro-wnetrze.pl/og_img.jpg',
	description:
		'Poszukujesz sprawdzonej ekipy remontowej w Katowicach? Zaufaj naszym ekspertom i ciesz się nową jakością przestrzeni!',
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
			name: 'Katowice',
			hasMap:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137361.20848583162!2d18.936991504073145!3d50.22921223664693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2336a1ccd1%3A0xb9af2a350559fabb!2sKatowice!5e0!3m2!1spl!2spl!4v1741191883125!5m2!1spl!2spl',
		},
	],
};

export const metadata: Metadata = {
	title: 'Firma budowlana Katowice | Kompleksowe usługi remontowo-budowlane',
	description:
		'Poszukujesz sprawdzonej ekipy remontowej w Katowicach? Zaufaj naszym ekspertom i ciesz się nową jakością przestrzeni!',
	openGraph: {
		title: 'Firma budowlana Katowice | Kompleksowe usługi remontowo-budowlane',
		description:
			'Poszukujesz sprawdzonej ekipy remontowej w Katowicach? Zaufaj naszym ekspertom i ciesz się nową jakością przestrzeni!',
		url: 'https://pro-wnetrze.pl/firma-budowlana/katowice',
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
		canonical: 'https://pro-wnetrze.pl/firma-budowlana/katowice',
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
				titleRow1='Firma budowlana Katowice'
				text1='Poszukujesz sprawdzonej ekipy remontowej w Katowicach?'
				text2='Zaufaj naszym ekspertom i ciesz się nową jakością przestrzeni!'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Katowice'
				paragraph1='Jako solidna firma remontowo-budowlana działająca w dynamicznym środowisku Katowic, oferujemy kompleksowe rozwiązania w zakresie wykończenia wnętrz pod klucz. Nasze podejście łączy indywidualne potrzeby klientów prywatnych i biznesowych z nowoczesnymi trendami, dbając o każdy detal, by spełnić oczekiwania nawet najbardziej wymagających.'
				paragraph2='W pracach remontowych kluczowa jest precyzja i terminowość. Nasi eksperci gwarantują skrupulatne wykonanie na każdym etapie – od wstępnej konsultacji i szczegółowej wyceny, przez staranną realizację, aż po finalny odbiór gotowego projektu. Transparentność i efektywność naszej pracy sprawiają, że Twoje wnętrza nabiorą nowoczesnego, funkcjonalnego charakteru, idealnie wpisując się w potrzeby życia w wielkim mieście.'
				featureTitle='Dlaczego warto wybrać nasze usługi budowlane?'
			/>

			<LocationServices
				servicesArr={services}
				underline_word='Realizujemy'
				heading='większość usług remontowo-budowlanych'
				text='Jesteśmy firmą budowlaną, która oferuje kompleksowe remonty i wykończenia wnętrz na terenie Katowic i okolic. Realizujemy zarówno mniejsze modernizacje, jak i pełne remonty domów, mieszkań oraz lokali użytkowych. Dzięki wieloletniemu doświadczeniu i nowoczesnym technologiom zapewniamy solidne wykonanie oraz estetyczny efekt końcowy. Niezależnie od wielkości projektu, oferujemy profesjonalne doradztwo i kompleksową obsługę – od przygotowania powierzchni po precyzyjne wykończenie wnętrz, dostosowując się do oczekiwań klientów indywidualnych oraz firm.'
			/>
			<LocationCoop />
			<LocationArea
				location='Katowice'
				mapHref='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137361.20848583162!2d18.936991504073145!3d50.22921223664693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2336a1ccd1%3A0xb9af2a350559fabb!2sKatowice!5e0!3m2!1spl!2spl!4v1741191883125!5m2!1spl!2spl'>
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
