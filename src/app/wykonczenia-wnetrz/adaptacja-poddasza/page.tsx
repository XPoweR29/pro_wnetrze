import React from 'react';
import backgroundImage from '../../../assets/img/adaptowanie-poddasza.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/adaptacja-niskiego-poddasza.webp';
import image2 from '../../../assets/img/adaptacja-poddasza-uzytkowego.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/wykonczenia-wnetrz/adaptacja-poddasza',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/wykonczenia-wnetrz',
	},
	name: 'Adaptacja poddasza – kompleksowe wykończenie i zagospodarowanie strychu',
	description:
		'Planujesz adaptację poddasza? Oferujemy kompleksowe usługi – od ocieplenia i zabudowy strychu po pełne wykończenie poddasza. Sprawdź naszą ofertę!',
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
		'Adaptacja poddasza',
		'Adaptacja poddasza projekt',
		'Adaptacja niskiego strychu',
		'Adaptacja poddasza w starym domu',
		'Remont poddasza',
		'Koszt adaptacji poddasza',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi adaptacji i remontu poddasza',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Kompleksowa adaptacja poddasza – ocieplenie, instalacje i wykończenie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Adaptacja niskiego strychu – funkcjonalne zagospodarowanie przestrzeni',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Adaptacja poddasza w starym domu – dostosowanie konstrukcji i izolacji',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Remont poddasza – zabudowa strychu, wymiana okien i ocieplenie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Koszt adaptacji poddasza – szczegółowa wycena materiałów i robocizny',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title:
		'Adaptacja poddasza – kompleksowe wykończenie i zagospodarowanie strychu',
	description:
		'Planujesz adaptację poddasza? Oferujemy kompleksowe usługi – od ocieplenia i zabudowy strychu po pełne wykończenie poddasza. Sprawdź naszą ofertę!',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/wykonczenia-wnetrz/adaptacja-poddasza',
	},

	openGraph: {
		title:
			'Adaptacja poddasza – kompleksowe wykończenie i zagospodarowanie strychu',
		description:
			'Planujesz adaptację poddasza? Oferujemy kompleksowe usługi – od ocieplenia i zabudowy strychu po pełne wykończenie poddasza. Sprawdź naszą ofertę!',
		url: 'https://pro-wnetrze.pl/wykonczenia-wnetrz/adaptacja-poddasza',
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
		title: 'Adaptacja niskiego strychu',
		text: (
			<>
				<span>
					Adaptacja niskiego strychu to świetny sposób na zagospodarowanie
					przestrzeni, która często pozostaje nieużywana. Może pełnić funkcję
					schowka, domowego biura lub dodatkowego pokoju, jeśli wysokość na to
					pozwala. Kluczowe jest odpowiednie wykończenie poddasza, dostosowanie
					oświetlenia oraz zastosowanie skutecznej izolacji cieplnej, aby
					wnętrze było komfortowe. W przypadku adaptacji strychu w domu
					jednorodzinnym istotnym rozwiązaniem jest{' '}
					<Link href='/uslugi-remontowo-budowlane/sucha-zabudowa'>
						sucha zabudowa
					</Link>
					, umożliwiająca szybkie i lekkie wykończenie ścian i sufitów. Dzięki
					temu nawet niski strych można efektywnie przekształcić w praktyczną
					przestrzeń.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'adaptacja niskiego poddasza na sypialnię',
	},
	{
		title: 'Adaptacja poddasza w starym domu',
		text: (
			<>
				<span>
					Adaptacja poddasza w starym domu wymaga szczególnej uwagi przy ocenie
					konstrukcji budynku oraz odpowiedniego dostosowania izolacji
					termicznej. Starsze budynki często mają nieocieplone dachy oraz
					niestandardowe belki nośne, dlatego każda adaptacja poddasza powinna
					być poprzedzona szczegółową analizą techniczną.
				</span>
				<span>
					Często konieczna jest wymiana lub wzmocnienie stropów, zwłaszcza jeśli
					planujemy adaptację poddasza na mieszkanie. Kluczowe jest także
					zapewnienie odpowiedniej wentylacji, aby uniknąć problemów z wilgocią.
					Dobrze dobrane materiały izolacyjne oraz skuteczna regulacja
					temperatury pomogą utrzymać komfort cieplny zarówno zimą, jak i latem,
					co jest szczególnie istotne w starych budynkach.
				</span>
				<span>
					Ważnym etapem jest remont poddasza, obejmujący wzmocnienie
					konstrukcji, montaż nowych okien dachowych i zastosowanie nowoczesnych
					materiałów wykończeniowych. Prace te najlepiej połączyć z
					profesjonalnym{' '}
					<Link href='/wykonczenia-wnetrz/wykonczenia-pod-klucz'>
						wykończeniem pod klucz
					</Link>
					, które zapewni spójny wygląd całego wnętrza oraz oszczędność czasu.
				</span>
			</>
		),
	},
	{
		title: 'Niezgłoszona adaptacja poddasza – co warto wiedzieć?',
		text: (
			<>
				<span>
					Niezgłoszona adaptacja poddasza może wiązać się z konsekwencjami
					prawnymi, dlatego przed rozpoczęciem prac warto upewnić się, czy
					wymagane jest pozwolenie na budowę. W wielu przypadkach konieczne
					będzie pozwolenie na adaptację poddasza, szczególnie gdy zmiana jego
					funkcji wpływa na konstrukcję budynku.
				</span>
				<span>
					Jeśli nie masz pewności, jakie formalności są wymagane, warto
					skonsultować się ze specjalistami. Pomożemy Ci dobrać odpowiednie
					rozwiązania i uniknąć nieprzyjemnych niespodzianek związanych z
					przepisami budowlanymi.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Zgłoszenie adaptacji poddasza',
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
				title='Adaptacja poddasza'
				text='Adaptacja poddasza to doskonały sposób na zyskanie dodatkowej przestrzeni mieszkalnej. Oferujemy kompleksowe usługi obejmujące adaptację poddasza pod mieszkanie, wykonanie ocieplenia, montaż okien dachowych oraz pełne wykończenie poddasza. Niezależnie od tego, czy planujesz adaptację niskiego strychu, czy przekształcenie przestrzeni w funkcjonalny pokój, zapewniamy profesjonalne doradztwo i fachowe wykonanie.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Remont'
				heading='poddasza'
				text={
					<>
						<span>
							Remont poddasza to doskonała okazja do przekształcenia nieużywanej
							przestrzeni w funkcjonalne i komfortowe wnętrze. Może to być
							dodatkowa sypialnia, domowe biuro, pokój dla dziecka czy nawet
							samodzielne mieszkanie. W ramach prac oferujemy kompleksową
							zabudowę strychu, ocieplenie, wymianę instalacji elektrycznej i
							pełne wykończenie poddasza dopasowane do Twoich potrzeb. Kluczowym
							etapem jest wybór odpowiednich materiałów, które zapewnią trwałość
							oraz komfort użytkowania. W zależności od oczekiwań klienta możemy
							zastosować suchą zabudowę, drewniane wykończenie lub tradycyjne
							tynki. Wykonujemy również montaż nowoczesnych systemów izolacji
							termicznej, które zwiększają efektywność energetyczną budynku,
							poprawiając komfort cieplny zarówno zimą, jak i latem.
						</span>
						<span>
							Oferujemy kompleksowe adaptacje poddaszy, obejmujące instalację
							płyt gipsowo-kartonowych, zabudowę sufitów oraz montaż podłóg. W
							przypadku modernizacji strychu warto skorzystać z naszej usługi{' '}
							<Link href='/wykonczenia-wnetrz/ukladanie-paneli-parkietow'>
								układania podłóg
							</Link>
							, dzięki której wnętrze zyska na estetyce i funkcjonalności.
							Odpowiednio dobrane materiały, takie jak drewniane deski, panele
							winylowe czy płytki, pozwalają stworzyć trwałą i elegancką
							przestrzeń dopasowaną do charakteru wnętrza. Niezależnie od tego,
							czy planujesz gruntowną przebudowę, czy jedynie odświeżenie
							wnętrza, remont poddasza wymaga fachowej wiedzy i precyzyjnego
							wykonania.
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
						adaptacji poddasza - od czego zależy?
					</h3>
					<p className={styles.linkingText}>
						<span>
							Koszt adaptacji poddasza zależy od kilku kluczowych czynników,
							takich jak stan techniczny budynku, zakres prac oraz wybór
							materiałów wykończeniowych. Największe wydatki związane są z
							ociepleniem dachu i ścian, montażem instalacji elektrycznej i
							hydraulicznej oraz wykonaniem zabudowy strychu. Dodatkowo, jeśli
							poddasze wymaga wzmocnienia stropu lub wymiany okien dachowych,
							koszty mogą wzrosnąć.
						</span>
						<span>
							Cena zależy również od przeznaczenia przestrzeni – adaptacja
							poddasza na mieszkanie wymaga większych nakładów niż stworzenie
							dodatkowej przestrzeni użytkowej, np. biura czy schowka. Wybór
							materiałów również ma znaczenie – wykończenie poddasza w
							standardzie premium, np. z drewnianymi elementami czy zaawansowaną
							izolacją akustyczną, będzie droższe niż podstawowa adaptacja.
						</span>
						<span>
							Jeśli planujesz adaptację poddasza, warto skorzystać z
							profesjonalnej wyceny, która uwzględni wszystkie niezbędne
							elementy. Zapewniamy rzetelną kalkulację kosztów oraz kompleksowe
							wykonanie prac – od izolacji dachu po pełne wykończenie poddasza,
							gwarantując trwałość i estetykę realizacji.
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zaufać przy adaptacji poddasza' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='przy adaptacji poddasza?'
				textClass={styles.contactText}>
				Planujesz adaptację poddasza, ale nie wiesz, od czego zacząć?
				Niezależnie od tego, czy chodzi o adaptację strychu na mieszkanie,
				remont w starym domu czy zabudowę strychu, zapewniamy kompleksową
				realizację – od projektu po finalne wykończenie poddasza. Doradzimy
				najlepsze rozwiązania, zadbamy o izolację termiczną i funkcjonalność
				przestrzeni. Skontaktuj się z nami, aby omówić szczegóły i stworzyć
				komfortowe wnętrze na poddaszu!
			</CategoryContact>
		</>
	);
};
export default ServicePage;
