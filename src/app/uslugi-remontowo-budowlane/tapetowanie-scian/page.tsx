import React from 'react';
import backgroundImage from '../../../assets/img/tapetowanie-scian.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/tapeta-do-kuchni.webp';
import image2 from '../../../assets/img/tapeta-winylowa.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/tapetowanie-scian',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
	},
	name: 'Usługi tapetowania ścian - profesjonalne klejenie i układanie tapet',
	description:
		'Oferujemy usługi tapetowania ścian, obejmujące precyzyjne klejenie i fachowe układanie tapet. Zadbaj o estetykę oraz trwałość swojego wnętrza.',
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
			'https://g.co/kgs/2t1nJxJ',
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
	serviceType: 'Tapetowanie, klejenie tapet, układanie tapet',
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi tapetowania',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Precyzyjne klejenie i układanie tapet na ścianach',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Tapetowanie wnętrz w mieszkaniach i domach',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Fachowe doradztwo i przygotowanie podłoża do tapetowania',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Tapetowanie ścian - kompleksowe usługi tapetowania wnętrz',
	description:
		'Oferujemy usługi tapetowania ścian, obejmujące precyzyjne klejenie i fachowe układanie tapet. Zadbaj o estetykę oraz trwałość swojego wnętrza.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/tapetowanie-scian',
	},

	openGraph: {
		title: 'Tapetowanie ścian - kompleksowe usługi tapetowania wnętrz',
		description:
			'Oferujemy usługi tapetowania ścian, obejmujące precyzyjne klejenie i fachowe układanie tapet. Zadbaj o estetykę oraz trwałość swojego wnętrza.',
		url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/tapetowanie-scian',
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
		title: 'Tapety do kuchni zamiast płytek',
		text: (
			<>
				<span>
					Coraz więcej osób odkrywa zalety tapet do kuchni jako alternatywy dla
					tradycyjnych płytek. To rozwiązanie jest nie tylko bardziej
					ekonomiczne, ale również oferuje niespotykaną elastyczność w aranżacji
					wnętrza. Stosujemy wysokiej jakości tapety zmywalne, które gwarantują
					łatwość w utrzymaniu czystości oraz niezawodną odporność na wilgoć i
					zabrudzenia, tak kluczowe w przestrzeni kuchennej. Dzięki
					zaawansowanym technologiom, współczesne tapety kuchenne zachowują
					swoje estetyczne walory przez długi czas, nie ustępując trwałością
					tradycyjnym kafelkom. Wybierając tapety do kuchni, zyskujesz nie tylko
					oszczędność, ale również możliwość szybkiej i efektownej zmiany
					dekoracji, dopasowując wygląd ścian do aktualnych trendów i
					indywidualnych preferencji.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Zbywalna tapeta w kuchni zamiast płytek',
	},
	{
		title: 'Tapety wodoodporne do łazienki',
		text: (
			<>
				<span>
					W łazienkach idealnie sprawdzają się tapety wodoodporne, które dzięki
					specjalnej powłoce wykazują wysoką odporność na wilgoć oraz pleśń,
					zapewniając trwałe i estetyczne wykończenie. Oferujemy tapety winylowe
					do łazienki, które nie tylko łatwo się czyści, ale także utrzymują
					elegancki wygląd przez wiele lat. To doskonałe rozwiązanie dla osób
					pragnących odmienić wygląd swojej łazienki bez konieczności kosztownej
					wymiany płytek – tapety te łączą nowoczesny design z praktycznością i
					łatwością utrzymania czystości, stając się świetnym wyborem dla
					wymagających klientów.
				</span>
				<span>
					Dodatkowo, nasze produkty gwarantują długotrwałą satysfakcję i
					minimalne koszty konserwacji, co czyni je atrakcyjnym rozwiązaniem dla
					każdego domu. Jeśli planujesz{' '}
					<Link href={'/wykonczenia-wnetrz-mieszkan-domow/remont-lazienki'}>
						remont łazienki
					</Link>
					, nasze tapety wodoodporne pomogą Ci stworzyć przestrzeń, która zyska
					nowy, świeży wygląd i podkreśli jej unikalny charakter oraz styl.
				</span>
			</>
		),
	},
	{
		title: 'Tapety winylowe na flizelinie',
		text: (
			<>
				<span>
					Jednym z najchętniej wybieranych rozwiązań są tapety winylowe na
					flizelinie, które łączą estetykę z łatwością montażu. Dzięki swojej
					odporności na wilgoć i zabrudzenia doskonale sprawdzają się w
					kuchniach, łazienkach oraz przedpokojach, gwarantując nie tylko
					efektowny wygląd, ale także funkcjonalność. Wykorzystanie technologii
					flizelinowej sprawia, że proces klejenia jest szybki i wygodny, a
					powierzchnia ściany pozostaje gładka i jednolita, co znacząco ułatwia
					utrzymanie czystości i konserwację pomieszczeń.
				</span>
				<span>
					Jeśli zależy Ci na kompleksowym wykończeniu wnętrza, warto rozważyć
					również nasze{' '}
					<Link href='/tynki-dekoracyjne-i-wykonczenia-scian'>
						dekoracje ścian
					</Link>
					, które idealnie dopełnią aranżację, nadając przestrzeni spójny i
					nowoczesny charakter. Dzięki takiemu podejściu możesz cieszyć się
					harmonijnym wyglądem wnętrza, w którym każdy detal został dopracowany.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Tapeta winylowa na flizelinie',
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
				title='Tapetowanie ścian'
				text='Tapetowanie ścian to szybki i efektowny sposób na metamorfozę każdego wnętrza. Oferujemy profesjonalne usługi tapetowania, od klasycznych wzorów po nowoczesne fototapety. Nasi specjaliści pomogą Ci wybrać idealne rozwiązanie, dopasowane do Twojego stylu i potrzeb. Zapewniamy precyzję wykonania i trwałość efektu.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				heading='tapetowanie ścian'
				underline_word='Profesjonalne'
				text='W oparciu o wieloletnie doświadczenie oferujemy kompleksowe usługi tapetowania, obejmujące staranne przygotowanie podłoża, precyzyjne klejenie oraz fachowe układanie tapet, które nadają wnętrzom niepowtarzalny charakter. Nasi eksperci doradzą Ci, które rozwiązania będą najbardziej optymalne – od klasycznych wzorów, przez nowoczesne fototapety, aż po specjalistyczne tapety do kuchni i łazienki, gdzie szczególnie ważna jest odporność na wilgoć. Wykorzystujemy sprawdzone materiały oraz najnowsze techniki montażu, co gwarantuje trwałość, estetykę oraz łatwość utrzymania czystości. Nasz zespół dba o każdy detal – od starannego przygotowania ścian, przez profesjonalne wykonanie usługi, aż po finalne wykończenie, które podkreśla elegancki wygląd pomieszczenia. Dzięki naszym usługom tapetowania Twoje wnętrza zyskają świeży, nowoczesny wygląd, odzwierciedlający Twój indywidualny styl i spełniający najwyższe standardy. Skontaktuj się z nami, aby umówić wycenę i poznać szczegóły oferty – pomożemy Ci stworzyć wymarzone wnętrze dzięki profesjonalnemu tapetowaniu ścian.'
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Tapety
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						włókna szklanego
					</h3>
					<p className={styles.linkingText}>
						Tapety z włókna szklanego to idealny wybór do miejsc narażonych na
						intensywne użytkowanie, dzięki swojej niezwykłej wytrzymałości i
						odporności na ścieranie. Doskonale sprawdzają się w biurach,
						korytarzach oraz pomieszczeniach o wysokiej wilgotności, gdzie
						tradycyjne tapety szybko ulegają zniszczeniu. Oferujemy zarówno
						tapety do malowania z włókna szklanego, umożliwiające indywidualne
						dostosowanie kolorystyki i stylu wnętrza, jak i klasyczne wzory,
						które łączą estetykę z wyjątkową odpornością na uszkodzenia
						mechaniczne.
						<span>
							Decydując się na nasze rozwiązania, zyskujesz produkt o długiej
							żywotności, łatwy w utrzymaniu i odporny na codzienne wyzwania –
							idealny zarówno dla przestrzeni komercyjnych, jak i mieszkalnych.
							Dla kompleksowego wykończenia wnętrz zachęcamy do zapoznania się z
							naszą ofertą{' '}
							<Link
								href={
									'/wykonczenia-wnetrz-mieszkan-domow/wykonczenia-pod-klucz'
								}>
								wykończenia wnętrz
							</Link>
							, która pozwala stworzyć spójną i elegancką przestrzeń.
						</span>
					</p>

					<CategoryFeatures title='Dlaczego warto wybrać nasze usługi tapetowania?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w klejeniu tapet?'
				textClass={styles.contactText}>
				Skontaktuj się z nami, aby omówić szczegóły prac tapetowania w Twoim
				regionie. Nasz doświadczony zespół specjalizuje się w kompleksowym
				tapetowaniu wnętrz, oferując szeroki wybór tapet – od klasycznych wzorów
				po nowoczesne tapety winylowe na flizelinie, które gwarantują łatwość
				montażu oraz trwałość wykończenia. Proponujemy także tapety wodoodporne,
				idealne do kuchni i łazienek, zapewniające estetyczne wykończenie nawet
				w pomieszczeniach o wysokiej wilgotności. Dzięki indywidualnemu
				podejściu doradzimy, które rozwiązania będą najlepsze dla Twoich ścian,
				tworząc efekt, który podkreśli unikalny charakter Twojego wnętrza.
				Zaufaj naszym usługom tapetowania i ciesz się nowym, świeżym wyglądem,
				który odmieni Twoje mieszkanie.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
