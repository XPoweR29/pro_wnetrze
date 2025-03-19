import React from 'react';
import backgroundImage from '../../../assets/img/sucha-zabudowa.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/zabudowa-z-plyt-gk.webp';
import image2 from '../../../assets/img/sucha-zabudowa-poddasza.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/sucha-zabudowa#service',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
	},
	name: 'Sucha zabudowa - kompleksowy montaż płyt GK',
	description:
		'Kompleksowe usługi, obejmujące zabudowę z płyt GK, montaż płyt gipsowych, suche tynki oraz elementy i systemy suchej zabudowy.',
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	serviceType:
		'Sucha zabudowa, zabudowa z płyt GK, montaż płyt gipsowych, suche tynki',
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi suchej zabudowy',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Zabudowa z płyt GK – precyzyjne wykonanie ścian i sufitów',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż płyt gipsowych – solidna i trwała konstrukcja',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Suche tynki – nowoczesne rozwiązanie dla estetycznego wykończenia',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Elementy suchej zabudowy – kompleksowe systemy i akcesoria',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Sucha zabudowa - kompleksowy montaż płyt GK',
	description:
		'Kompleksowe usługi, obejmujące zabudowę z płyt GK, montaż płyt gipsowych, suche tynki oraz elementy i systemy suchej zabudowy.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/sucha-zabudowa',
	},

	openGraph: {
		title: 'Sucha zabudowa - kompleksowy montaż płyt GK',
		description:
			'Kompleksowe usługi, obejmujące zabudowę z płyt GK, montaż płyt gipsowych, suche tynki oraz elementy i systemy suchej zabudowy.',
		url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/sucha-zabudowa',
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
		title: 'Zabudowa z płyt GK',
		text: (
			<>
				<span>
					Zabudowa z płyt GK to jedna z najpopularniejszych form suchej
					zabudowy, pozwalająca na szybkie i czyste wykończenie ścian czy
					sufitów. Dzięki zastosowaniu płyty karton gips, uzyskujemy równą i
					gładką powierzchnię, która jest gotowa do dalszych prac, takich jak
					malowanie czy tapetowanie. W ramach tej metody stosuje się także różne
					elementy suchej zabudowy, które umożliwiają stworzenie wnęk, półek czy
					dekoracyjnych łuków. Jeśli interesują Cię bardziej zaawansowane
					rozwiązania sufitowe, zapraszamy do zapoznania się z naszą ofertą{' '}
					<Link href='/uslugi-remontowo-budowlane/sufity-podwieszane'>
						sufitów podwieszanych
					</Link>
					. W połączeniu z zabudową z płyt GK tworzą one spójne i efektowne
					aranżacje, nadając wnętrzu nowoczesny wygląd i poprawiając jego
					funkcjonalność.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'zabudowa z płyt kartonowo gipsowych',
	},
	{
		title: 'Elementy suchej zabudowy',
		text: (
			<>
				<span>
					Wykorzystanie różnorodnych elementów suchej zabudowy pozwala na
					swobodne kształtowanie przestrzeni zgodnie z indywidualnymi potrzebami
					i preferencjami. Mogą to być profile stalowe, łączniki, wkręty czy
					taśmy wzmacniające, które w połączeniu z płytami GK tworzą solidną i
					trwałą konstrukcję. Kluczowe jest zastosowanie odpowiednich narzędzi
					do suchej zabudowy, dzięki czemu cały proces przebiega sprawnie i bez
					usterek.
				</span>
				<span>
					Dobór właściwych materiałów oraz profesjonalny montaż płyt GK
					gwarantuje nie tylko estetykę, ale także funkcjonalność wnętrza. W ten
					sposób można szybko postawić ścianki działowe, zamaskować instalacje
					lub stworzyć atrakcyjne detale architektoniczne, zachowując
					jednocześnie wysoką jakość wykonania. Dzięki zastosowaniu systemów
					suchej zabudowy, całość prac przebiega w sposób czysty i szybki, co
					pozwala na elastyczne dostosowywanie aranżacji do zmieniających się
					potrzeb użytkowników. To kompleksowe rozwiązanie jest idealne zarówno
					dla małych mieszkań, jak i dużych obiektów komercyjnych, zapewniając
					trwałe i precyzyjne wykonanie, które stanowi doskonałą bazę dla
					dalszych prac wykończeniowych.
				</span>
			</>
		),
	},
	{
		title: 'Sucha zabudowa poddasza',
		text: (
			<>
				<span>
					Sucha zabudowa poddasza to doskonałe rozwiązanie dla osób, które chcą
					efektywnie wykorzystać przestrzeń pod dachem i przekształcić ją w
					komfortowe pomieszczenie mieszkalne. Montaż płyt GK na poddaszu
					pozwala na wyrównanie i ocieplenie ścian oraz skosów, tworząc
					przytulną i estetyczną przestrzeń. Nasza ekipa fachowo wykonuje
					zabudowę GK poddasza, dbając o odpowiednią izolację termiczną i
					akustyczną.
				</span>
				<span>
					Jeśli planujesz gruntowną przemianę tej strefy domu, zachęcamy do
					zapoznania się z naszą usługą{' '}
					<Link href='/wykonczenia-wnetrz/adaptacja-poddasza'>
						adaptacji poddasza
					</Link>
					. Połączenie suchej zabudowy poddasza GK z profesjonalnym ociepleniem
					oraz wykończeniem wnętrza sprawi, że zyskasz dodatkową, funkcjonalną
					przestrzeń w swoim domu.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Sucha zabudowa na poddaszu',
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
				title='Sucha zabudowa'
				text='Sucha zabudowa to wszechstronne rozwiązanie umożliwiające szybkie i estetyczne wykończenie wnętrz. Od zabudowy z płyt GK, przez suche tynki, aż po suchą zabudowę poddasza – wszystkie te metody pozwalają na uzyskanie gładkich ścian i sufitów, a także na dowolne kształtowanie przestrzeni. Kluczem do sukcesu jest profesjonalny montaż płyt kartonowo gipsowych i odpowiedni dobór elementów suchej zabudowy, które zapewniają trwałość i funkcjonalność na lata.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Sucha zabudowa'
				heading='- co to jest?'
				text='Sucha zabudowa to nowoczesna technologia wykończeniowa, w której do tworzenia ścian, sufitów oraz innych elementów wnętrza wykorzystuje się płyty kartonowo gipsowe (płyty GK) i specjalne systemy montażowe. W przeciwieństwie do tradycyjnych metod mokrych, takich jak tynkowanie czy wylewanie betonu, proces suchej zabudowy odbywa się bez użycia dużej ilości wody, co przekłada się na szybszy i czystszy przebieg prac. Zastosowanie suchych tynków oraz elementów suchej zabudowy pozwala na dowolne kształtowanie przestrzeni – można tworzyć wnęki, półki, a nawet efektowne obudowy instalacji. Dzięki temu w krótkim czasie uzyskuje się gładkie, estetyczne i trwałe powierzchnie, które stanowią idealną bazę pod malowanie, tapetowanie lub inne formy wykończenia. Co więcej, sucha zabudowa sprzyja utrzymaniu właściwego mikroklimatu w pomieszczeniach i ułatwia późniejsze modyfikacje wnętrza, gdyż konstrukcje wykonane z płyt GK można w prosty sposób dostosowywać do zmieniających się potrzeb domowników.'
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Suche
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						tynki
					</h3>
					<p className={styles.linkingText}>
						Suche tynki stanowią alternatywę dla tradycyjnego tynkowania na
						mokro. Polegają na przyklejaniu płyt kartonowo gipsowych
						bezpośrednio do ściany, co znacząco skraca czas realizacji i
						ogranicza wilgoć w pomieszczeniach. Ta metoda jest szczególnie
						przydatna w przypadku nierównych lub zniszczonych ścian, gdzie
						tradycyjne tynkowanie byłoby bardziej pracochłonne. Zastosowanie
						suchych tynków to nie tylko oszczędność czasu, ale także czystszy
						proces remontowy. Dzięki temu można szybko przejść do kolejnych
						etapów wykończenia, takich jak malowanie czy montaż dekoracyjnych
						elementów. Suche tynki są również łatwe w obróbce i pozwalają na
						tworzenie ciekawych rozwiązań aranżacyjnych, np. wnęk czy półek, z
						użyciem systemów suchej zabudowy.
					</p>

					<CategoryFeatures title='Sprawdź, co zyskujesz wybierając nas do montażu suchej zabudowy' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w montażu suchej zabudowy?'
				textClass={styles.contactText}>
				Potrzebujesz pomocy w montażu suchej zabudowy? Jeśli tak, nasz zespół
				ekspertów jest gotowy, aby zaoferować Ci kompleksowe wsparcie w zakresie
				montażu płyt GK i zastosowania nowoczesnych systemów suchej zabudowy.
				Dzięki wieloletniemu doświadczeniu w pracy z elementami suchej zabudowy
				i wykorzystaniu profesjonalnych narzędzi, gwarantujemy precyzyjne
				wykonanie, które przekłada się na trwałe i estetyczne wykończenie Twoich
				wnętrz. Zapewniamy indywidualne doradztwo i pomoc na każdym etapie
				projektu, aby dostosować rozwiązania do Twoich specyficznych potrzeb.
				Skontaktuj się z nami i dowiedz się, jak możemy pomóc w realizacji
				Twojego projektu remontowego.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
