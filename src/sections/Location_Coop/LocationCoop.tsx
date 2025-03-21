import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { rubikDirt } from '@/app/layout';

import styles from './LocationCoop.module.scss';
import underline from '../../assets/underline.svg';
import bgImg from '../../assets/img/lazienka-po-remoncie.webp';
import FixedBackground from '@/components/FixedBackground/FixedBackground';
import Image from 'next/image';
import { CoopSwiper } from '@/components/CoopSwiper/CoopSwiper';
import { CtaFrame } from '@/components/CtaFrame/CtaFrame';

export const LocationCoop = () => {
	return (
		<section className={styles.cooperation}>
			<FixedBackground src={bgImg} className={styles.fixedBackground} />
			<div className={styles.divider} />

			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						proces
					</span>
					<h2 className={styles.heading}>
						Przebieg {''}
						<span className={styles.word}>
							współpracy
							<Image src={underline} alt='' aria-hidden />
						</span>
						{''} z PRO Wnętrze
					</h2>
				</div>
				<div className={styles.text}>
					Proces współpracy z nami jest prosty i przejrzysty. Od pierwszego
					kontaktu aż po finalne wykończenie – dbamy o każdy szczegół, aby
					zapewnić Ci najwyższą jakość usług. Pracujemy terminowo, rzetelnie i
					zgodnie z Twoimi oczekiwaniami. Sprawdź, jak przebiega współpraca krok
					po kroku!
				</div>

				<CoopSwiper className={styles.swiper} />

			<CtaFrame/>
			</Wrapper>
		</section>
	);
};
