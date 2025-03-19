import React from 'react';
import backgroundImage from '../../../assets/img/glinka-wenecka.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/stiuk-wenecki-a-glinka.webp';
import image2 from '../../../assets/img/glinka-wenecka-na-klatce-schodowej.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': 'https://pro-wnetrze.pl/tynki-dekoracyjne/glinka-wenecka#service',
	name: 'Glinka wenecka – dekoracyjne wykończenie ścian | Efekt przetartego tynku',
	description:
		'Profesjonalne położenie glinki weneckiej – trwałe i eleganckie wykończenie ścian. Sprawdź kolory, efekt dekoracyjny i koszt aplikacji!',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/tynki-dekoracyjne',
	},
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},

	serviceType: [
		'Położenie glinki weneckiej na ścianę',
		'Aplikacja glinki weneckiej – profesjonalne wykonanie',
		'Dekoracyjne wykończenie ścian glinką wenecką',
		'Glinka wenecka z brokatem – efekt luksusowej powierzchni',
		'Glinka wenecka na klatce schodowej – trwałość i estetyka',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi wykończeniowe – położenie glinki weneckiej',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Położenie glinki weneckiej na ścianę – efekt przetartego tynku',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Aplikacja glinki weneckiej – trwałe i estetyczne wykończenie ścian',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Profesjonalne wykończenie glinką wenecką – idealne do nowoczesnych wnętrz',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Glinka wenecka z brokatem – elegancki połysk na ścianach',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Glinka wenecka na klatce schodowej – odporność i wysoka estetyka',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Koszt położenia glinki weneckiej – indywidualna wycena usługi',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title:
		'Glinka wenecka – dekoracyjne wykończenie ścian | Efekt przetartego tynku',
	description:
		'Profesjonalne położenie glinki weneckiej – trwałe i eleganckie wykończenie ścian. Sprawdź kolory, efekt dekoracyjny i koszt aplikacji!',

	alternates: {
		canonical: 'https://pro-wnetrze.pl/tynki-dekoracyjne/glinka-wenecka',
	},

	openGraph: {
		title:
			'Glinka wenecka – dekoracyjne wykończenie ścian | Efekt przetartego tynku',
		description:
			'Profesjonalne położenie glinki weneckiej – trwałe i eleganckie wykończenie ścian. Sprawdź kolory, efekt dekoracyjny i koszt aplikacji!',
		url: 'https://pro-wnetrze.pl/tynki-dekoracyjne/glinka-wenecka',
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
		title: 'Czym różni się glinka wenecka od stiuków?',
		text: (
			<>
				<span>
					Chociaż glinka wenecka i stiuki weneckie mają podobny efekt wizualny,
					różnią się składem i sposobem aplikacji. Glinka wenecka zawiera drobne
					minerały i jest bardziej elastyczna, co sprawia, że łatwiej ją
					nakładać i uzyskać równomierne przejścia kolorystyczne.
				</span>
				<span>
					Z kolei stiuki weneckie to klasyczna mieszanka wapna i pyłu
					marmurowego, która po wypolerowaniu tworzy efekt wysokiego połysku i
					głębokiego odbicia światła. Jeśli chcesz dowiedzieć się więcej o tej
					technice, sprawdź naszą stronę:{' '}
					<Link href='/tynki-dekoracyjne/stiuki-weneckie'>stuiki weneckie</Link>
					.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Glinka wenecka na ścianach',
	},
	{
		title: 'Glinka wenecka z brokatem – elegancki połysk na ścianach',
		text: (
			<>
				<span>
					Dla osób poszukujących bardziej wyrazistego efektu dostępna jest
					glinka wenecka z brokatem, która łączy klasyczny wygląd glinki
					weneckiej z subtelnym połyskiem drobinek brokatu. Taki dodatek
					sprawia, że ściany delikatnie odbijają światło, tworząc efekt głębi i
					luksusu.
				</span>
				<span>
					Glinka wenecka na ścianę z brokatem to świetne rozwiązanie do
					nowoczesnych wnętrz, które wymagają eleganckiego, ale nietuzinkowego
					wykończenia. Można ją stosować zarówno na pojedynczych ścianach jako
					dekoracyjny akcent, jak i na większych powierzchniach, gdzie nada
					wnętrzu wyjątkowy charakter.
				</span>
			</>
		),
	},
	{
		title: 'Glinka wenecka na klatce schodowej – trwałość i estetyka',
		text: (
			<>
				<span>
					Glinka wenecka na klatce schodowej to świetne rozwiązanie, które łączy
					estetykę z funkcjonalnością. Dzięki swojej odporności na wilgoć i
					uszkodzenia mechaniczne, glinka wenecka doskonale sprawdza się w
					miejscach narażonych na intensywne użytkowanie.
				</span>
				<span>
					Dzięki szerokiej palecie kolorów glinki weneckiej, można dopasować jej
					wygląd do stylu wnętrza, tworząc eleganckie i trwałe wykończenie.
					Jeśli szukasz innych efektownych technik dekoracyjnych, sprawdź
					również nasze propozycje na stronie dotyczącej{' '}
					<Link href='/tynki-dekoracyjne'>dekoracji ścian</Link>.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Glinka wenecka na klatce schodowej',
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
				title='Glinka wenecka'
				text='Glinka wenecka to eleganckie wykończenie ścian, które nadaje wnętrzom wyjątkowy, dekoracyjny efekt. Dzięki szerokiej gamie kolorów glinki weneckiej i różnorodnym technikom aplikacji można uzyskać zarówno subtelne, jak i wyraziste aranżacje.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Co to jest'
				heading='glinka wenecka'
				text={
					<>
						<span>
							Glinka wenecka to dekoracyjna farba strukturalna, która tworzy
							efekt przetartego tynku na ścianach, nadając wnętrzom unikalny,
							lekko surowy charakter. Jest to idealne rozwiązanie dla osób
							poszukujących eleganckiego i nietuzinkowego wykończenia, które
							łączy estetykę z trwałością.
						</span>
						<span>
							Dzięki specjalnej formule glinka wenecka na ścianę pozwala uzyskać
							powierzchnię o subtelnym cieniowaniu i delikatnej teksturze. Efekt
							końcowy zależy od sposobu aplikacji – można uzyskać zarówno
							głębokie przetarcia, jak i bardziej jednolitą fakturę.
						</span>
						<span>
							Dostępne kolory glinki weneckiej obejmują szeroką gamę odcieni, od
							naturalnych beży i szarości po intensywne barwy, które podkreślają
							charakter wnętrza. To rozwiązanie doskonale sprawdza się w
							salonach, przedpokojach, sypialniach, a także w przestrzeniach
							komercyjnych, gdzie liczy się oryginalność i trwałość wykończenia.
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
						położenie glinki weneckiej?
					</h3>
					<p className={styles.linkingText}>
						<span>
							Koszt położenia glinki weneckiej zależy od kilku kluczowych
							czynników, takich jak powierzchnia ściany, wybrany kolor glinki
							weneckiej oraz stopień skomplikowania aplikacji. Na cenę wpływa
							również konieczność wcześniejszego przygotowania podłoża,
							zwłaszcza jeśli ściany wymagają gruntowania lub wyrównania przed
							nałożeniem dekoracyjnej warstwy.
						</span>
						<span>
							Dodatkowym elementem kształtującym cenę jest liczba warstw –
							glinka wenecka na ścianę może wymagać dwóch lub więcej aplikacji,
							aby uzyskać pożądany efekt głębi i przetarć. Istotne znaczenie ma
							również technika nakładania – ręczna aplikacja wykonywana przez
							doświadczonych specjalistów jest bardziej czasochłonna, ale
							gwarantuje perfekcyjne wykończenie i unikalny wygląd.
						</span>
						<span>
							Jeśli zastanawiasz się, ile kosztuje położenie glinki weneckiej,
							warto skonsultować się z fachowcami, którzy przygotują
							indywidualną wycenę dostosowaną do Twoich oczekiwań i warunków
							technicznych wnętrza. Profesjonalna aplikacja zapewnia nie tylko
							estetyczny efekt, ale także odporność na ścieranie i długą
							trwałość. Warto postawić na sprawdzonych wykonawców, aby cieszyć
							się doskonałym efektem dekoracyjnym przez lata.
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zlecić wykonanie glinki weneckiej?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w położeniu glinki weneckiej?'
				textClass={styles.contactText}>
				Chcesz stworzyć nowoczesne wnętrze z imitacją betonu na ścianie, ale nie
				wiesz, jaką metodę wybrać? Oferujemy profesjonalne doradztwo i
				wykonanie, dostosowane do Twoich oczekiwań. Niezależnie od tego, czy
				interesuje Cię farba imitująca beton, beton dekoracyjny na ścianę, czy
				płyty betonowe, pomożemy dobrać najlepsze rozwiązanie.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
