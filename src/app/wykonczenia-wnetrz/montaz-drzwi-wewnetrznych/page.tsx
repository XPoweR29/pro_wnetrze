import React from 'react';
import backgroundImage from '../../../assets/img/drzwi-wewnetrzne.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/montaz-drzwi-wewnetrznych.webp';
import image2 from '../../../assets/img/obróbka-drzwi.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/wykonczenia-wnetrz/montaz-drzwi-wewnetrznych',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/wykonczenia-wnetrz',
	},
	name: 'Montaż drzwi wewnętrznych – fachowe wstawianie i wymiana drzwi',
	description:
		'Szukasz profesjonalnego montażu drzwi wewnętrznych? Oferujemy precyzyjne wstawianie drzwi, wymianę z ościeżnicą regulowaną i stałą. Sprawdź naszą ofertę!',
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
		'Montaż drzwi wewnętrznych',
		'Wstawianie drzwi wewnętrznych',
		'Wymiana drzwi wewnętrznych z ościeżnicą',
		'Montaż drzwi wewnętrznych z ościeżnicą regulowaną',
		'Montaż drzwi wewnętrznych z ościeżnicą stałą',
		'Koszt montażu drzwi wewnętrznych',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi montażu i wymiany drzwi',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż drzwi wewnętrznych – precyzyjne osadzenie i regulacja',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Wstawianie drzwi wewnętrznych – szybki i fachowy montaż',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Wymiana drzwi wewnętrznych z ościeżnicą – dopasowanie do nowego wnętrza',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż drzwi wewnętrznych z ościeżnicą regulowaną – elastyczne dopasowanie do ścian',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż drzwi wewnętrznych z ościeżnicą stałą – stabilne i trwałe rozwiązanie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Koszt montażu drzwi wewnętrznych – szczegółowa wycena i doradztwo',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Montaż drzwi wewnętrznych – fachowe wstawianie i wymiana drzwi',
	description:
		'Szukasz profesjonalnego montażu drzwi wewnętrznych? Oferujemy precyzyjne wstawianie drzwi, wymianę z ościeżnicą regulowaną i stałą. Sprawdź naszą ofertę!',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/wykonczenia-wnetrz/montaz-drzwi-wewnetrznych',
	},

	openGraph: {
		title: 'Montaż drzwi wewnętrznych – fachowe wstawianie i wymiana drzwi',
		description:
			'Szukasz profesjonalnego montażu drzwi wewnętrznych? Oferujemy precyzyjne wstawianie drzwi, wymianę z ościeżnicą regulowaną i stałą. Sprawdź naszą ofertę!',
		url: 'https://pro-wnetrze.pl/wykonczenia-wnetrz/montaz-drzwi-wewnetrznych',
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
		title: 'Wymiana drzwi wewnętrznych z ościeżnicą – kiedy warto?',
		text: (
			<>
				<span>
					Wymiana drzwi wewnętrznych z ościeżnicą jest konieczna, gdy stare
					drzwi nie spełniają już swojej funkcji lub nie pasują do nowej
					aranżacji wnętrza. Często problemem są skrzydła drzwiowe
					zniekształcone przez wilgoć, uszkodzone zawiasy lub nieszczelna
					konstrukcja, która nie zapewnia odpowiedniej izolacji akustycznej. W
					takich przypadkach wymiana drzwi wewnętrznych z ościeżnicą regulowaną
					pozwala na elastyczne dopasowanie do różnych grubości ścian,
					eliminując potrzebę dodatkowych prac murarskich.
				</span>
				<span>
					Dzięki nowoczesnym systemom montażowym możemy dobrać odpowiednie
					rozwiązanie, które nie tylko poprawi estetykę pomieszczenia, ale także
					zwiększy wygodę użytkowania. Jeśli remontujesz mieszkanie i chcesz
					kompleksowo odmienić jego wygląd, warto skorzystać z naszej usługi{' '}
					<Link href='/wykonczenia-wnetrz/wykonczenia-pod-klucz'>
						wykończenia pod klucz
					</Link>
					, która obejmuje nie tylko montaż drzwi wewnętrznych, ale także inne
					prace wykończeniowe, zapewniając spójność aranżacyjną
				</span>
			</>
		),
		image: image1,
		imageAlt: 'adaptacja niskiego poddasza na sypialnię',
	},
	{
		title: 'Montaż drzwi zewnętrznych – trwałość i bezpieczeństwo',
		text: (
			<>
				<span>
					Montaż drzwi zewnętrznych to inwestycja w bezpieczeństwo i izolację
					termiczną budynku. Solidne drzwi wejściowe nie tylko chronią przed
					niepożądanymi gośćmi, ale także minimalizują straty ciepła i
					zapewniają skuteczną barierę przed hałasem z zewnątrz. Oferujemy
					fachowy montaż zarówno standardowych, jak i antywłamaniowych modeli
					drzwi, dostosowanych do indywidualnych potrzeb.
				</span>
				<span>
					Podczas wymiany warto zwrócić uwagę na szczelność konstrukcji oraz
					odpowiednią instalację uszczelek, które poprawiają właściwości
					termoizolacyjne. W przypadku modernizacji domu lub mieszkania często
					konieczna jest wymiana drzwi zewnętrznych, szczególnie jeśli
					dotychczasowe modele nie zapewniają odpowiedniej ochrony. Dzięki
					precyzyjnemu montażowi drzwi ich trwałość oraz funkcjonalność zostają
					zachowane na długie lata, co czyni je opłacalną inwestycją.
				</span>
			</>
		),
	},
	{
		title: 'Obróbka drzwi – precyzyjne wykończenie i trwałość',
		text: (
			<>
				<span>
					Obróbka drzwi to kluczowy etap, który wpływa na ich estetykę oraz
					prawidłowe funkcjonowanie. Starannie wykonana obróbka obejmuje
					dopasowanie ościeżnicy, wyrównanie powierzchni oraz wykończenie
					krawędzi, co zapewnia trwałość i komfort użytkowania. W ramach naszych
					usług oferujemy montaż drzwi wewnętrznych, dbając o ich stabilność i
					idealne dopasowanie do wnętrza.
				</span>
				<span>
					Podczas wstawiania drzwi wewnętrznych stosujemy nowoczesne techniki
					montażowe, które gwarantują precyzyjne osadzenie i eliminację
					ewentualnych szczelin. Oferujemy zarówno montaż drzwi wewnętrznych z
					ościeżnicą regulowaną, pozwalającą na elastyczne dopasowanie do ścian,
					jak i montaż drzwi wewnętrznych z ościeżnicą stałą, co zapewnia
					trwałość i estetyczny wygląd. Dzięki profesjonalnemu podejściu do
					obróbki drzwi, każde wnętrze zyskuje spójność i funkcjonalność.
					Skontaktuj się z nami, aby uzyskać precyzyjne dopasowanie drzwi do
					Twojego wnętrza!
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Obróbka drzwi wewnętrznych',
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
				title='Montaż drzwi wewnętrznych'
				text='Montaż drzwi wewnętrznych to kluczowy etap wykończenia wnętrza, który wpływa na jego funkcjonalność i estetykę. Oferujemy profesjonalny montaż drzwi wewnętrznych z ościeżnicą, dopasowany do różnych typów pomieszczeń i konstrukcji ścian. Bez względu na to, czy potrzebujesz wstawienia drzwi wewnętrznych w nowym budynku, czy wymiany starych drzwi na nowe, zapewniamy precyzyjne wykonanie i trwałe rozwiązania.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Fachowy'
				heading='montaż drzwi wewnętrznych'
				text={
					<>
						<span>
							Odpowiedni montaż drzwi wewnętrznych to nie tylko kwestia
							estetyki, ale również prawidłowego funkcjonowania i komfortu
							użytkowania. Niewłaściwie zamontowane drzwi mogą powodować
							trudności w domykaniu, skrzypienie lub nieszczelności. Wstawianie
							drzwi wewnętrznych wymaga precyzyjnego dopasowania skrzydła,
							regulacji ościeżnicy oraz stabilnego osadzenia konstrukcji, aby
							zapewnić płynne działanie i długą żywotność.
						</span>
						<span>
							Korzystamy z nowoczesnych technik montażowych oraz wysokiej
							jakości materiałów, co gwarantuje trwałość i elegancki wygląd
							drzwi. Ważnym elementem jest odpowiedni dobór ościeżnicy – w
							zależności od specyfiki pomieszczenia oferujemy montaż drzwi
							wewnętrznych z ościeżnicą regulowaną lub z ościeżnicą stałą.
							Dzięki temu możemy dostosować rozwiązanie do różnych grubości
							ścian i zapewnić idealne dopasowanie do aranżacji wnętrza.
							Dodatkowo dbamy o detale, takie jak właściwe uszczelnienie i
							stabilność konstrukcji, co przekłada się na komfort akustyczny
							oraz izolację termiczną. Niezależnie od tego, czy montujemy drzwi
							w nowym budynku, czy podczas remontu, zapewniamy fachowe doradztwo
							i precyzyjne wykonanie.
						</span>
					</>
				}
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Koszt
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						montażu drzwi wewnętrznych - od czego zależy?
					</h3>
					<p className={styles.linkingText}>
						<span>
							Cena montażu drzwi wewnętrznych zależy od kilku kluczowych
							czynników, takich jak rodzaj drzwi, sposób montażu oraz zakres
							dodatkowych prac. Koszt różni się w zależności od tego, czy
							wybierzesz drzwi wewnętrzne z ościeżnicą regulowaną, czy montaż
							drzwi wewnętrznych z ościeżnicą stałą. Standardowe modele są
							tańsze, natomiast drzwi przesuwne, harmonijkowe czy dwuskrzydłowe
							mogą wymagać bardziej zaawansowanych metod montażu, co wpływa na
							ostateczną cenę.
						</span>
						<span>
							Warto pamiętać, że na finalny koszt składają się również dodatkowe
							elementy, takie jak montaż klamek, zamków oraz regulacja drzwi po
							instalacji. Aby uzyskać precyzyjną wycenę, warto skontaktować się
							z nami i określić zakres usług. Jeśli oprócz wstawienia drzwi
							wewnętrznych planujesz także wymianę podłóg, sprawdź naszą usługę{' '}
							<Link href='/wykonczenia-wnetrz/ukladanie-paneli-parkietow'>
								układania podłóg
							</Link>
							, która pozwoli na kompleksowe wykończenie wnętrza, zapewniając
							jego spójny wygląd i wysoką jakość wykonania.
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zaufać przy montażu drzwi wewnętrznych?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='przy montażu drzwi wewnętrznych?'
				textClass={styles.contactText}>
				Planujesz montaż drzwi wewnętrznych, ale nie masz pewności, jak
				prawidłowo je osadzić? Oferujemy kompleksowe wstawianie drzwi
				wewnętrznych, dopasowane do różnych typów ościeżnic i konstrukcji ścian.
				Niezależnie od tego, czy potrzebujesz montażu drzwi wewnętrznych z
				ościeżnicą regulowaną, czy z ościeżnicą stałą, zapewniamy precyzyjne
				wykonanie i trwałe rozwiązania.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
