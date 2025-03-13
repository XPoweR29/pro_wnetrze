import React from 'react';
import backgroundImage from '../../assets/img/uslugi-wykonczenia-wnetrz.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import { CategoryAbout } from '@/sections/Category_About/CategoryAbout';
import { interiorDesignLinks } from '@/data/navLinks';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';

import image1 from '../../assets/img/wykonczenie-lazienki.webp';
import image2 from '../../assets/img/wykonczenie-salonu.webp';
import image3 from '../../assets/img/wykonczenie-poddasze.webp';
import image4 from '../../assets/img/wykonczenie-podlogi.webp';
import { rubik } from '../layout';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	'@id': 'https://pro-wnetrze.pl/wykonczenia-wnetrz-mieszkan-domow',
	name: 'Wykończenia wnętrz | Kompleksowe prace wykończeniowe mieszkań i domów',
	description:
		'Profesjonalne wykończenia wnętrz – kompleksowe remonty mieszkań i domów, prace wykończeniowe, stylowe aranżacje i wykończenia pod klucz.',
	url: 'https://pro-wnetrze.pl/wykonczenia-wnetrz-mieszkan-domow',
};

export const metadata: Metadata = {
	title:
		'Wykończenia wnętrz | Kompleksowe prace wykończeniowe mieszkań i domów',
	description:
		'Profesjonalne wykończenia wnętrz – kompleksowe remonty mieszkań i domów, prace wykończeniowe, stylowe aranżacje i wykończenia pod klucz.',
	openGraph: {
		title:
			'Wykończenia wnętrz | Kompleksowe prace wykończeniowe mieszkań i domów',
		description:
			'Profesjonalne wykończenia wnętrz – kompleksowe remonty mieszkań i domów, prace wykończeniowe, stylowe aranżacje i wykończenia pod klucz.',
		url: 'https://pro-wnetrze.pl/wykonczenia-wnetrz-mieszkan-domow',
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
		canonical: 'https://pro-wnetrze.pl/wykonczenia-wnetrz-mieszkan-domow',
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
				title='Wykończenia wnętrz'
				text='Wykończenia wnętrz to kluczowy etap remontu, który nadaje przestrzeni estetykę i funkcjonalność. Oferujemy kompleksowe prace wykończeniowe mieszkań i domów, realizując wykończenia pod klucz zgodnie z Twoimi oczekiwaniami i najnowszymi trendami. Bez względu na styl wnętrza, zapewniamy najwyższą jakość wykonania i dbałość o każdy detal.'
				bgImage={backgroundImage}
			/>

			<CategoryAbout
				underline_word='Kompleksowe'
				heading={<>wykończenia wnętrz</>}
				text='Zadbamy o każdy detal, aby Twoje wnętrze było nie tylko estetyczne, ale i funkcjonalne. Oferujemy pełen zakres prac wykończeniowych – od gładzi i malowania, po układanie podłóg i tynki dekoracyjne. Stawiamy na wysoką jakość, terminowość i precyzję, dzięki czemu efekt końcowy spełni Twoje oczekiwania. Sprawdź, jak możemy odmienić Twoją przestrzeń!'
				graphicTitle='Szeroki zakres prac wykończeniowych'
				graphicText='Oferujemy kompleksowe usługi, dzięki którym Twoje wnętrza zyskają nowy wygląd i pełną funkcjonalność. Realizujemy zarówno drobne prace montażowe, jak i kompleksowe remonty – od łazienek, przez adaptację poddasza, aż po wykończenia pod klucz. Każdy etap pracy wykonujemy z dbałością o detale, aby efekt spełniał Twoje oczekiwania na długie lata.'
				categorySlug='wykonczenia-wnetrz-mieszkan-domow'
				linkArr={interiorDesignLinks}
				img1={image1}
				img2={image2}
				img3={image3}
				img4={image4}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						Podkreśl styl wykończenia wnętrz
					</h3>
					<p className={styles.linkingText}>
						Dbamy o każdy detal, aby Twoje wnętrze było nie tylko estetyczne,
						ale i funkcjonalne. Oprócz kompleksowych wykończeń wnętrz
						realizujemy także pojedyncze{' '}
						<Link href={'/uslugi-remontowo-budowlane'}>usługi remontowe</Link>,
						dzięki którym możesz odmienić swoją przestrzeń od podstaw. Jeśli
						zależy Ci na wyjątkowym efekcie wizualnym, sprawdź również nasze{' '}
						<Link href={'/tynki-dekoracyjne-i-wykonczenia-scian'}>
							{' '}
							techniki dekoracyjne
						</Link>
						, takie jak imitacja betonu czy stiuki, które nadadzą wnętrzom
						unikalny charakter.
					</p>

					<CategoryFeatures title='Roboty wykończeniowe - wybierz sprawdzoną ekipę!' />
				</Wrapper>
			</section>

			<section className={styles.labelSection}>
				<Wrapper className={styles.wrapper}>
					<h2 className={rubik.className}>
						<span>Wykończenia</span>
						<span> Wnętrz</span>
						<span> Mieszkań i Domów</span>
					</h2>

					<p>
						Specjalizujemy się w robotach wykończeniowych, obejmujących zarówno
						mieszkania, jak i domy. Niezależnie od tego, czy potrzebujesz
						odświeżenia wnętrza, czy pełnej modernizacji, nasz doświadczony
						zespół zadba o każdy detal. Łączymy usługi remontowe z nowoczesnymi
						technikami dekoracyjnymi, aby stworzyć estetyczne, funkcjonalne i
						trwałe przestrzenie dopasowane do Twoich potrzeb.
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
