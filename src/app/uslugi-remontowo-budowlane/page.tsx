import React from 'react';
import backgroundImage from '../../assets/img/uslugi-remontowo-budowlane.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import { CategoryAbout } from '@/sections/Category_About/CategoryAbout';
import { renovationServicesLinks } from '@/data/navLinks';
import Link from 'next/link';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';

import image1 from '../../assets/img/kompleksowe-remonty.webp';
import image2 from '../../assets/img/firma-remontowo-budowlana.webp';
import image3 from '../../assets/img/wykonczenia-wnetrz.webp';
import image4 from '../../assets/img/uslugi-budowlane.webp';
import { rubik } from '../layout';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	'@id': 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
	name: 'Usługi remontowo-budowlane',
	description:
		'Profesjonalne remonty mieszkań i domów. Sprawdź naszą ofertę usług remontowo-budowlanych, w tym tynki dekoracyjne, malowanie ścian i remonty łazienek.',
	url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
};

export const metadata: Metadata = {
	title: 'Usługi remontowe | Kompleksowe remonty mieszkań i domów',
	description:
		'Szukasz sprawdzonej firmy remontowo-budowlanej? Oferujemy kompleksowe remonty mieszkań i domów – od gruntownej renowacji po wykończenie pod klucz!',
	openGraph: {
		title: 'Usługi remontowe | Kompleksowe remonty mieszkań i domów',
		description:
			'Szukasz sprawdzonej firmy remontowo-budowlanej? Oferujemy kompleksowe remonty mieszkań i domów – od gruntownej renowacji po wykończenie pod klucz!',
		url: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
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
		canonical: 'https://pro-wnetrze.pl/uslugi-remontowo-budowlane',
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
				title='Usługi remontowe'
				text='Oferujemy kompleksowe usługi remontowo-budowlane i remontowo-wykończeniowe – od szybkiego odświeżenia mieszkań po pełne wykończenia wnętrz w domów. Dzięki doświadczeniu i dbałości o detale gwarantujemy najwyższą jakość prac, tworząc przestrzenie w pełni dopasowane do Twoich potrzeb.'
				bgImage={backgroundImage}
			/>

			<CategoryAbout
				underline_word='Usługi'
				heading={
					<>
						remontowo budowlane <span>od A od Z</span>
					</>
				}
				text='Szukasz sprawdzonej firmy oferującej usługi remontowo budowlane od A do Z? Dobrze trafiłeś! Nasz zespół zapewnia kompleksowe remonty, w tym remonty mieszkań oraz remonty domów – zarówno tych nowych, jak i w stanie wymagającym gruntownej renowacji. Jeśli planujesz remont starego domu albo masz mieszkanie do remontu, możesz liczyć na nasze usługi remontowo-wykończeniowe dostosowane do Twoich potrzeb.'
				graphicTitle='Szeroki zakres prac remontowych'
				graphicText='Realizując usługę remontową, przykładamy szczególną wagę do każdego detalu, aby efekty były trwałe, estetyczne i funkcjonalne. Czym zajmuje się firma remontowo-wykończeniowa? Oferujemy kompleksowe rozwiązania – od precyzyjnych prac budowlanych po nowoczesne wykończenia wnętrz, realizując m.in. remonty mieszkań, domów oraz modernizacje istniejących przestrzeni.'
				categorySlug='uslugi-remontowo-budowlane'
				linkArr={renovationServicesLinks}
				img1={image1}
				img2={image2}
				img3={image3}
				img4={image4}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						Kompleksowe wsparcie w wykończeniach wnętrz
					</h3>
					<p className={styles.linkingText}>
						Oprócz usług typowo remontowych oferujemy również{' '}
						<Link href={'/wykonczenia-wnetrz-mieszkan-domow'}>
							wykończenia wnętrz
						</Link>
						, dzięki czemu możemy przeprowadzić cały proces – od przygotowania
						ścian po finalne dekoracje. Wykorzystujemy nowoczesne materiały oraz
						sprawdzone technologie, aby osiągnąć wyjątkowy efekt wizualny i
						maksymalną funkcjonalność. Co więcej, nasz zespół doradzi w kwestii
						doboru kolorów i faktur, tak aby wnętrze odzwierciedlało Twój styl i
						potrzeby. Chcesz nadać pomieszczeniom wyjątkowy charakter? Zapoznaj
						się z naszymi{' '}
						<Link href={'/tynki-dekoracyjne-i-wykonczenia-scian'}>
							{' '}
							technikami dekoracyjnymi
						</Link>
						, takimi jak imitacja betonu czy stiuki.
					</p>

					<CategoryFeatures title='Dlaczego warto wybrać nasze usługi remontowe?' />
				</Wrapper>
			</section>

			<section className={styles.labelSection}>
				<Wrapper className={styles.wrapper}>
					<h2 className={rubik.className}>
						<span>Kompleksowe</span>
						<span> Remonty</span>
						<span> Mieszkań i Domów</span>
					</h2>

					<p>
						Specjalizujemy się w kompleksowych remontach, obejmujących zarówno
						remonty mieszkań, jak i remonty domów. Niezależnie od tego, czy
						czeka Cię remont starego domu czy masz mieszkanie do remontu, nasz
						doświadczony zespół zapewnia najwyższą jakość prac, terminowość i
						pełne wsparcie na każdym etapie inwestycji.
					</p>
				</Wrapper>
			</section>

			<CategoryContact helpWithHeading='w remoncie?'>
				Skontaktuj się z nami, aby poznać szczegóły oferty na usługi remontowo
				budowlane w Twoim regionie. Z przyjemnością pomożemy Ci w realizacji
				planów remontowych i wykończeniowych – od pierwszych konsultacji aż po
				odbiór gotowego wnętrza.
			</CategoryContact>
		</>
	);
};
export default CategoryPage;
