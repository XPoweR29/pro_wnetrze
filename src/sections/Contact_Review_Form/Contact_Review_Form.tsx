import React from 'react';

import styles from './Contact_Review_Form.module.scss';
import { ContactContent } from '@/components/ContactContent/ContactContent';
import { rubikDirt } from '@/app/layout';
import { rubik } from '@/app/layout';
import underline from '../../assets/underline.svg';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { Reviews } from '../Reviews/Reviews';

export const Contact_Review_Form = () => {
	return (
		<section className={styles.section}>
			<div className={styles.divider} />
			<Wrapper className={styles.wrapper}>
				<Reviews
					className={styles.reviews}
					heading={
						<h2 className={`reviewHeading ${rubik.className}`}>
							Co mówią nasi{' '}
							<span>
								Klienci
								<Image src={underline} alt='' aria-hidden />
							</span>
							?
						</h2>
					}
					text={
						<span className='reviewText'>
							Opinie naszych klientów to nasza najlepsza rekomendacja.
							Przeczytaj, jak oceniają naszą pracę, i przekonaj się, dlaczego
							warto nam zaufać – profesjonalizm i jakość to fundament naszej
							działalności.
						</span>
					}
				/>

				<div className={styles.headingContainer} id='kontakt'>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						kontakt
					</span>
					<h2 className={styles.heading}>
						Chętnie odpowiemy na{' '}
						<span className={styles.word}>
							Twoje
							<Image src={underline} alt='' aria-hidden />
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
