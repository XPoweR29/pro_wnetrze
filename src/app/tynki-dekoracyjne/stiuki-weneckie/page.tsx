import React from 'react';
import backgroundImage from '../../../assets/img/stiuki-weneckie.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/efekt-stiuku-weneckiego.webp';
import image2 from '../../../assets/img/stiuk-lustrzany.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/tynki-dekoracyjne/stiuki-weneckie',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/tynki-dekoracyjne',
	},
	name: 'Stiuk Wenecki – Eleganckie Wykończenie Ścian | Profesjonalna Aplikacja',
	description:
		'Oferujemy profesjonalne położenie stiuku weneckiego – stiuk lustrzany, tynki stiukowe i dekoracyjne wykończenia ścian.',
	provider: {
		'@type': 'HomeAndConstructionBusiness',
		'@id': 'https://pro-wnetrze.pl#business',
		name: 'PRO Wnętrze',
		alternateName: 'Firma budowlana PRO Wnętrze | Usługi remontowo-budowlane',
		url: 'https://pro-wnetrze.pl',
		logo: 'https://pro-wnetrze.pl/logo.jpg',
		image: 'https://pro-wnetrze.pl/og_img.jpg',
		description:
			'PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz na terenie województwa Śląskiego oraz Małopolskiego. Zaufaj naszym fachowcom!',
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
			{
				'@type': 'AdministrativeArea',
				name: 'Województwo Śląskie',
			},
			{
				'@type': 'AdministrativeArea',
				name: 'Województwo Małopolskie',
			},
		],
	},
	serviceType: [
		'Położenie stiuku weneckiego na ścianę',
		'Nakładanie stiuku lustrzanego – efekt marmuru',
		'Aplikacja tynków stiukowych – eleganckie wykończenie',
		'Stiuk wenecki w łazience – trwałość i estetyka',
		'Stiuk wenecki w przedpokoju – elegancki wygląd',
		'Cena stiuku weneckiego – indywidualna wycena',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi wykończeniowe – położenie stiuku weneckiego',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Położenie stiuku weneckiego na ścianę – gładkie i lśniące wykończenie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Nakładanie stiuku lustrzanego – efekt ekskluzywnego połysku',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Aplikacja tynków stiukowych – dekoracyjne i trwałe wykończenie wnętrz',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Stiuk wenecki w łazience – wodoodporne i luksusowe ściany',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Stiuk wenecki w przedpokoju – stylowe wejście do domu',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Cena stiuku weneckiego – profesjonalna wycena usługi',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title:
		'Stiuk Wenecki – Eleganckie Wykończenie Ścian | Profesjonalna Aplikacja',
	description:
		'Oferujemy profesjonalne położenie stiuku weneckiego – stiuk lustrzany, tynki stiukowe i dekoracyjne wykończenia ścian.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/tynki-dekoracyjne/stiuki-weneckie',
	},

	openGraph: {
		title:
			'Stiuk Wenecki – Eleganckie Wykończenie Ścian | Profesjonalna Aplikacja',
		description:
			'Oferujemy profesjonalne położenie stiuku weneckiego – stiuk lustrzany, tynki stiukowe i dekoracyjne wykończenia ścian.',
		url: 'https://pro-wnetrze.pl/tynki-dekoracyjne/stiuki-weneckie',
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
};

