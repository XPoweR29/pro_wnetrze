import React from 'react';
import backgroundImage from '../../../assets/img/glazurnictwo.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/plytki-na-podlodze.webp';
import image2 from '../../../assets/img/ukladanie-plytek-na-schodach.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/glazurnictwo-ukladanie-plytek#service',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
	},
	name: 'Usługi glazurnicze - układanie płytek i kafelkowanie łazienek',
	description:
		'Oferujemy usługi glazurnicze – układanie płytek na podłodze, ścianach i balkonach oraz kafelkowanie łazienek. Zapewniamy trwałość i precyzję wykonania.',
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	serviceType: 'Glazurnictwo, układanie płytek, kafelkowanie',
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi glazurnicze',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Układanie płytek na podłodze, ścianach i balkonach',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Kafelkowanie łazienek',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Płytki bezfugowe – montaż i doradztwo',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Usługi glazurnicze - układanie płytek i kafelkowanie łazienek',
	description:
		'Oferujemy usługi glazurnicze – układanie płytek na podłodze, ścianach i balkonach oraz kafelkowanie łazienek. Zapewniamy trwałość i precyzję wykonania.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/glazurnictwo-ukladanie-plytek',
	},

	openGraph: {
		title: 'Usługi glazurnicze - układanie płytek i kafelkowanie łazienek',
		description:
			'Oferujemy usługi glazurnicze – układanie płytek na podłodze, ścianach i balkonach oraz kafelkowanie łazienek. Zapewniamy trwałość i precyzję wykonania.',
		url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/glazurnictwo-ukladanie-plytek',
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
		title: 'Układanie płytek na podłodze',
		text: (
			<>
				<span>
					W naszych realizacjach kluczowe znaczenie ma właściwe przygotowanie
					podłoża i precyzyjne układanie płytek oraz gresu. Dzięki temu
					powierzchnie nabierają nowoczesnego designu, a jednocześnie zachowują
					wysoką funkcjonalność. Dbamy o to, aby każdy etap prac – od dokładnego
					pomiaru po finalne fugowanie – był wykonany z najwyższą starannością.
					Wykorzystujemy techniki, które minimalizują ryzyko nierówności i
					niedoskonałości, co przekłada się na długotrwałą satysfakcję z efektu
					końcowego. Idealne rozwiązania stosujemy zarówno w pomieszczeniach
					mieszkalnych, jak i w miejscach, gdzie liczy się odporność na
					intensywne użytkowanie.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'pracownik układa płytki na ścianie',
	},
	{
		title: 'Układanie płytek gresowych na balkonie oraz tarasie',
		text: (
			<>
				<span>
					Układanie płytek na balkonie i tarasie wymaga zastosowania materiałów
					odpornych na zmienne warunki atmosferyczne. Nasze realizacje
					gwarantują, że powierzchnie zewnętrzne będą nie tylko estetyczne, ale
					przede wszystkim trwałe. Przygotowujemy podłoże tak, aby zapewnić
					optymalną przyczepność, a następnie precyzyjnie układamy płytki i
					gres, zachowując spójność wzoru i koloru.
				</span>
				<span>
					Dzięki naszym rozwiązaniom, balkon czy taras stają się idealnym
					miejscem do wypoczynku, a jednocześnie wizytówką Twojego domu. Nasz
					zespół dba o każdy detal, by efekt końcowy był zgodny z najnowszymi
					trendami w aranżacji przestrzeni zewnętrznych.
				</span>
			</>
		),
	},
	{
		title: 'Układanie płytek na schodach',
		text: (
			<>
				<span>
					Schody to element, który wymaga nie tylko estetycznego wykonania, ale
					również szczególnej dbałości o bezpieczeństwo. Układanie płytek na
					schodach wykonujemy z myślą o trwałości i precyzyjnym dopasowaniu
					elementów, aby każda stopnica była idealnie wyrównana. Nasze prace
					charakteryzują się elegancją, a jednocześnie spełniają rygorystyczne
					normy bezpieczeństwa.
				</span>
				<span>
					Dzięki zastosowaniu wysokiej jakości materiałów oraz skrupulatnej
					kontroli każdego etapu prac, schody zyskują nowoczesny wygląd, który
					podkreśli charakter całej przestrzeni. To rozwiązanie idealne dla
					tych, którzy cenią sobie połączenie funkcjonalności z estetyką.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'pracownik układa płytki na schodach',
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
				title='Glazurnictwo'
				text='Szukasz trwałego i eleganckiego wykończenia wnętrz lub przestrzeni zewnętrznych? Nasze kompleksowe usługi glazurnicze to gwarancja solidności i estetyki. Specjalizujemy się w profesjonalnym układaniu płytek, kafelkowaniu łazienek oraz układaniu gresu, zapewniając trwałe i stylowe wykończenie. Dzięki wieloletniemu doświadczeniu i wykorzystaniu nowoczesnych technik, takich jak płytki bezfugowe, tworzymy przestrzenie dopasowane do Twoich indywidualnych potrzeb.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				heading='usługi glazurnicze'
				underline_word='Profesjonalne'
				text='Nasza firma oferuje kompleksowe usługi glazurnicze, zapewniając trwałe i estetyczne wykończenie wnętrz oraz przestrzeni zewnętrznych. Specjalizujemy się w układaniu płytek, zarówno na podłodze, ścianach, balkonach, jak i schodach, dbając o precyzję wykonania i trwałość efektu. Realizujemy również układanie płytek gresowych, które doskonale sprawdzają się w wymagających warunkach. Wykorzystujemy nowoczesne techniki, w tym płytki bezfugowe, gwarantując wysoką estetykę i łatwość w utrzymaniu czystości. Niezależnie od skali projektu – od kafelkowania łazienki po duże realizacje w budynkach komercyjnych – stawiamy na jakość i precyzję, by stworzyć przestrzeń dopasowaną do Twoich oczekiwań. Oferujemy również profesjonalne wykonanie cokołów z płytek, które stanowią estetyczne i funkcjonalne wykończenie. Zapewniamy dokładne położenie płytek, dbając o każdy detal. Nasze usługi obejmują także układanie gresu, co gwarantuje trwałość i odporność na uszkodzenia. Nasi doświadczeni glazurnicy zapewniają kompleksowe kafelkowanie, dostosowane do indywidualnych potrzeb każdego klienta.'
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Kafelkowanie
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						i skuwanie płytek
					</h3>
					<p className={styles.linkingText}>
						Kafelkowanie i skuwanie płytek to kluczowe etapy w pracach
						glazurniczych, pozwalające uzyskać świeże, estetyczne i trwałe
						wykończenia. Oferujemy profesjonalne usuwanie starych okładzin,
						staranne przygotowanie podłoża oraz fachowe układanie nowych
						materiałów – od płytek ceramicznych, poprzez gres, aż po mozaikę.
						Dbałość o szczegóły na każdym etapie gwarantuje idealne wyrównanie
						fug oraz jednolity, atrakcyjny wygląd powierzchni. Korzystamy ze
						sprawdzonych narzędzi i technik, dzięki czemu rezultaty naszych prac
						spełniają najwyższe standardy jakości.
						<span>
							Jeżeli planujesz kompleksową renowację wnętrza, warto również
							zapoznać się z naszą ofertą{' '}
							<Link href={'/wykonczenia-wnetrz/remont-lazienki'}>
								Remontu łazienki
							</Link>
							, która łączy w sobie elementy glazurnictwa z całościowym
							podejściem do modernizacji przestrzeni.
						</span>
					</p>

					<CategoryFeatures title='Dlaczego warto wybrać nasze usługi glazurnicze?' />
				</Wrapper>
			</section>
			<CategoryContact
				helpWithHeading='w układaniu płytek?'
				textClass={styles.contactText}>
				Skontaktuj się z nami, aby omówić szczegóły prac glazurniczych i
				remontowych w Twoim regionie. Realizujemy układanie płytek na podłodze,
				ścianach oraz balkonach, a także kafelkowanie łazienek i precyzyjne
				wykończenia schodów. Podpowiemy, jakie materiały i techniki sprawdzą się
				najlepiej – od klasycznych rozwiązań po płytki bezfugowe, które
				zapewniają nowoczesny wygląd i łatwość w utrzymaniu. Doradzimy na każdym
				etapie, dbając o to, by efekt końcowy w pełni odpowiadał Twoim
				oczekiwaniom.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
