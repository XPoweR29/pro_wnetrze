import React from 'react';
import backgroundImage from '../../../assets/img/trawertyn-na-scianie.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/płytki-trawertynowe.webp';
import image2 from '../../../assets/img/trawertyn-na-tarasie.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': 'https://pro-wnetrze.pl/tynki-dekoracyjne/trawertyn#service',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/tynki-dekoracyjne',
	},
	name: 'Położenie trawertynu – tynk dekoracyjny i płytki',
	description:
		'Oferujemy położenie trawertynu – dekoracyjny tynk oraz montaż płytek trawertynowych na ścianach, podłogach i tarasach.',
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	serviceType: [
		'Położenie trawertynu na ścianę i podłogę',
		'Nakładanie tynku trawertynowego – efekt kamienia',
		'Montaż płytek trawertynowych – ściany, podłogi, tarasy',
		'Trawertyn na klatce schodowej – elegancja i trwałość',
		'Trawertyn na taras – profesjonalne wykończenie',
		'Koszt położenia trawertynu – indywidualna wycena',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi wykończeniowe – położenie trawertynu',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Położenie trawertynu na ścianę – naturalny efekt kamienia',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Nakładanie tynku trawertynowego – dekoracyjne wykończenie ścian',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż płytek trawertynowych – trwałe i eleganckie wykończenie wnętrz',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Trawertyn na klatce schodowej – odporność i estetyka',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Trawertyn na taras – profesjonalne wykonanie i impregnacja',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Koszt położenia trawertynu – szczegółowa wycena usługi',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Położenie trawertynu – tynk dekoracyjny i płytki',
	description:
		'Oferujemy położenie trawertynu – dekoracyjny tynk oraz montaż płytek trawertynowych na ścianach, podłogach i tarasach.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/tynki-dekoracyjne/trawertyn',
	},

	openGraph: {
		title: 'Położenie trawertynu – tynk dekoracyjny i płytki',
		description:
			'Oferujemy położenie trawertynu – dekoracyjny tynk oraz montaż płytek trawertynowych na ścianach, podłogach i tarasach.',
		url: 'https://pro-wnetrze.pl/tynki-dekoracyjne/trawertyn',
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
		title: 'Płytki trawertyn – naturalna elegancja na ścianie i podłodze',
		text: (
			<>
				<span>
					Tynk dekoracyjny trawertyn to popularny wybór dla osób poszukujących
					efektu kamienia na ścianie w lżejszej i bardziej elastycznej formie.
					Jednak jeśli zależy Ci na jeszcze większej trwałości oraz odporności
					na wilgoć i uszkodzenia mechaniczne, warto rozważyć płytki
					trawertynowe. Dzięki swojej strukturze i różnorodnym formatom mogą być
					stosowane nie tylko na ścianach, ale także na podłogach w salonach,
					łazienkach oraz kuchniach.
				</span>
				<span>
					To doskonałe rozwiązanie dla osób, które cenią naturalne materiały i
					wyjątkowy styl. Ich charakterystyczna struktura oraz ciepłe, ziemiste
					odcienie sprawiają, że świetnie komponują się zarówno w nowoczesnych,
					jak i klasycznych wnętrzach. Płytki z trawertynu charakteryzują się
					wysoką odpornością na ścieranie, co czyni je doskonałym wyborem do
					miejsc o dużym natężeniu ruchu. W zależności od preferencji można
					wybrać wariant surowy lub polerowany, uzyskując spójny i estetyczny
					efekt w całym wnętrzu.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Płytki z trawertynu',
	},
	{
		title: 'Czy trawertyn nadaje się na zewnątrz?',
		text: (
			<>
				<span>
					Trawertyn to naturalny kamień, który można stosować zarówno wewnątrz,
					jak i na zewnątrz budynków. Jego trwałość i odporność na warunki
					atmosferyczne zależą od odpowiedniej obróbki oraz impregnacji.
					Trawertyn kamień zabezpieczony specjalnymi środkami jest odporny na
					wilgoć, mróz i promieniowanie UV, dlatego świetnie sprawdza się na
					elewacjach, schodach czy tarasach
				</span>
				<span>
					Płytki trawertynowe na zewnątrz wymagają regularnej impregnacji, aby
					zapobiec nasiąkaniu wodą i utrzymać ich estetyczny wygląd przez lata.
					Dzięki naturalnej strukturze oraz antypoślizgowej powierzchni
					trawertyn na zewnątrz to idealny wybór do aranżacji przestrzeni w
					ogrodzie i na tarasach.
				</span>
			</>
		),
	},
	{
		title: 'Trawertyn na taras – styl i funkcjonalność',
		text: (
			<>
				<span>
					Trawertyn na taras to połączenie estetyki, trwałości i naturalnego
					charakteru, które doskonale komponuje się z otoczeniem ogrodu. Płytki
					trawertynowe na taras są odporne na ścieranie oraz zmienne warunki
					atmosferyczne, co sprawia, że sprawdzają się zarówno w nowoczesnych,
					jak i klasycznych aranżacjach.
				</span>
				<span>
					Ich antypoślizgowa powierzchnia zapewnia bezpieczeństwo użytkowania,
					nawet podczas deszczu. Taras z trawertynu można zastosować zarówno w
					strefach relaksu, jak i przy basenach, tworząc elegancką i trwałą
					przestrzeń wypoczynkową, odporną na działanie wilgoci i promieniowania
					UV.
				</span>
				<span>
					Jeśli szukasz innych rozwiązań do wykończenia tarasu, warto rozważyć
					również{' '}
					<Link href='/uslugi-remontowo-budowlane/glazurnictwo-ukladanie-plytek'>
						glazurnictwo
					</Link>
					, które pozwala na zastosowanie odpornych płytek gresowych, idealnych
					do nowoczesnych aranżacji zewnętrznych
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Trawertyn na tarasie',
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
				title='Trawertyn'
				text='Trawertyn to naturalny kamień dekoracyjny, który od wieków wykorzystywany jest w eleganckich wnętrzach i na elewacjach. Dzięki unikalnej strukturze i bogatej kolorystyce nadaje przestrzeni ciepły, ponadczasowy wygląd.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Czym jest'
				heading='tynk trawertyn?'
				text={
					<>
						<span>
							Tynk trawertyn to dekoracyjne wykończenie ścian inspirowane
							naturalnym kamieniem trawertynem. Charakteryzuje się porowatą
							strukturą, przypominającą naturalne ubytki i spękania, co nadaje
							wnętrzom wyjątkowy, antyczny charakter. Dzięki zastosowaniu
							specjalnych technik aplikacji można uzyskać efekt kamiennej
							powierzchni, który doskonale komponuje się zarówno z nowoczesnymi,
							jak i klasycznymi aranżacjami.
						</span>
						<span>
							Nakładanie trawertynu na ścianę wymaga odpowiedniego przygotowania
							podłoża i precyzyjnej aplikacji, aby uzyskać trwały i efektowny
							rezultat. Jest to rozwiązanie, które nadaje się zarówno do
							salonów, korytarzy, jak i przestrzeni użytkowych. <br />
							Podobnie jak{' '}
							<Link href='/tynki-dekoracyjne/glinka-wenecka'>
								glinka wenecka
							</Link>
							, tynk trawertyn to świetna alternatywa dla klasycznych farb i
							tapet. Sprawdź więcej o tej technice na naszej stronie: glinka
							wenecka.
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
						położenie tynku trawertyn?
					</h3>
					<p className={styles.linkingText}>
						<span>
							Cena położenia trawertynu zależy od kilku istotnych czynników,
							takich jak powierzchnia, format materiału, sposób aplikacji oraz
							rodzaj wykończenia. Koszt może się różnić w zależności od tego,
							czy wybieramy płytki trawertynowe do zastosowania na podłodze,
							ścianie, elewacji czy tarasie, czy też zdecydujemy się na tynk
							dekoracyjny imitujący trawertyn, który jest świetnym rozwiązaniem
							dla osób poszukujących eleganckiego efektu kamienia w bardziej
							przystępnej formie.
						</span>
						<span>
							Cena za m² trawertynu uzależniona jest również od jakości i
							rodzaju obróbki. Surowy trawertyn ma bardziej naturalny wygląd i
							jest tańszy, natomiast polerowane i impregnowane płyty
							trawertynowe mogą mieć wyższą cenę ze względu na większą odporność
							na wilgoć i zabrudzenia. W przypadku nakładania trawertynu w
							formie tynku dekoracyjnego, cena obejmuje również koszt
							przygotowania podłoża, aplikacji oraz wykończenia powierzchni, co
							wpływa na końcowy efekt i trwałość wykonania.
						</span>
						<span>
							Jeśli chcesz uzyskać szczegółową wycenę, skontaktuj się z nami –
							zapewniamy profesjonalne nakładanie trawertynu w różnych
							technikach oraz fachowe doradztwo w doborze najlepszego
							rozwiązania dla Twojego wnętrza!
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zlecić położenie trawertynu?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w położeniu trawertynu?'
				textClass={styles.contactText}>
				Szukasz fachowców do położenia trawertynu na ścianach, podłogach lub
				tarasie? Oferujemy profesjonalne nakładanie tynku dekoracyjnego
				trawertyn oraz montaż płytek trawertynowych, zapewniając trwały i
				estetyczny efekt. Niezależnie od tego, czy wybierasz tynk trawertynowy,
				czy naturalne płyty trawertynowe, pomożemy Ci dobrać najlepsze
				rozwiązanie do Twojego wnętrza.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
