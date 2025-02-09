import React from 'react';

import styles from './Contact.module.scss';
import { ContactContent } from '@/components/ContactContent/ContactContent';
import { rubikDirt } from '@/app/layout';
import underline from '../../assets/underline.svg';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export const Contact = () => {
	return (
		<section className={styles.section} id='kontakt'>
			<div className={styles.divider} />
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						kontakt
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
			</Wrapper>

			<ContactContent />
		</section>
	);
};