const posts: ServicePost[] = [
	{
		title: 'Jak uzyskać efekt stiuku?',
		text: (
			<>
				<span>
					Aby osiągnąć efekt stiuku weneckiego, kluczowe jest odpowiednie
					przygotowanie powierzchni oraz precyzyjna aplikacja. Najpierw ściana
					musi być wyrównana i zagruntowana, aby zapewnić dobrą przyczepność.
					Następnie nakłada się kilka cienkich warstw stiuku, każdą starannie
					wygładzając, aby uzyskać charakterystyczną głębię i połysk. Ostateczny
					efekt podkreśla się polerowaniem i woskowaniem, co nie tylko wzmacnia
					kolor, ale także zwiększa odporność powierzchni.
				</span>
				<span>
					Alternatywą dla stiuku jest{' '}
					<Link href='/tynki-dekoracyjne/glinka-wenecka'>
						glinka wenecka
					</Link>
					, która oferuje równie elegancki wygląd, ale o bardziej subtelnej
					strukturze i mniejszym stopniu połysku.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Efekt stiuku na ścianie',
	},
	{
		title: 'Stiuk wenecki w łazience – czy to dobre rozwiązanie?',
		text: (
			<>
				<span>
					Stiuk wenecki w łazience to eleganckie i nowoczesne wykończenie, które
					łączy estetykę z funkcjonalnością. Jego gładka, błyszcząca
					powierzchnia doskonale odbija światło, optycznie powiększając wnętrze,
					a szeroka gama kolorów pozwala dopasować go do różnych stylów
					aranżacyjnych – od minimalistycznych po klasyczne.
				</span>
				<span>
					Dzięki swojej odporności na wilgoć, tynk wenecki do łazienki może być
					stosowany nawet w miejscach narażonych na kontakt z wodą, takich jak
					okolice umywalki, wanny czy kabiny prysznicowej. Aby zwiększyć jego
					trwałość, zaleca się zastosowanie warstwy ochronnej, np. wosku lub
					lakieru, co podnosi odporność na zabrudzenia i ułatwia pielęgnację
					powierzchni.
				</span>
				<span>
					Dodatkową zaletą jest jego łatwość w utrzymaniu czystości – gładka
					powierzchnia zapobiega osadzaniu się wilgoci i pleśni, co jest
					kluczowe w pomieszczeniach o wysokiej wilgotności. Stiuki dekoracyjne
					w łazience doskonale komponują się z nowoczesnym oświetleniem i
					elementami wyposażenia, tworząc ekskluzywną przestrzeń.
				</span>
				<span>
					Jeśli planujesz większą modernizację swojej łazienki, sprawdź naszą
					usługę{' '}
					<Link href='/wykonczenia-wnetrz/remont-lazienki'>
						remontu łazienki
					</Link>
					, która obejmuje kompleksowe wykończenia dostosowane do Twoich
					potrzeb.
				</span>
			</>
		),
	},
	{
		title: 'Stiuk lustrzany – ekskluzywny efekt połysku',
		text: (
			<>
				<span>
					Stiuk lustrzany to najbardziej elegancka odmiana stiuku weneckiego,
					wyróżniająca się wysokim połyskiem i głębią koloru. Jego powierzchnia,
					dzięki wielowarstwowej aplikacji i precyzyjnemu polerowaniu, może
					przypominać idealnie gładki marmur, odbijając światło i tworząc efekt
					luksusowego wykończenia.
				</span>
				<span>
					Tego rodzaju tynki stiukowe są stosowane w ekskluzywnych wnętrzach,
					gdzie liczy się perfekcyjna estetyka i trwałość. Stiuk dekoracyjny
					sprawdzi się w salonach, holach, luksusowych biurach, a także w
					przestrzeniach komercyjnych, nadając im wyrafinowany charakter. Jego
					wyjątkowa struktura i połysk czynią go idealnym wyborem do wnętrz
					urządzonych w stylu klasycznym, glamour oraz nowoczesnym.
				</span>
				<span>
					Dzięki swojej trwałości i odporności na zabrudzenia, stiuk na ścianę
					to doskonałe rozwiązanie dla wymagających klientów, poszukujących
					połączenia estetyki i funkcjonalności.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Efekt stiuku lustrzanego',
	},
	{
		title: 'Stiuk wenecki w przedpokoju – efektowne wejście',
		text: (
			<>
				<span>
					Stiuk wenecki w przedpokoju to doskonałe rozwiązanie dla osób
					ceniących elegancję i trwałość. Dzięki swojej gładkiej, lekko
					połyskującej powierzchni, nadaje wnętrzu luksusowego charakteru, a
					jednocześnie jest odporny na ścieranie. Przedpokój ze stiukiem
					weneckim staje się wizytówką całego mieszkania, tworząc efektowne
					wejście i podkreślając wyjątkowy styl wnętrza.
				</span>
				<span>
					Wybór odpowiedniego koloru stiuku weneckiego w przedpokoju ma ogromne
					znaczenie dla optycznego odbioru przestrzeni. Jasne odcienie, takie
					jak biel, szarości czy beż, rozjaśniają wnętrze i sprawiają, że wydaje
					się ono bardziej przestronne. Natomiast ciepłe barwy, złote refleksy
					czy głębokie brązy wprowadzają elegancję i przytulność, idealnie
					pasując do klasycznych aranżacji.
				</span>
				<span>
					Dzięki swojej odporności na zabrudzenia i łatwości w pielęgnacji,
					stiuk dekoracyjny w przedpokoju to praktyczne i efektowne rozwiązanie.
					W połączeniu z nowoczesnym oświetleniem oraz starannie dobranymi
					dodatkami tworzy stylowe, spójne wnętrze. Stiuk wenecki w przedpokoju
					to nie tylko ozdoba ścian, ale również funkcjonalne wykończenie, które
					przez lata zachowuje swój doskonały wygląd.
				</span>
			</>
		),
	},
];

const ServicePage = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<ServiceStart
				title='Stiuki weneckie'
				text='Stiuk wenecki to wyjątkowe dekoracyjne wykończenie ścian, które imituje naturalny marmur. Tynk stiukowy charakteryzuje się gładką, połyskującą powierzchnią, dodając elegancji każdemu wnętrzu. Dzięki swojej trwałości i wodoodporności idealnie sprawdzi się zarówno w klasycznych, jak i nowoczesnych aranżacjach.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Czym jest'
				heading='stiuk wenecki?'
				text={
					<>
						<span>
							Stiuk wenecki to rodzaj tynku dekoracyjnego, który od wieków
							stosowany jest w eleganckich wnętrzach. Powstaje z mieszanki wapna
							gaszonego, pyłu marmurowego i naturalnych pigmentów, co pozwala
							uzyskać gładką powierzchnię o efekcie naturalnego kamienia.
						</span>
						<span>
							Jego wyjątkowa struktura sprawia, że stiuk na ścianę nie tylko
							pięknie odbija światło, ale także jest odporny na wilgoć i
							uszkodzenia. To idealne rozwiązanie do reprezentacyjnych
							pomieszczeń, takich jak salony, hole czy biura. Coraz częściej
							wykorzystuje się go również w nowoczesnych aranżacjach, gdzie
							tworzy minimalistyczne, ale jednocześnie efektowne wykończenie.
						</span>
						<span>
							Dla osób szukających innych stylowych rozwiązań, warto również
							rozważyć{' '}
							<Link href='/tynki-dekoracyjne/imitacja-betonu'>
								imitację betonu
							</Link>
							, która oferuje surowy, industrialny charakter w podobnym duchu
							eleganckiej prostoty.
						</span>
					</>
				}
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Cena
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						stiuku weneckiego - od czego zależy?
					</h3>
					<p className={styles.linkingText}>
						<span>
							Ile kosztuje stiuk wenecki? To pytanie często pojawia się przy
							planowaniu eleganckiego wykończenia ścian. Cena stiuku weneckiego
							zależy od kilku kluczowych czynników, takich jak powierzchnia do
							pokrycia, technika aplikacji, ilość warstw oraz rodzaj
							wykończenia. Koszt może się różnić w zależności od stopnia połysku
							– stiuk lustrzany o intensywnym blasku wymaga dokładnego
							polerowania i nakładania wielu warstw, co podnosi jego cenę.
						</span>
						<span>
							Cena za metr stiuku weneckiego zależy również od jakości użytych
							materiałów. Tynki stiukowe zawierające naturalne składniki i
							specjalne dodatki pozwalają uzyskać efekt głębi i luksusowego
							wyglądu, ale ich aplikacja jest bardziej wymagająca, co wpływa na
							ostateczny koszt. Dodatkowym czynnikiem jest stan podłoża – jeśli
							ściany wymagają wyrównania i gruntowania, cena usługi może
							wzrosnąć.
						</span>
						<span>
							Podstawowe warianty stiuku weneckiego z delikatnym połyskiem są
							tańsze, natomiast stiuk lustrzany oraz bardziej złożone tynki
							stiukowe mogą wymagać większego nakładu pracy i droższych
							materiałów. Jaki jest koszt stiuku weneckiego? Wszystko zależy od
							specyfiki wnętrza i oczekiwanego efektu. Jeśli chcesz poznać cenę
							za metr stiuku weneckiego, skontaktuj się z nami – przygotujemy
							indywidualną wycenę dostosowaną do Twoich potrzeb.
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zlecić wykonanie stiuków weneckich?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w położeniu stiuku?'
				textClass={styles.contactText}>
				Chcesz nadać swoim ścianom wyjątkowy, elegancki wygląd? Oferujemy
				profesjonalne położenie stiuku weneckiego, zapewniając perfekcyjne
				wykonanie i trwały efekt. Niezależnie od tego, czy interesuje Cię stiuk
				lustrzany, tynki stiukowe czy klasyczny stiuk na ścianę, pomożemy Ci
				dobrać najlepsze rozwiązanie.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
