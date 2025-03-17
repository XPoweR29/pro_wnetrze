import React from 'react';
import backgroundImage from '../../../assets/img/wykonczenie-pod-klucz.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/wykonczenia-wnetrz-bielsko-biala.webp';
import image2 from '../../../assets/img/adaptacja-poddasza.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/wykonczenia-wnetrz/wykonczenia-pod-klucz',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/wykonczenia-wnetrz',
	},
	name: 'Wykończenia pod klucz – kompleksowe wykończenie mieszkań i domów',
	description:
		'Kompleksowe wykończenia pod klucz mieszkań i domów. Zaufaj ekspertom i zamieszkaj w gotowym wnętrzu!',
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
		'Wykończenia pod klucz – kompleksowe realizacje wnętrz',
		'Wykończenie mieszkań pod klucz',
		'Wykończenie domów pod klucz',
		'Prace remontowo-wykończeniowe pod klucz',
		'Koszt wykończenia pod klucz – indywidualna wycena',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi wykończeniowe pod klucz',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Wykończenia pod klucz – kompleksowe realizacje wnętrz',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Wykończenie mieszkania pod klucz – gotowe wnętrze bez zbędnych formalności',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Wykończenie domu pod klucz – pełna realizacja prac wykończeniowych',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Prace remontowo-wykończeniowe pod klucz – kompleksowa obsługa inwestycji',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Koszt wykończenia pod klucz – szczegółowa wycena i doradztwo',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Wykończenia pod klucz – kompleksowe wykończenie mieszkań i domów',
	description:
		'Kompleksowe wykończenia pod klucz mieszkań i domów. Zaufaj ekspertom i zamieszkaj w gotowym wnętrzu!',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/wykonczenia-wnetrz/wykonczenia-pod-klucz',
	},

	openGraph: {
		title: 'Wykończenia pod klucz – kompleksowe wykończenie mieszkań i domów',
		description:
			'Kompleksowe wykończenia pod klucz mieszkań i domów. Zaufaj ekspertom i zamieszkaj w gotowym wnętrzu!',
		url: 'https://pro-wnetrze.pl/wykonczenia-wnetrz/wykonczenia-pod-klucz',
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
		title: 'Zakres usług w ramach wykończenia pod klucz',
		text: (
			<>
				<span>
					Wykończenia pod klucz obejmują wszystkie niezbędne prace remontowe,
					które pozwalają przekształcić surową przestrzeń w funkcjonalne i
					estetyczne wnętrze. Realizujemy kompleksowe wykończenia zarówno
					mieszkań, jak i domów, dbając o precyzyjne wykonanie każdego etapu
					prac.
				</span>
				<span>
					Dzięki doświadczeniu i sprawdzonym rozwiązaniom możemy dostosować
					zakres usług do indywidualnych potrzeb klientów. Oferujemy pełne
					wsparcie na każdym etapie realizacji – od wstępnych konsultacji po
					finalne wykończenie. Jeśli chcesz poznać szczegóły naszej oferty,
					sprawdź więcej na stronie{' '}
					<Link href='/uslugi-remontowo-budowlane'>usługi remontowe</Link>.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Układanie paneli podłogowych',
	},
	{
		title: 'Wykończenie mieszkania pod klucz – oszczędność czasu i pieniędzy',
		text: (
			<>
				<span>
					Wybór wykończenia mieszkania pod klucz to nie tylko wygoda, ale
					również sposób na oszczędność czasu i pieniędzy. Powierzając
					realizację profesjonalistom, masz pewność, że wszystkie prace zostaną
					wykonane w określonym terminie i zgodnie z budżetem. Dzięki
					sprawdzonym ekipom i doświadczeniu, unikniesz niepotrzebnych kosztów
					związanych z błędami wykonawczymi. Co więcej, w ramach naszej usługi
					zapewniamy hurtowe ceny na materiały, co pozwala dodatkowo
					zoptymalizować wydatki. Jeśli chcesz uniknąć stresu i niepotrzebnych
					wydatków, postaw na wykończenie mieszkania pod klucz w naszym
					wykonaniu.
				</span>
			</>
		),
	},
	{
		title: 'Remontowanie domu pod klucz',
		text: (
			<>
				<span>
					Remont domu pod klucz to kompleksowy proces, który wymaga
					doświadczenia i dbałości o każdy szczegół. Oferujemy profesjonalne
					prace wykończeniowe dla domów jednorodzinnych, zapewniając wysoką
					jakość i trwałość. Nasze wykończenia pod klucz obejmują nie tylko
					podstawowe prace, takie jak układanie podłóg, montaż drzwi, czy
					malowanie ścian, ale także zaawansowane rozwiązania dostosowane do
					nowoczesnych wnętrz. Dbamy o precyzyjne wykończenie powierzchni,
					optymalizację instalacji oraz aranżację oświetlenia, tworząc
					funkcjonalne i komfortowe przestrzenie.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Montaż paneli winylowych na podłodze',
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
				title='Wykończenia pod klucz'
				text='Wykończenia pod klucz to kompleksowe prace remontowe, które pozwolą Ci wprowadzić się do gotowego wnętrza bez zbędnych formalności i stresu. Oferujemy profesjonalne wykończenie mieszkań i domów, obejmujące malowanie, układanie podłóg, montaż drzwi oraz inne niezbędne prace budowlane. Z nami masz pewność, że wszystko zostanie wykonane solidnie i zgodnie z projektem'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Wykończenia'
				heading='pod klucz - kompleksowa realizacja wnętrz'
				text={
					<>
						<span>
							Wykończenia pod klucz to doskonałe rozwiązanie dla osób, które
							chcą wprowadzić się do w pełni gotowego mieszkania lub domu.
							Proces obejmuje wszystkie etapy – od prac budowlanych, przez
							montaż instalacji, aż po wykończenie i aranżację wnętrza.
						</span>
						<span>
							Oferujemy wykończenia mieszkań pod klucz oraz wykończenia domów
							pod klucz, dostosowane do indywidualnych oczekiwań klienta. Dbamy
							o każdy detal, gwarantując trwałość, estetykę i funkcjonalność
							przestrzeni. Wybierając kompleksowe wykończenie pod klucz,
							oszczędzasz czas i unikasz konieczności koordynowania wielu ekip
							remontowych.
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
						wykończenie mieszkania pod klucz?
					</h3>
					<p className={styles.linkingText}>
						<span>
							Koszt wykończenia pod klucz zależy od wielu czynników, takich jak
							standard wykończenia, wielkość nieruchomości oraz zakres prac.
							Cena wykończenia mieszkania pod klucz może się różnić w zależności
							od rodzaju zastosowanych materiałów, stopnia skomplikowania
							projektu oraz konieczności przeprowadzenia dodatkowych prac
							remontowych
						</span>
						<span>
							Dla osób szukających budżetowego wykończenia, proponujemy
							rozwiązania ekonomiczne, które pozwalają uzyskać estetyczny efekt
							przy minimalnych kosztach. Jeśli natomiast zależy Ci na luksusowym
							wykończeniu pod klucz, oferujemy materiały premium oraz najnowsze
							technologie, które nadają wnętrzu ekskluzywny charakter i podnoszą
							jego wartość.
						</span>
						<span>
							Warto pamiętać, że dokładny koszt wykończenia pod klucz jest
							ustalany indywidualnie i zależy od specyficznych wymagań klienta.
							Aby uzyskać precyzyjną wycenę, skontaktuj się z nami –
							przygotujemy szczegółowy kosztorys, uwzględniający wszystkie
							aspekty prac oraz Twój budżet, aby zapewnić najlepszy stosunek
							jakości do ceny.
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zlecić remont pod klucz?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w wykończeniu domu lub mieszkania?'
				textClass={styles.contactText}>
				Planujesz wykończenie mieszkania pod klucz, ale nie wiesz, od czego
				zacząć? Oferujemy kompleksowe wykończenia pod klucz, które obejmują
				wszystkie niezbędne prace remontowe – od malowania i układania podłóg po
				montaż drzwi i sufitów podwieszanych. Zapewniamy profesjonalne
				doradztwo, terminową realizację oraz precyzyjne wykonanie, dzięki czemu
				Twoje mieszkanie będzie gotowe do zamieszkania bez zbędnego stresu.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
