import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { rubikDirt } from '@/app/layout';
import Image from 'next/image';

import styles from './Contact.module.scss';
import underline from '../../assets/underline.svg';
import icon_localization from '../../assets/icons/contact_localization.png';
import icon_mail from '../../assets/icons/contact_mail.png';
import icon_phone from '../../assets/icons/contact_phone.png';
import icon_instagram from '../../assets/icons/contact_instagram.png';
import ContactForm from '@/components/ContactForm/ContactForm';
import { Map } from '@/components/Map/Map';
export const Contact = () => {
	return (
		<section className={styles.contact} id='kontakt'>
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						proces
					</span>
					<h2 className={styles.heading}>
						Chętnie odpowiemy na{' '}
						<span className={styles.word}>
							Twoje
							<img src={underline.src} alt='' aria-hidden />
						</span>
						{''} pytania
					</h2>
				</div>

				<p className={styles.text}>
					Masz pytania dotyczące remontu lub wykończenia wnętrz? Chętnie
					pomożemy! Skontaktuj się z nami, aby uzyskać wycenę i omówić szczegóły
					Twojego projektu. Czekamy na Twoją wiadomość!
				</p>

				<div className={styles.napContainer}>
					<a
						href='https://maps.app.goo.gl/16b83CP9iQeqTBjp9'
						className={styles.contactItem}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Lokalizacja – Google Maps'>
						<Image
							className={styles.icon}
							src={icon_localization}
							alt='Ikona lokalizacji'
						/>
						<span className={styles.label}>
							ul. Parkowa 43, <br />
							34-321 Kocierz Moszczanicki
						</span>
					</a>

					<a
						href='mailto:prownetrze.zywiec@gmail.com'
						className={styles.contactItem}
						aria-label='Wyślij e-mail'>
						<Image className={styles.icon} src={icon_mail} alt='Ikona maila' />
						<span className={styles.label}>prownetrze.zywiec@gmail.com</span>
					</a>

					<a
						href='tel:+48515484232'
						className={styles.contactItem}
						aria-label='Zadzwoń pod numer +48 515-484-232'>
						<Image
							className={styles.icon}
							src={icon_phone}
							alt='Ikona telefonu'
						/>
						<span className={styles.label}>+48 515-484-232</span>
					</a>

					<a
						href='https://www.instagram.com/prownetrze/profilecard/?igsh=NWxrOGMzazA2M29s'
						className={styles.contactItem}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Odwiedź profil na Instagramie'>
						<Image
							className={styles.icon}
							src={icon_instagram}
							alt='Ikona Instagrama'
						/>
						<span className={styles.label}>@PROWNETRZE</span>
					</a>
				</div>

				<ContactForm />
			</Wrapper>
            
			<Map className={styles.map} />
		</section>
	);
};
