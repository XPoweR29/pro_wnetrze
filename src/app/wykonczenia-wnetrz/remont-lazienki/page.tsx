import React from 'react';
import backgroundImage from '../../../assets/img/remont-lazienki.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/remont-i-wykonczenie-lazienki.webp';
import image2 from '../../../assets/img/mala-lazienka-w-bloku.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': 'https://pro-wnetrze.pl/wykonczenia-wnetrz/remont-lazienki#service',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/wykonczenia-wnetrz',
	},
	name: 'Remont łazienki - układanie płytek i fachowe wykończenie',
	description:
		'Planujesz remont łazienki? Oferujemy kompleksowe wykończenie, metamorfozę wnętrza i układanie płytek.',
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	serviceType: [
		'Remont łazienki',
		'Wykończenie łazienki',
		'Metamorfoza łazienki',
		'Panele winylowe do łazienki',
		'Mała łazienka w bloku',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi remontowe i wykończeniowe łazienek',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Kompleksowy remont łazienki – wymiana instalacji, płytek i armatury',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Wykończenie łazienki – montaż armatury, fugowanie i oświetlenie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Metamorfoza łazienki – szybkie odświeżenie wnętrza bez generalnego remontu',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Panele winylowe do łazienki – nowoczesna i wodoodporna alternatywa dla płytek',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Remont małej łazienki w bloku – optymalne zagospodarowanie przestrzeni',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Kalkulacja kosztów remontu łazienki – szczegółowa wycena robocizny i materiałów',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Remont łazienki - układanie płytek i fachowe wykończenie',
	description:
		'Planujesz remont łazienki? Oferujemy kompleksowe wykończenie, metamorfozę wnętrza i układanie płytek.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/wykonczenia-wnetrz/remont-lazienki',
	},

	openGraph: {
		title: 'Remont łazienki - układanie płytek i fachowe wykończenie',
		description:
			'Planujesz remont łazienki? Oferujemy kompleksowe wykończenie, metamorfozę wnętrza i układanie płytek.',
		url: 'https://pro-wnetrze.pl/wykonczenia-wnetrz/remont-lazienki',
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
		title: 'Wykończenie łazienki',
		text: (
			<>
				<span>
					Profesjonalne wykończenie łazienki to kluczowy etap każdego remontu,
					który wpływa na jej estetykę i trwałość. Odpowiednio dobrane
					materiały, starannie ułożone panele winylowe do łazienki czy
					perfekcyjnie dobrane fugi sprawiają, że wnętrze nabiera elegancji i
					nowoczesnego charakteru. Remont łazienki wymaga nie tylko wiedzy
					technicznej, ale także precyzji w wykończeniu detali – dlatego warto
					powierzyć to zadanie specjalistom.
				</span>
				<span>
					W zależności od stylu wnętrza oferujemy różne metody wykończenia:
					klasyczne płytki ceramiczne, panele winylowe do łazienki, które są
					odporne na wilgoć, oraz innowacyjne rozwiązania, takie jak dekoracyjne
					tapety wodoodporne. Warto pamiętać, że wykończenie łazienki obejmuje
					również wybór armatury, odpowiednie podświetlenie oraz montaż
					dodatków, które podkreślą charakter pomieszczenia.
				</span>
				<span>
					Chcesz aby remont twojej łazienki poszedł szybko i sprawnie? Sprawdź
					nasze{' '}
					<Link href='/uslugi-remontowo-budowlane/glazurnictwo-ukladanie-plytek'>
						usługi glazurnicze
					</Link>{' '}
					i zobacz, jak możemy odmienić Twoje wnętrze!
				</span>
			</>
		),
		image: image1,
		imageAlt: 'zabudowa z płyt kartonowo gipsowych',
	},
	{
		title: 'Płytki winylowe do łazienki',
		text: (
			<>
				<span>
					Panele winylowe do łazienki to doskonała alternatywa dla tradycyjnych
					płytek ceramicznych. Są wodoodporne, trwałe i niezwykle łatwe w
					utrzymaniu czystości, dzięki czemu świetnie sprawdzają się zarówno w
					dużych, jak i małych łazienkach w blokach. Remont łazienki z użyciem
					paneli winylowych pozwala na szybkie i estetyczne odświeżenie
					przestrzeni bez konieczności skuwania starych płytek.
				</span>
				<span>
					Ich ogromnym atutem jest możliwość montażu na różnych powierzchniach –
					zarówno na ścianach, jak i podłodze. Płytki winylowe do łazienki są
					odporne na wilgoć i zmienne temperatury, co sprawia, że doskonale
					nadają się do miejsc narażonych na kontakt z wodą. Co więcej, są
					cieplejsze niż klasyczne kafelki, co podnosi komfort użytkowania.
					Wybierając panele winylowe do łazienki, możesz stworzyć nowoczesne i
					funkcjonalne wnętrze. Jeśli planujesz kompleksową metamorfozę
					łazienki, skontaktuj się z nami – pomożemy Ci dobrać najlepsze
					rozwiązania i zapewnimy fachowe wykończenie łazienki!
				</span>
			</>
		),
	},
	{
		title: 'Mała łazienka w bloku',
		text: (
			<>
				<span>
					Mała łazienka w bloku wymaga przemyślanego projektu, aby była zarówno
					estetyczna, jak i funkcjonalna. W mieszkaniach, gdzie przestrzeń jest
					ograniczona, kluczowe jest odpowiednie rozmieszczenie wyposażenia oraz
					zastosowanie nowoczesnych materiałów, takich jak płytki winylowe do
					łazienki, które optycznie powiększają przestrzeń.
				</span>
				<span>
					Dobrym rozwiązaniem dla małej łazienki w bloku jest rezygnacja z wanny
					na rzecz prysznica, co pozwala zaoszczędzić miejsce i stworzyć
					komfortową przestrzeń. Mała łazienka z prysznicem w bloku powinna być
					jasna i dobrze doświetlona, dlatego warto zastosować lustra,
					oświetlenie LED oraz minimalistyczne meble, które nie przytłoczą
					wnętrza. W ramach remontu oferujemy kompleksowe wykończenie łazienki,
					montaż nowoczesnych płytek oraz dopasowanie każdego elementu do
					warunków przestrzennych. Chcesz uzyskać idealny efekt? Sprawdź naszą
					ofertę glazurnictwa i układania płytek i stwórz nowoczesne wnętrze!
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Aranżacja małej łazienki w bloku',
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
				title='Remont łazienki'
				text='Remont łazienki to inwestycja, która pozwala na pełną metamorfozę wnętrza i dostosowanie go do Twoich potrzeb. Oferujemy kompleksowe wykończenie łazienki, dbając o każdy detal – od układania płytek po montaż armatury. Niezależnie od tego, czy planujesz gruntowny remont łazienki, czy chcesz jedynie odświeżyć jej wygląd, zapewniamy profesjonalne wykonanie i trwałe rozwiązania.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Metamorfoza'
				heading='łazienki'
				text={
					<>
						<span>
							Metamorfoza łazienki to świetny sposób na odświeżenie wnętrza bez
							konieczności przeprowadzania kosztownego i czasochłonnego remontu
							generalnego. Wystarczy dobrze zaplanowana zmiana, aby przestrzeń
							nabrała nowego charakteru i stała się bardziej funkcjonalna.
							Czasem już niewielkie modyfikacje, takie jak wymiana płytek,
							nowoczesna armatura czy świeża kolorystyka ścian, mogą całkowicie
							odmienić wygląd pomieszczenia. Warto również rozważyć montaż
							płytek winylowych do łazienki, które są łatwe w pielęgnacji i
							odporne na wilgoć, co czyni je idealnym rozwiązaniem do
							nowoczesnych wnętrz.
						</span>
						<span>
							Kluczowym elementem każdej metamorfozy jest odpowiednio dobrane
							wykończenie łazienki, które podkreśli styl wnętrza i zwiększy jego
							funkcjonalność. Nowoczesne rozwiązania, takie jak oświetlenie LED,
							eleganckie baterie czy minimalistyczne meble, mogą znacząco
							wpłynąć na estetykę pomieszczenia. Dodatkowo, jeśli chcesz
							odmienić wygląd ścian bez skuwania płytek, dobrym rozwiązaniem
							może być{' '}
							<Link href='/uslugi-remontowo-budowlane/tapetowanie-scian'>
								tapetowanie
							</Link>{' '}
							– zobacz naszą ofertę tapetowania, aby nadać swojej łazience
							oryginalny styl.
						</span>
					</>
				}
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Ile kosztuje
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						remont łazienki?
					</h3>
					<p className={styles.linkingText}>
						<span>
							Koszt remontu łazienki zależy od wielu czynników, takich jak
							metraż, zakres prac oraz wybór materiałów. Cena robocizny łazienki
							może znacząco się różnić w zależności od skomplikowania zadań – od
							prostego odświeżenia wnętrza po pełną metamorfozę łazienki,
							obejmującą wymianę instalacji wodno-kanalizacyjnej, podłóg,
							armatury i oświetlenia.
						</span>
						<span>
							Jeśli zależy Ci na estetycznym i trwałym wykończeniu, kluczowy
							jest dobór odpowiednich materiałów. Płytki winylowe do łazienki to
							ekonomiczne rozwiązanie, które pozwala obniżyć koszty, ponieważ
							ich montaż jest szybki i nie wymaga skuwania starych powierzchni.
							Z kolei inwestycja w wysokiej jakości ceramikę, armaturę premium,
							a także nowoczesne rozwiązania, takie jak inteligentne systemy
							oświetleniowe czy podgrzewana podłoga, może zwiększyć finalną
							kwotę remontu.
						</span>
						<span>
							Warto również pamiętać, że oprócz podłóg i ścian istotnym
							elementem może być odpowiednie wykończenie sufitu. W nowoczesnych
							aranżacjach dużą popularnością cieszą się{' '}
							<Link href='/uslugi-remontowo-budowlane/sufity-podwieszane'>
								sufity podwieszane
							</Link>
							, które pozwalają na zamontowanie eleganckiego oświetlenia LED i
							ukrycie instalacji elektrycznych, co podnosi estetykę wnętrza. Aby
							dokładnie oszacować koszt remontu łazienki, warto skonsultować się
							z fachowcami i przygotować szczegółowy kosztorys.
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, co zyskujesz zlecając nam remont łazienki' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w wykończeniu łazienki?'
				textClass={styles.contactText}>
				Planujesz remont łazienki i szukasz fachowców, którzy zadbają o każdy
				detal? Oferujemy kompleksowe wykończenie łazienki, w tym układanie
				płytek, montaż armatury i instalację płytek winylowych do łazienki.
				Niezależnie od tego, czy chcesz przeprowadzić pełną metamorfozę
				łazienki, czy tylko odświeżyć wnętrze, zapewniamy solidne wykonanie i
				trwałe materiały. Skontaktuj się z nami i sprawdź, jak możemy pomóc w
				realizacji Twojej wymarzonej łazienki!
			</CategoryContact>
		</>
	);
};
export default ServicePage;
