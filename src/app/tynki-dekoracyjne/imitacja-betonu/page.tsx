import React from 'react';
import backgroundImage from '../../../assets/img/imitacja-betonu.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/beton-architektoniczny-na-scianie.webp';
import image2 from '../../../assets/img/beton-architektoniczny-plyty.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/tynki-dekoracyjne/imitacja-betonu',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/tynki-dekoracyjne',
	},
	name: 'Imitacja betonu na ścianie – beton dekoracyjny',
	description:
		'Chcesz uzyskać imitację betonu na ścianie? Oferujemy beton dekoracyjny, farby imitujące beton i płyty betonowe. Nadaj wnętrzu industrialny charakter.',
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
		'Imitacja betonu na ścianie',
		'Beton dekoracyjny na ścianę',
		'Ściana z betonu architektonicznego',
		'Farba imitująca beton – efekt surowego betonu',
		'Płyty betonowe na ścianę – trwałe i stylowe rozwiązanie',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi wykończenia ścian imitacją betonu',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Imitacja betonu na ścianie – nowoczesne rozwiązania dekoracyjne',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Beton dekoracyjny na ścianę – industrialny wygląd wnętrza',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Ściana z betonu architektonicznego – elegancka i surowa estetyka',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Farba imitująca beton – szybki sposób na efekt betonowej ściany',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Płyty betonowe na ścianę – trwałe i designerskie rozwiązanie',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Imitacja betonu na ścianie – beton dekoracyjny',
	description:
		'Chcesz uzyskać imitację betonu na ścianie? Oferujemy beton dekoracyjny, farby imitujące beton i płyty betonowe. Nadaj wnętrzu industrialny charakter.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/tynki-dekoracyjne/imitacja-betonu',
	},

	openGraph: {
		title: 'Imitacja betonu na ścianie – beton dekoracyjny',
		description:
			'Chcesz uzyskać imitację betonu na ścianie? Oferujemy beton dekoracyjny, farby imitujące beton i płyty betonowe. Nadaj wnętrzu industrialny charakter.',
		url: 'https://pro-wnetrze.pl/tynki-dekoracyjne/imitacja-betonu',
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
		title: 'Beton architektoniczny – estetyka w stylu loftowym',
		text: (
			<>
				<span>
					Beton architektoniczny to idealne rozwiązanie dla osób ceniących
					minimalizm, surową elegancję oraz industrialny charakter wnętrz.
					Ściana z betonu architektonicznego może być wykonana z gotowych płyt
					betonowych lub przy użyciu specjalnych tynków o strukturze betonu,
					które pozwalają uzyskać autentyczny efekt, bez konieczności stosowania
					ciężkich elementów konstrukcyjnych.
				</span>
				<span>
					Tego typu wykończenie doskonale sprawdza się w przestrzeniach
					loftowych, nowoczesnych apartamentach oraz wnętrzach komercyjnych,
					nadając im niepowtarzalny styl. Alternatywą dla surowego betonu może
					być{' '}
					<Link href='/tynki-dekoracyjne/trawertyn'>
						trawertyn
					</Link>
					, który zachwyca naturalną fakturą i subtelnymi przejściami
					kolorystycznymi. To rozwiązanie pozwala łączyć elegancję kamienia z
					trwałością i wytrzymałością, co czyni go doskonałym wyborem do
					klasycznych i nowoczesnych aranżacji.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Beton architektoniczny na ścianie',
	},
	{
		title: 'Jak uzyskać efekt betonu na ściani? Sprawdzone metody',
		text: (
			<>
				<span>
					Efekt betonu na ścianie można osiągnąć na kilka sposobów, w zależności
					od oczekiwanego wyglądu, budżetu i czasu realizacji. Jednym z
					najprostszych i najczęściej stosowanych rozwiązań jest farba imitująca
					beton, która pozwala uzyskać surową, betonową fakturę przy stosunkowo
					niewielkim nakładzie pracy. Specjalna mieszanka pigmentów i spoiw
					sprawia, że ściana nabiera naturalnego wyglądu betonu dekoracyjnego, a
					odpowiednia aplikacja pozwala na stworzenie efektu gładkiej lub
					bardziej chropowatej powierzchni.
				</span>
				<span>
					Dla osób poszukujących bardziej wyrafinowanego wykończenia świetnym
					wyborem jest{' '}
					<Link href='/tynki-dekoracyjne/glinka-wenecka'>
						glinka wenecka
					</Link>
					, która łączy efekt betonu z delikatnym połyskiem. Dzięki swojej
					unikalnej strukturze umożliwia subtelne przejścia tonalne, co sprawia,
					że powierzchnia wygląda głęboko i naturalnie. Jest to idealne
					rozwiązanie dla tych, którzy chcą połączyć nowoczesny industrialny
					styl z elegancją i lekkością wykończenia.
				</span>
				<span>
					Innym rozwiązaniem są płyty betonowe na ścianę, które pozwalają
					uzyskać wyjątkowo realistyczny wygląd betonu, jednocześnie zapewniając
					wysoką trwałość i odporność na uszkodzenia. Alternatywą dla ciężkich
					płyt są tynki strukturalne, które można dopasować do indywidualnych
					preferencji, tworząc unikalną strukturę betonu na ścianie.
				</span>
				<span>
					Wybór odpowiedniej metody zależy od efektu, jaki chcesz osiągnąć, oraz
					od charakteru wnętrza. Bez względu na wybraną technikę, imitacja
					betonu na ścianie to doskonały sposób na wprowadzenie nowoczesnej i
					surowej estetyki do każdego pomieszczenia.
				</span>
			</>
		),
	},
	{
		title: 'Płyty betonowe na ścianę – trwałość i oryginalny design',
		text: (
			<>
				<span>
					Płyty betonowe na ścianę to świetny wybór dla tych, którzy chcą
					uzyskać wytrzymałą i efektowną powierzchnię. Ich montaż jest szybki, a
					efekt surowego betonu doskonale wpisuje się w industrialne aranżacje
					wnętrz.
				</span>
				<span>
					Tego typu rozwiązania sprawdzają się w loftach, nowoczesnych
					apartamentach, ale także w przestrzeniach komercyjnych, nadając im
					unikalnego charakteru. Beton architektoniczny w formie płyt betonowych
					to wybór dla osób poszukujących trwałości i wyjątkowego wyglądu.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Imitacja betonu w formie płyt',
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
				title='Imitacja betonu'
				text='Imitacja betonu na ścianie to sposób na nowoczesne i industrialne wnętrze bez konieczności stosowania prawdziwego betonu. Dzięki betonowi dekoracyjnemu na ścianę, farbie imitującej beton czy płytom betonowym można uzyskać surowy, elegancki efekt dopasowany do każdego wnętrza.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Imitacja'
				heading='betonu na ścianie - surowa elegancja w nowoczesnym stylu'
				text={
					<>
						<span>
							Imitacja betonu to jedno z najpopularniejszych rozwiązań
							stosowanych w nowoczesnych wnętrzach, szczególnie tych
							inspirowanych stylem industrialnym i loftowym. Dzięki zastosowaniu
							betonu dekoracyjnego na ścianę, można uzyskać surowy,
							minimalistyczny wygląd, który jednocześnie podkreśla elegancję i
							nowoczesny charakter wnętrza. Tego rodzaju wykończenie doskonale
							sprawdza się zarówno w salonach i sypialniach, jak i w biurach czy
							restauracjach, nadając im unikalny klimat.
						</span>
						<span>
							Jednym z największych atutów imitacji betonu jest jej
							wszechstronność – może być stosowana zarówno na całych ścianach,
							jak i jako pojedynczy akcent dekoracyjny. Popularnym rozwiązaniem
							jest łączenie betonu dekoracyjnego na ścianę z naturalnym drewnem,
							metalem lub szkłem, co pozwala uzyskać wyjątkowe i kontrastowe
							zestawienia.
						</span>
						<span>
							Alternatywą dla imitacji betonu są{' '}
							<Link href='/tynki-dekoracyjne'>
								tynki dekoracyjne
							</Link>
							, które pozwalają uzyskać równie interesujące efekty wizualne.
							Dzięki nim można wprowadzić do wnętrza niepowtarzalną strukturę i
							grę światłocieni, tworząc głębię i wyrazistość powierzchni. Warto
							rozważyć również zastosowanie glinki weneckiej, która łączy
							elegancki wygląd z subtelną teksturą, dając efekt matowego lub
							lekko połyskującego betonu.
						</span>
						<span>
							Dzięki odpowiedniemu dobraniu materiałów i technik aplikacji,
							beton dekoracyjny na ścianę może być dostosowany do różnych stylów
							aranżacyjnych – od surowych, industrialnych wnętrz po nowoczesne,
							minimalistyczne przestrzenie z delikatnymi akcentami loftowymi.
							Niezależnie od wybranego rozwiązania, tego typu wykończenie nadaje
							wnętrzu nowoczesnego charakteru i sprawia, że staje się ono
							bardziej stylowe i funkcjonalne.
						</span>
					</>
				}
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Farba
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						imitująca beton – szybki sposób na industrialny efekt
					</h3>
					<p className={styles.linkingText}>
						<span>
							Jeśli chcesz uzyskać efekt betonu na ścianie bez konieczności
							przeprowadzania skomplikowanych i kosztownych prac remontowych,
							farba imitująca beton będzie idealnym wyborem. Dzięki swojej
							unikalnej strukturze i właściwościom, pozwala na wierne
							odwzorowanie wyglądu surowego betonu dekoracyjnego na ścianę,
							nadając wnętrzu nowoczesny, industrialny charakter.
						</span>
						<span>
							Aplikacja tego rodzaju farby jest prosta i nie wymaga
							zaawansowanych umiejętności – wystarczy odpowiednie przygotowanie
							podłoża oraz precyzyjne nakładanie, aby uzyskać efekt prawdziwego
							betonu z charakterystycznymi smugami i nieregularną teksturą.
							Dodatkowo można ją łączyć z innymi metodami dekoracyjnymi, takimi
							jak płyty betonowe na ścianę czy tynki strukturalne, aby uzyskać
							jeszcze bardziej realistyczny wygląd.
						</span>
						<span>
							Doskonałym sposobem na podkreślenie efektu betonu jest także
							odpowiednie malowanie ścian. Stosując farby w odcieniach szarości
							lub beżu, można uzyskać głębię i dodatkowy efekt przestrzenny,
							który jeszcze bardziej podkreśli surowy styl wnętrza. Więcej
							informacji o profesjonalnych technikach malarskich znajdziesz na
							naszej stronie dotyczącej{' '}
							<Link href='/uslugi-remontowo-budowlane/malowanie-scian'>
								malowania ścian
							</Link>
							.
						</span>
						<span>
							Łącząc farbę imitującą beton z elementami drewnianymi, metalowymi
							lub szklanymi, można stworzyć unikalną aranżację, która świetnie
							sprawdzi się zarówno w salonie, biurze, jak i przestrzeniach
							komercyjnych. To szybki i efektywny sposób na osiągnięcie
							surowego, ale eleganckiego wyglądu wnętrza, bez konieczności
							stosowania ciężkich i drogich materiałów budowlanych.
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zlecić wykonanie imitacji betonu?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w uzyskaniu imitacji betonu?'
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
