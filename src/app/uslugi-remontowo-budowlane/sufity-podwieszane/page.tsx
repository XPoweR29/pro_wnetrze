import React from 'react';
import backgroundImage from '../../../assets/img/sufit-podwieszany.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/sufit-podwieszany-jednopoziomowy.webp';
import image2 from '../../../assets/img/sufit-podwieszany-led.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';
import Link from 'next/link';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/sufity-podwieszane',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
	},
	name: 'Sufity podwieszane – montaż sufitów podwieszanych GK',
	description:
		'Profesjonalny montaż sufitów podwieszanych – jednopoziomowych, dwupoziomowych, LED i GK. Oferujemy solidne konstrukcje i estetyczne wykończenie wnętrz.',
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
	serviceType:
		'Sufity podwieszane, montaż sufitów GK, sufity LED, zabudowa z płyt gipsowych',
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi montażu sufitów podwieszanych',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż sufitów podwieszanych – solidna i trwała konstrukcja',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Sufit podwieszany LED – nowoczesne i energooszczędne rozwiązanie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Sufit podwieszany jednopoziomowy – proste i funkcjonalne wykończenie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Sufit podwieszany dwupoziomowy – efektowna i nowoczesna aranżacja',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż płyt GK na sufit – precyzyjne i trwałe wykończenie',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Sufity podwieszane – montaż sufitów podwieszanych GK',
	description:
		'Profesjonalny montaż sufitów podwieszanych – jednopoziomowych, dwupoziomowych, LED i GK. Oferujemy solidne konstrukcje i estetyczne wykończenie wnętrz.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/sufity-podwieszane',
	},

	openGraph: {
		title: 'Sufity podwieszane – montaż sufitów podwieszanych GK',
		description:
			'Profesjonalny montaż sufitów podwieszanych – jednopoziomowych, dwupoziomowych, LED i GK. Oferujemy solidne konstrukcje i estetyczne wykończenie wnętrz.',
		url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/sufity-podwieszane',
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
		title: 'Sufit podwieszany jednopoziomowy',
		text: (
			<>
				<span>
					Sufit podwieszany jednopoziomowy to popularne rozwiązanie w
					mieszkaniach i biurach, które umożliwia wygodne podwieszanie sufitu
					oraz poprawia estetykę wnętrza. Konstrukcja sufitu podwieszanego
					jednopoziomowego jest prosta i szybka w montażu, a jednocześnie
					pozwala na ukrycie instalacji oraz poprawę akustyki pomieszczenia.
					Sufit podwieszany jednopoziomowy to również doskonała baza pod montaż
					oświetlenia LED, które nadaje wnętrzu nowoczesny charakter. Wykonujemy
					sufit podwieszany jednopoziomowy z wysokiej jakości materiałów,
					zapewniając jego trwałość i estetykę. Sprawdź nasze usługi i zamów
					sufit dopasowany do Twoich potrzeb!
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Jednopoziomowy sufit podwieszany montaż',
	},
	{
		title: 'Sufit podwieszany dwupoziomowy',
		text: (
			<>
				<span>
					Sufit podwieszany dwupoziomowy to nowoczesne i efektowne rozwiązanie,
					które nadaje wnętrzu wyjątkowy charakter. Dzięki dwóm poziomom
					konstrukcji można uzyskać ciekawe efekty wizualne oraz optycznie
					powiększyć przestrzeń. Montaż sufitu podwieszanego dwupoziomowego
					pozwala na zastosowanie różnych wariantów oświetlenia, takich jak LED
					czy taśmy świetlne, co dodatkowo podkreśla estetykę wnętrza.
					Konstrukcja sufitu podwieszanego dwupoziomowego wymaga precyzji i
					odpowiedniego doboru materiałów, dlatego warto powierzyć to zadanie
					specjalistom. Zajmujemy się kompleksowym montażem sufitów
					podwieszanych, dbając o ich trwałość i nowoczesny design.
				</span>
			</>
		),
	},
	{
		title: 'Sufit podwieszany LED',
		text: (
			<>
				<span>
					Nowoczesne sufity podwieszane LED to doskonały sposób na połączenie
					estetyki i funkcjonalności w każdym wnętrzu. Podwieszany sufit w
					salonie z oświetleniem LED pozwala na stworzenie klimatycznego
					nastroju oraz podkreślenie aranżacji pomieszczenia. Oferujemy sufit
					podwieszany salon LED, który może być wyposażony w punktowe światła,
					taśmy LED lub oświetlenie RGB. Podwieszane sufity w salonie z ledami
					to rozwiązanie idealne do nowoczesnych wnętrz, zapewniające nie tylko
					ciekawy efekt wizualny, ale także energooszczędność. Montujemy
					oświetlenie sufitowe LED w sufitach podwieszanych, dbając o wysoką
					jakość wykonania i trwałość instalacji.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Sufit podświetlany LED',
	},
	{
		title: 'Sufit podwieszany w kuchni',
		text: (
			<>
				<span>
					Sufit podwieszany w kuchni to estetyczne i funkcjonalne rozwiązanie,
					które pozwala ukryć instalacje, poprawić akustykę i zamontować
					nowoczesne oświetlenie LED. Podwieszane sufity w kuchni świetnie
					sprawdzają się zarówno w wersji jednopoziomowej, jak i bardziej
					efektownej, dwupoziomowej. Można w nich zamontować taśmy LED lub
					reflektory, które nadadzą wnętrzu nowoczesny charakter i optymalnie
					doświetlą przestrzeń roboczą.
				</span>
				<span>
					Oferujemy profesjonalny montaż sufitów podwieszanych w kuchni,
					dostosowanych do stylu wnętrza i indywidualnych potrzeb.
					Wykorzystujemy trwałe materiały odporne na wilgoć, zapewniając
					solidność konstrukcji. Jeśli planujesz kompleksowe{' '}
					<Link href='/wykonczenia-wnetrz-mieszkan-domow'>
						wykończenia wnętrz
					</Link>{' '}
					i chcesz, aby Twój sufit podwieszany idealnie komponował się z
					aranżacją, skontaktuj się z nami!
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
				title='Sufity podwieszane'
				text='Sufity podwieszane to nowoczesne i funkcjonalne rozwiązanie, które pozwala estetycznie wykończyć wnętrze, ukryć instalacje oraz poprawić akustykę pomieszczenia. Oferujemy montaż sufitów podwieszanych w różnych wariantach – od klasycznych po nowoczesne konstrukcje LED. Sprawdź nasze usługi i wybierz sufit dopasowany do Twojego wnętrza!'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Montaż'
				heading='płyt GK na sufit'
				text={
					<>
						<span>
							Montaż płyt GK na suficie to jeden z najczęściej wybieranych
							sposobów na estetyczne i trwałe wykończenie wnętrza. Dzięki
							zastosowaniu płyt gipsowo-kartonowych można uzyskać gładką,
							jednolitą powierzchnię, która nie tylko podnosi walory wizualne
							pomieszczenia, ale także poprawia izolację akustyczną i termiczną.
							Montaż sufitu z płyt GK pozwala na ukrycie wszelkich instalacji
							elektrycznych, co znacząco wpływa na estetykę wnętrza. Dodatkowo
							sufit podwieszany może stanowić doskonałą bazę do montażu
							oświetlenia LED, które nada pomieszczeniu nowoczesny charakter.
						</span>
						<span>
							Dzięki odpowiedniej technologii montaż płyt GK na sufit jest
							szybki i efektywny, a jednocześnie zapewnia trwałość konstrukcji
							na długie lata. Kluczowym elementem jest solidny stelaż, który
							gwarantuje stabilność oraz odporność na odkształcenia. Niezależnie
							od tego, czy interesuje Cię klasyczne podwieszanie sufitu, czy
							bardziej skomplikowana konstrukcja sufitowa, wykonujemy prace z
							najwyższą precyzją i dbałością o detale. Montujemy płyty GK
							zarówno w domach, mieszkaniach, jak i w obiektach komercyjnych,
							dopasowując rozwiązania do indywidualnych potrzeb.
						</span>
						<span>
							Zaufaj specjalistom i wybierz profesjonalny montaż płyt GK na
							suficie – zapewniamy kompleksową obsługę, od projektu po finalne
							wykończenie. Skontaktuj się z nami, aby dowiedzieć się więcej o
							możliwościach dostosowania sufitów podwieszanych do Twojego
							wnętrza!
						</span>
					</>
				}
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Sufit podwieszany
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						- krzyżowy czy pojedynczy?
					</h3>
					<p className={styles.linkingText}>
						Wybór między sufitem podwieszanym krzyżowym a pojedynczym zależy od
						efektu, jaki chcesz osiągnąć oraz specyfiki pomieszczenia. Sufit
						podwieszany krzyżowy pozwala na bardziej skomplikowane aranżacje,
						szczególnie efektowne w dużych przestrzeniach i nowoczesnych
						wnętrzach. Dzięki zastosowaniu dodatkowych profili sufit podwieszany
						krzyżowy zapewnia większą stabilność oraz umożliwia tworzenie
						oryginalnych form i oświetlenia LED. To rozwiązanie doskonale
						komponuje się z sufitami wielopoziomowymi i podświetleniem, co
						dodaje wnętrzu elegancji. Niezależnie od wyboru, zapewniamy
						profesjonalny montaż sufitów podwieszanych, dostosowanych do Twoich
						potrzeb i aranżacji wnętrza. Nasze konstrukcje cechują się wysoką
						jakością wykonania oraz dbałością o każdy detal. Jeśli planujesz
						remont lub kompleksowe wykończenia wnętrz, skontaktuj się z nami –
						doradzimy, które rozwiązanie sprawdzi się najlepiej w Twoim
						przypadku!
					</p>

					<CategoryFeatures title='Na co możesz liczyć zlecając nam montaż sufitu podwieszanego?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w montażu sufitu podwieszanego?'
				textClass={styles.contactText}>
				Jeśli planujesz montaż sufitu podwieszanego i szukasz sprawdzonych
				fachowców, jesteśmy do Twojej dyspozycji! Oferujemy kompleksowe usługi
				obejmujące montaż płyt GK na sufit, wykonanie konstrukcji sufitów
				podwieszanych jednopoziomowych i dwupoziomowych oraz instalację sufitów
				podwieszanych LED. Niezależnie od tego, czy interesuje Cię sufit
				podwieszany krzyżowy, klasyczna wersja pojedyncza, czy nowoczesne
				rozwiązanie do salonu lub kuchni – zapewniamy profesjonalne wykonanie i
				solidne materiały.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
