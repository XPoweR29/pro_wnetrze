import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { rubikDirt } from '@/app/layout';

import styles from './Process.module.scss';
import underline from '../../assets/underline.svg';
import { TimelineSteps } from '@/components/TimelineSteps/TimelineSteps';

export const Process = () => {
	return (
		<section className={styles.process} id='proces'>
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						proces
					</span>
					<h2 className={styles.heading}>
						Jak wygląda{' '}
						<span className={styles.word}>
							współpraca
							<img src={underline.src} alt='' aria-hidden />
						</span>
						{''} z nami?
					</h2>
				</div>

				<p className={styles.text}>
					Proces współpracy z nami jest prosty i przejrzysty. Od pierwszego
					kontaktu aż po finalne wykończenie – dbamy o każdy szczegół, aby
					zapewnić Ci najwyższą jakość usług. Pracujemy terminowo, rzetelnie i
					zgodnie z Twoimi oczekiwaniami. Sprawdź, jak przebiega współpraca krok
					po kroku!
				</p>

				<TimelineSteps className={styles.timeline}/>
			</Wrapper>
		</section>
	);
};
