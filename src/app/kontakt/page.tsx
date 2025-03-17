import React from 'react';
import backgroundImage from '../../assets/img/kontakt.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import underline from '../../assets/underline.svg';
import { rubik } from '../layout';
import { Locations } from '@/components/Locations/Locations';
import Image from 'next/image';
import { Contact_Review_Form } from '@/sections/Contact_Review_Form/Contact_Review_Form';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'@id': 'https://pro-wnetrze.pl/kontakt',
	url: 'https://pro-wnetrze.pl/kontakt',
	name: 'Kontakt – PRO Wnętrze',
	description:
		'Skontaktuj się z nami, aby uzyskać wycenę i doradztwo w zakresie usług remontowo-budowlanych. Oferujemy profesjonalne wsparcie dla klientów indywidualnych i firm.',

	mainEntity: {
		'@type': 'HomeAndConstructionBusiness',
		'@id': 'https://pro-wnetrze.pl#business',
		name: 'PRO Wnętrze',
		telephone: '+48 515-484-232',
		email: 'prownetrze.zywiec@gmail.com',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'ul. Parkowa 43',
			addressLocality: 'Kocierz Moszczanicki',
			postalCode: '34-321',
			addressCountry: 'PL',
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '07:00',
			closes: '16:00',
		},
		areaServed: [
			{ '@type': 'AdministrativeArea', name: 'Województwo Śląskie' },
			{ '@type': 'AdministrativeArea', name: 'Województwo Małopolskie' },
		],
	},

	potentialAction: [
		{
			'@type': 'ScheduleAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: 'https://pro-wnetrze.pl/kontakt',
				actionPlatform: [
					'https://schema.org/DesktopWebPlatform',
					'https://schema.org/MobileWebPlatform',
				],
			},
			name: 'Umów się na konsultację',
		},
		{
			'@type': 'ContactPoint',
			contactType: 'customer service',
			telephone: '+48 515-484-232',
			email: 'prownetrze.zywiec@gmail.com',
			availableLanguage: ['Polish'],
			url: 'https://pro-wnetrze.pl/kontakt',
			potentialAction: {
				'@type': 'SendAction',
				name: 'Prześlij zapytanie',
				target: {
					'@type': 'EntryPoint',
					urlTemplate: 'https://pro-wnetrze.pl/kontakt#formularz',
					actionPlatform: [
						'https://schema.org/DesktopWebPlatform',
						'https://schema.org/MobileWebPlatform',
					],
				},
			},
		},
	],
};

export const metadata: Metadata = {
	title: 'Kontakt - PRO Wnętrze | Wycena i doradztwo remontowe',
	description:
		'Masz pytania dotyczące remontu lub wykończenia wnętrz? Skontaktuj się z PRO Wnętrze! Oferujemy fachowe doradztwo i indywidualną wycenę usług.',
	openGraph: {
		title: 'Kontakt - PRO Wnętrze | Wycena i doradztwo remontowe',
		description:
			'Masz pytania dotyczące remontu lub wykończenia wnętrz? Skontaktuj się z PRO Wnętrze! Oferujemy fachowe doradztwo i indywidualną wycenę usług.',
		url: 'https://pro-wnetrze.pl/kontakt',
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
		canonical: 'https://pro-wnetrze.pl/kontakt',
	},
};

const ContactPage = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<ServiceStart
				title='Kontakt'
				text='Masz pytania dotyczące remontu lub wykończenia wnętrz? Chętnie pomożemy! Skontaktuj się z nami, aby uzyskać wycenę i omówić szczegóły Twojego projektu. Czekamy na Twoją wiadomość!'
				bgImage={backgroundImage}
				scrollToSection='kontakt'
			/>

			<section className={styles.locationsSection}>
				<Wrapper>
					<Locations
						className={styles.container}
						scrollLink={true}
						scrollToId='kontakt'>
						<h3 className={`${styles.heading} ${rubik.className}`}>
							Zobacz{' '}
							<span>
								gdzie
								<Image src={underline} alt='' aria-hidden />
							</span>{' '}
							świadczymy nasze usługi
						</h3>
					</Locations>
				</Wrapper>
			</section>

			<Contact_Review_Form />
		</>
	);
};
export default ContactPage;
