import React from 'react';
import backgroundImage from '../../../assets/img/malowanie-scian.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/malowanie-scian-i-sufitów.webp';
import image2 from '../../../assets/img/malowanie-scian-natryskowo.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/malowanie-scian',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
	},
	name: 'Malowanie ścian - kompleksowe usługi malarskie',
	description:
		'Oferujemy usługi malowania ścian, sufitów i malowanie natryskowe. Skorzystaj z naszego doświadczenia i nowoczesnych technik malarskich.',
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
	serviceType: 'Malowanie ścian, malowanie sufitów, malowanie natryskowe',
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi malarskie',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Malowanie ścian w mieszkaniach i domach',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Malowanie sufitów – precyzyjne wykończenie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Malowanie natryskowe – szybkie i efektowne',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Malowanie ścian - kompleksowe usługi malarskie',
	description:
		'Oferujemy usługi malowania ścian, sufitów i malowanie natryskowe. Skorzystaj z naszego doświadczenia i nowoczesnych technik malarskich.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/malowanie-scian',
	},

	openGraph: {
		title: 'Malowanie ścian - kompleksowe usługi malarskie',
		description:
			'Oferujemy usługi malowania ścian, sufitów i malowanie natryskowe. Skorzystaj z naszego doświadczenia i nowoczesnych technik malarskich.',
		url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane/malowanie-scian',
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
		title: 'Malowanie ścian - trwały charakter wnętrza',
		text: (
			<>
				<span>
					Malowanie ścian pozwala w prosty sposób zmienić wygląd całego wnętrza
					– od pojedynczego pokoju po całe mieszkanie. Zajmujemy się nie tylko
					nakładaniem farby, ale także odpowiednim przygotowaniem podłoża:
					wypełnianiem ubytków, szpachlowaniem i gruntowaniem. Dzięki temu masz
					pewność, że koszt malowania ścian przekłada się na trwały i estetyczny
					rezultat. Wykorzystujemy sprawdzone techniki i profesjonalne
					narzędzia, co gwarantuje równomierne krycie i brak nieestetycznych
					smug. Nasz zespół służy pomocą w doborze kolorów oraz rodzaju farby,
					biorąc pod uwagę zarówno walory estetyczne, jak i funkcjonalne (np.
					malowanie pokoi o podwyższonej wilgotności). Zadbaj o malowanie ścian
					w swoim wnętrzu i ciesz się odmienioną przestrzenią na lata.
				</span>
				<span>
					Jeśli chcesz wzbogacić swoje wnętrze o nowoczesne akcenty, zachęcamy
					również do zapoznania się z naszymi{' '}
					<Link href='/tynki-dekoracyjne'>
						technikami dekoracyjnymi
					</Link>{' '}
					ścian, które mogą stanowić doskonałe uzupełnienie tradycyjnego
					malowania. Zadbaj o malowanie ścian w swoim wnętrzu i ciesz się
					odmienioną przestrzenią na lata.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Malowanie mieszkania przy pomocy wałka',
	},
	{
		title: 'Malowanie sufitów',
		text: (
			<>
				<span>
					Malowanie sufitów wymaga szczególnej staranności, ponieważ wszelkie
					niedoskonałości są tu wyjątkowo widoczne. Oferujemy precyzyjne
					malowanie sufitu, rozpoczynając od zabezpieczenia ścian i podłóg przed
					zachlapaniem. Starannie przygotowujemy podłoże, usuwamy ewentualne
					nierówności i dobieramy farby o odpowiednich właściwościach, co
					szczególnie ważne jest przy suficie w pomieszczeniach narażonych na
					wilgoć lub częste zabrudzenia. Dzięki naszemu doświadczeniu malowanie
					przy suficie przebiega sprawnie i pozwala osiągnąć idealnie gładką,
					jednolitą powierzchnię. Chętnie doradzimy też w kwestii wyboru koloru,
					by optycznie powiększyć przestrzeń lub nadać jej przytulnego
					charakteru. Jeśli planujesz kompleksowe prace wykończeniowe,
					zapraszamy do zapoznania się z naszą ofertą{' '}
					<Link href='/uslugi-remontowo-budowlane/sufity-podwieszane'>
						sufitów podwieszanych
					</Link>{' '}
					– nowoczesnego rozwiązania, które w połączeniu z malowaniem sufitu
					tworzy spójną i efektowną aranżację wnętrza.
				</span>
			</>
		),
	},
	{
		title: 'Malowanie natryskowe',
		text: (
			<>
				<span>
					Malowanie natryskowe to innowacyjna metoda, która skraca czas pracy i
					zapewnia wyjątkowo gładkie wykończenie. Wykorzystując agregat do
					malowania ścian, farba rozpylana jest równomiernie w formie delikatnej
					mgiełki, co pozwala dotrzeć do trudno dostępnych miejsc i uniknąć
					smug. Natryskowe malowanie ścian sprawdza się szczególnie w dużych
					pomieszczeniach, gdzie tradycyjne malowanie wałkiem byłoby
					czasochłonne, oraz w miejscach o niestandardowych kształtach.
					Malowanie agregatem gwarantuje wysoką jakość wykończenia, a przy tym
					pozwala na precyzyjne pokrycie sufitu i ścian w krótkim czasie. Jeśli
					zależy Ci na perfekcyjnym efekcie i szybkim terminie realizacji,
					malowanie natryskowe ścian będzie doskonałym rozwiązaniem.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'malowanie ścian natryskowo',
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
				title='Malowanie ścian'
				text='Malowanie ścian to jeden z najprostszych i najbardziej efektownych sposobów na odświeżenie wnętrza oraz nadanie mu nowego charakteru. Nasze usługi malarskie obejmują kompleksowe przygotowanie powierzchni, fachowe doradztwo w doborze farb oraz profesjonalne wykonanie. Bez względu na to, czy planujesz malowanie mieszkania, czy chcesz jedynie odświeżyć kolor w wybranym pomieszczeniu, gwarantujemy wysoką jakość i estetyczny efekt.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Profesjonalne'
				heading='usługi malarskie'
				text='Usługi malarskie to coś więcej niż samo nałożenie farby – to kompleksowy proces, który rozpoczyna się od odpowiedniego przygotowania ścian i sufitów, a kończy na precyzyjnym wykończeniu. W ramach naszych usług malarskich oferujemy fachowe malowanie ścian, sufitów oraz innych powierzchni, zarówno w mieszkaniach, jak i w obiektach komercyjnych. Dbamy o każdy etap prac: od wyboru właściwej farby i koloru, przez szpachlowanie i gruntowanie, aż po ostateczne malowanie. Korzystamy z nowoczesnych metod, takich jak malowanie natryskowe, co pozwala osiągnąć idealnie gładką powierzchnię w krótszym czasie. Dzięki naszemu doświadczeniu i profesjonalnym narzędziom zapewniamy efekty, które spełnią oczekiwania nawet najbardziej wymagających klientów, a koszt malowania ścian będzie w pełni odzwierciedlał wysoką jakość wykonania. Skontaktuj się z nami, aby dowiedzieć się więcej i cieszyć się świeżym, estetycznym wyglądem Twojego wnętrza.'
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Koszt
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						malowania mieszkania
					</h3>
					<p className={styles.linkingText}>
						Planowanie malowania mieszkania to nie tylko kwestia wyboru koloru,
						ale przede wszystkim zrozumienie, jakie koszty wiążą się z
						kompleksową realizacją usługi. Nasza oferta opiera się na
						profesjonalnym przygotowaniu powierzchni, starannym szpachlowaniu,
						gruntowaniu oraz precyzyjnym malowaniu, co gwarantuje trwały efekt i
						estetykę na wiele lat. Dzięki wieloletniemu doświadczeniu, pomagamy
						klientom oszacować koszt malowania mieszkania w sposób przejrzysty,
						uwzględniając zarówno materiał, robociznę, jak i ewentualne prace
						dodatkowe, takie jak poprawki czy zabezpieczenie otoczenia.
						<span>
							Dla osób, które chcą stworzyć spójną aranżację wnętrza, warto
							rozważyć także dodatkowe elementy wykończenia. Na przykład, aby
							podkreślić styl ścian, możesz uzupełnić malowanie o efektywne{' '}
							<Link href='/uslugi-remontowo-budowlane/tapetowanie-scian'>
								tapetowanie ścian
							</Link>{' '}
							, które nada im niepowtarzalny charakter. Inwestycja w wysokiej
							jakości usługi malarskie i tapetowanie to gwarancja nie tylko
							atrakcyjnego wyglądu, ale również długoterminowej trwałości i
							komfortu użytkowania wnętrza. Skontaktuj się z nami, aby uzyskać
							szczegółową wycenę i dowiedzieć się, jak zoptymalizować koszty,
							nie rezygnując z profesjonalizmu i jakości wykonania.
						</span>
					</p>

					<CategoryFeatures title='Dlaczego warto wybrać nasze usługi malarskie?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w malowaniu wnętrz?'
				textClass={styles.contactText}>
				Potrzebujesz pomocy w malowaniu wnętrz? Nasz zespół specjalistów oferuje
				kompleksowe usługi malarskie, w tym profesjonalne malowanie ścian i
				sufitów oraz nowoczesne metody, takie jak malowanie natryskowe. Dzięki
				precyzyjnemu przygotowaniu powierzchni i doborowi wysokiej jakości farb,
				Twoje wnętrza zyskają świeży, trwały i estetyczny wygląd. Postaw na
				doświadczenie i innowacyjne rozwiązania, które podnoszą komfort i
				wartość Twojej przestrzeni.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
