import React from 'react';
import backgroundImage from '../../assets/img/wykonczenia-scian-beton.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import { CategoryAbout } from '@/sections/Category_About/CategoryAbout';
import { decorationsLinks } from '@/data/navLinks';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';

import image1 from '../../assets/img/dekoracja-sciany-z-telewizorem.webp';
import image2 from '../../assets/img/traweryn-na-sciane.webp';
import image3 from '../../assets/img/beton-architektoniczny.webp';
import image4 from '../../assets/img/techniki-dekoracyjne-scian.webp';
import { rubik } from '../layout';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	'@id': 'https://pro-wnetrze.pl/tynki-dekoracyjne-i-wykonczenia-scian',
	name: 'Techniki dekoracyjne | nowoczesne wykończenia i dekoracje ścian',
	description:
		'Odkryj techniki dekoracyjne, które nadadzą wnętrzom wyjątkowy styl. Tynki dekoracyjne, tynki strukturalne, dekoracje ścian i inne nowoczesne rozwiązania dla Twojego domu.',
	url: 'https://pro-wnetrze.pl/tynki-dekoracyjne-i-wykonczenia-scian',
};

export const metadata: Metadata = {
	title: 'Techniki dekoracyjne | nowoczesne wykończenia i dekoracje ścian',
	description:
		'Techniki dekoracyjne, które nadadzą wnętrzom wyjątkowy styl. Tynki dekoracyjne, strukturalne i inne nowoczesne rozwiązania dla Twojego domu.',
	openGraph: {
		title: 'Techniki dekoracyjne | nowoczesne wykończenia i dekoracje ścian',
		description:
			'Techniki dekoracyjne, które nadadzą wnętrzom wyjątkowy styl. Tynki dekoracyjne, strukturalne i inne nowoczesne rozwiązania dla Twojego domu.',
		url: 'https://pro-wnetrze.pl/tynki-dekoracyjne-i-wykonczenia-scian',
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
	alternates: {
		canonical: 'https://pro-wnetrze.pl/tynki-dekoracyjne-i-wykonczenia-scian',
	},
};

const CategoryPage = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<ServiceStart
				title='Dekoracje ścian'
				text='Ściany to nie tylko tło – to kluczowy element aranżacji wnętrza, który nadaje mu charakter. Oferujemy szeroki wybór technik dekoracyjnych, takich jak tynki dekoracyjne, tynki strukturalne i modne dekoracje ścian, które podkreślą styl Twojego wnętrza. Niezależnie od tego, czy marzysz o surowym wyglądzie imitacji betonu, eleganckich stiukach, czy oryginalnych fakturach, pomożemy stworzyć wyjątkową przestrzeń dopasowaną do Twojego gustu.'
				bgImage={backgroundImage}
			/>

			<CategoryAbout
				underline_word='Tynki dekoracyjne'
				heading={<>dopasowane do Twojego wnętrza</>}
				text={
					<>
						Zajmujemy się kompleksowym wykończeniem wnętrz, oferując tynkowanie
						dekoracyjne, które dodają stylu i wyjątkowego wyglądu każdej
						przestrzeni. W naszej ofercie znajdziesz tynk dekoracyjny, który
						podkreśla elegancję wnętrza i tworzy trwałe, estetyczne wykończenie.
						Tynk dekoracyjny wewnętrzny pozwala uzyskać unikalne faktury i
						wzory, co nada Twoim ścianom głębi i charakteru. Podążamy za
						aktualnymi trendami, dlatego proponujemy najmodniejsze tynki
						dekoracyjne, które sprawdzą się zarówno w nowoczesnych, jak i
						klasycznych aranżacjach.
					</>
				}
				graphicTitle='Nasza oferta dekoracji ścian '
				graphicText='Oferujemy szeroki wybór dekoracji ścian, które nadadzą wnętrzom unikalny charakter i wyjątkowy styl. Wśród naszych propozycji znajdziesz ściany dekoracyjne, które doskonale sprawdzą się jako dekoracja ściany z telewizorem lub efektowny akcent w salonie. Jeśli szukasz nowoczesnych rozwiązań, postaw na modne dekoracje na ścianę, które podkreślą wyjątkowy klimat Twojego wnętrza. Każde rozwiązanie łączy estetykę z trwałością, dzięki czemu efekt cieszy oko przez lata.'
				linkArr={decorationsLinks}
				img1={image1}
				img2={image2}
				img3={image3}
				img4={image4}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>Nadaj wnętrzu unikalny styl</h3>
					<p className={styles.linkingText}>
						Dekoracje ścian to kluczowy element aranżacji, który pozwala
						stworzyć niepowtarzalny klimat w każdym wnętrzu. Jeśli chcesz nadać
						charakteru przestrzeni w której mieszkasz, sprawdź co jeszcze
						oferujemy w zakresie{' '}
						<Link href={'/wykonczenia-wnetrz-mieszkan-domow'}>
							wykończenia wnętrz
						</Link>
						. Jeśli planujesz większą metamorfozę mieszkania lub domu,
						skorzystaj z naszych{' '}
						<Link href={'/uslugi-remontowo-budowlane'}> usług remontowych</Link>
						, dzięki którym całkowicie odmienisz swoje wnętrze – od modernizacji
						ścian po kompleksowe prace wykończeniowe. Bez względu na zakres
						zmian, gwarantujemy precyzję, trwałość i efekt dopasowany do Twoich
						oczekiwań.
					</p>

					<CategoryFeatures title='Dlaczego warto powierzyc nam dekoracje ścian?' />
				</Wrapper>
			</section>

			<section className={styles.labelSection}>
				<Wrapper className={styles.wrapper}>
					<h2 className={rubik.className}>
						<span>Tynki</span>
						<span> Dekoracyjne</span>
						<span> stylowe wykończenia ścian</span>
					</h2>

					<p>
						Specjalizujemy się w tynkach dekoracyjnych i nowoczesnych
						dekoracjach ścian, które nadają wnętrzom niepowtarzalny styl i
						charakter. Niezależnie od tego, czy chcesz subtelnie podkreślić
						aranżację, czy stworzyć efektowną ozdobę ściany, nasze rozwiązania
						pozwolą Ci osiągnąć zamierzony efekt.
					</p>
				</Wrapper>
			</section>

			<CategoryContact helpWithHeading='w wykończeniu mieszkania?'>
				Skontaktuj się z nami, aby poznać szczegóły oferty na usługi remontowo
				budowlane w Twoim regionie. Z przyjemnością pomożemy Ci w realizacji
				planów remontowych i wykończeniowych – od pierwszych konsultacji aż po
				odbiór gotowego wnętrza.
			</CategoryContact>
		</>
	);
};
export default CategoryPage;
