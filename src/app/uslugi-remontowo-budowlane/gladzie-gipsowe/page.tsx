import React from 'react';
import backgroundImage from '../../../assets/img/gladzie-gipsowe.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/gipsowanie-scian.webp';
import image2 from '../../../assets/img/kładzenie-gladzi-na-mokro.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/gladzie-gipsowe#service',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
	},
	name: 'Gładzie gipsowe - fachowe kładzenie gładzi',
	description:
		'Kompleksowe usługi gipsowania ścian i sufitów, w tym precyzyjne szpachlowanie łączeń płyt gipsowych oraz staranne nakładanie gładzi.',
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	serviceType: 'Gładzie gipsowe, gipsowanie ścian, gipsowanie sufitów',
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi gipsowania',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Gipsowanie ścian – precyzyjne przygotowanie i nakładanie gładzi',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Gipsowanie sufitów – idealnie gładkie wykończenie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Szpachlowanie łączeń płyt gipsowych – perfekcyjne wykończenie powierzchni',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Gładzie gipsowe - fachowe kładzenie gładzi',
	description:
		'Kompleksowe usługi gipsowania ścian i sufitów, w tym precyzyjne szpachlowanie łączeń płyt gipsowych oraz staranne nakładanie gładzi.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/gladzie-gipsowe',
	},

	openGraph: {
		title: 'Gładzie gipsowe - fachowe kładzenie gładzi',
		description:
			'Kompleksowe usługi gipsowania ścian i sufitów, w tym precyzyjne szpachlowanie łączeń płyt gipsowych oraz staranne nakładanie gładzi.',
		url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/gladzie-gipsowe',
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
		title: 'Gipsowanie ścian i sufitów – solidna podstawa wykończenia',
		text: (
			<>
				<span>
					Profesjonalne gipsowanie ścian i sufitów stanowi fundament wysokiej
					jakości wykończenia wnętrza. Nasi specjaliści przykładają szczególną
					wagę do każdego etapu prac – zaczynając od dokładnego przygotowania
					podłoża, poprzez precyzyjne szpachlowanie łączeń płyt gipsowych, aż po
					staranne nakładanie gładzi gipsowej, która doskonale przylega i tworzy
					równą, estetyczną powierzchnię. Gipsowanie sufitów wymaga wyjątkowej
					precyzji, ponieważ nawet najmniejsze nierówności są tu wyraźnie
					widoczne, dlatego nasi fachowcy stosują nowoczesne techniki, aby
					zapewnić idealnie gładki efekt. Dzięki naszemu doświadczeniu i
					dbałości o detale zyskasz trwały rezultat, który nie tylko podniesie
					walory estetyczne Twojego wnętrza, ale również stworzy doskonałą bazę
					pod dalsze prace wykończeniowe, takie jak{' '}
					<Link href={'/uslugi-remontowo-budowlane/malowanie-scian'}>
						malowanie
					</Link>{' '}
					czy{' '}
					<Link href={'/uslugi-remontowo-budowlane/tapetowanie-scian'}>
						tapetowanie
					</Link>
					.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Szpachlowanie łączeń płyt GK',
	},
	{
		title: 'Gładzie bezpyłowe - czysta i szybka metoda',
		text: (
			<>
				<span>
					Gładzie bezpyłowe to innowacyjne rozwiązanie, które eliminuje
					uciążliwy pył powstający przy tradycyjnym szlifowaniu, co znacząco
					poprawia komfort pracy oraz przyspiesza proces wykończeniowy.
					Wykorzystujemy gładź bezpyłową, która pozwala osiągnąć idealnie gładką
					powierzchnię bez konieczności pracochłonnego ścierania, dzięki czemu
					prace wykończeniowe przebiegają znacznie szybciej i czysto. Ta metoda
					gwarantuje, że pomieszczenia mogą być użytkowane niemal natychmiast po
					zakończeniu prac, co jest szczególnie istotne przy remontach i
					modernizacjach. Dodatkowo, stosowanie gładzi bezpyłowej zapewnia
					precyzyjne wykończenie, minimalizując straty materiału i poprawiając
					trwałość powierzchni. Dzięki tej technologii, którą stosujemy w ramach
					naszych kompleksowych usług wykończeniowych, klienci cieszą się nie
					tylko estetycznym, ale i funkcjonalnym efektem, który idealnie
					przygotowuje ściany pod dalsze prace, takie jak montaż dekoracyjnych
					akcentów czy zaawansowane{' '}
					<Link href={'/tynki-dekoracyjne'}>
						techniki wykończeniowe
					</Link>
					.
				</span>
			</>
		),
	},
	{
		title: 'Gładzie na mokro',
		text: (
			<>
				<span>
					Gładzie na mokro to technika wykończenia, która pozwala osiągnąć
					idealnie gładką powierzchnię bez konieczności późniejszego
					szlifowania. W tej metodzie gładź nakładana jest w stanie mokrym, co
					umożliwia natychmiastowe wyrównanie wszelkich nierówności i gwarantuje
					precyzyjne przygotowanie podłoża. Dzięki temu proces wykończeniowy
					przebiega szybciej, a bałagan związany z tradycyjnym szlifowaniem jest
					znacznie zredukowany. Metoda ta cieszy się dużym uznaniem, szczególnie
					przy dużych powierzchniach, gdzie oszczędność czasu i efektywność są
					kluczowe. Gładź na mokro zapewnia trwały i estetyczny efekt, który
					stanowi doskonałą bazę do dalszych prac, takich jak malowanie czy
					tapetowanie. Dzięki zastosowaniu tej techniki, pomieszczenia szybko
					stają się gotowe do użytkowania, a efekt końcowy podnosi walory
					estetyczne oraz funkcjonalność wnętrza.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Gładzie na mokro',
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
				title='Gładzie gipsowe'
				text='Gładzie gipsowe to jeden z najskuteczniejszych sposobów na uzyskanie idealnie gładkich ścian i sufitów. Nasze usługi obejmują zarówno wykończenie ścian gładzią gipsową, jak i wykonywanie gładzi gipsowych w nowo powstających budynkach. Dzięki zastosowaniu wysokiej jakości materiałów oraz sprawdzonych technik, gwarantujemy trwały efekt, który doskonale przygotowuje powierzchnię do malowania czy tapetowania.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Fachowe'
				heading='kładzenie gładzi'
				text='Nasza oferta w zakresie kładzenia gładzi obejmuje kompleksowe przygotowanie podłoża, staranny dobór materiałów oraz precyzyjne nakładanie gładzi, które gwarantuje idealnie równą i gładką powierzchnię. Dzięki wieloletniemu doświadczeniu i specjalistycznym narzędziom, potrafimy dostosować technikę do konkretnych wymagań pomieszczenia – zarówno w nowo powstających budynkach, jak i podczas generalnych remontów. W ramach naszych usług dokładnie oceniamy stan ścian i sufitów, usuwamy wszelkie nierówności i pęknięcia, a następnie aplikujemy gładź w taki sposób, by uzyskać maksymalną trwałość i estetykę. Dla nas liczy się nie tylko efekt końcowy, ale też zadowolenie klienta z całego procesu – dlatego stawiamy na terminowość, klarowną komunikację i porządek w miejscu pracy. Dzięki kładzeniu gładzi Twoje wnętrza zyskają doskonałą bazę pod dalsze wykończenia, takie jak malowanie czy tapetowanie. Równomierna, gładka powierzchnia ścian i sufitów nie tylko wpływa na ich wygląd, ale także ułatwia utrzymanie czystości i przedłuża żywotność innych warstw wykończeniowych. Jeśli zależy Ci na solidnym i długotrwałym efekcie, nasze usługi kładzenia gładzi pomogą Ci osiągnąć wnętrze, które będzie zachwycać swoją elegancją i starannością wykonania.'
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Szpachlowanie
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						szpachlowanie łączeń płyt gipsowych
					</h3>
					<p className={styles.linkingText}>
						W procesie wykończenia wnętrz szpachlowanie łączeń płyt gipsowych
						stanowi kluczowy etap, który gwarantuje powstanie jednolitej,
						gładkiej powierzchni, gotowej do dalszych prac, takich jak malowanie
						czy tapetowanie. Nasz zespół doświadczonych fachowców korzysta z
						nowoczesnych technologii i wysokiej jakości materiałów, co pozwala
						na precyzyjne wypełnienie wszelkich szczelin i niedoskonałości
						między płytami. Dzięki temu efekt końcowy nie tylko zachwyca
						estetyką, ale również cechuje się wyjątkową trwałością i odpornością
						na uszkodzenia mechaniczne. Profesjonalne szpachlowanie łączeń płyt
						gipsowych to inwestycja w perfekcyjne przygotowanie powierzchni,
						która podnosi wartość Twojego wnętrza oraz gwarantuje łatwość
						dalszych prac wykończeniowych. Wybierając nasze usługi, masz
						pewność, że każdy detal zostanie dopracowany, co sprawi, że Twoje
						ściany staną się idealnym tłem dla eleganckich aranżacji i
						dekoracyjnych rozwiązań.
					</p>

					<CategoryFeatures title='Dlaczego warto wybrać nas do położenia gładzi gipsowych?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w położeniu gładzi?'
				textClass={styles.contactText}>
				Potrzebujesz wsparcia przy realizacji gładzi gipsowych? Skontaktuj się z
				nami, aby dowiedzieć się, jak profesjonalne gipsowanie ścian i sufitów
				oraz precyzyjne szpachlowanie łączeń płyt gipsowych może odmienić Twoje
				wnętrze. Nasz zespół ekspertów oferuje kompleksowe doradztwo i fachowe
				wykonanie, gwarantując, że efekt końcowy zachwyci estetyką oraz
				trwałością. Pozwól nam pomóc stworzyć idealną bazę pod dalsze prace
				wykończeniowe, aby Twoje wnętrze spełniało najwyższe standardy jakości.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
