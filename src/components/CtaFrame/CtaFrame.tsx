'use client';

import React, { useRef } from 'react';
import styles from './CtaFrame.module.scss';
import Link from 'next/link';
import { useInView } from 'framer-motion';

export const CtaFrame = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {amount: 0.7, once: true});

	return (
		<div className={`${styles.ctaSection} `}>
			<div className={`${styles.container} ${inView?styles['fade-in-bottom']:''}`} ref={ref}>
				<h4>Pierwszy krok do udanej współpracy to rozmowa</h4>
				<p>
					Zadzwoń, napisz e-mail lub wypełnij formularz – omówimy Twoje potrzeby
					i zaproponujemy najlepsze rozwiązanie.
				</p>

				<Link href={'/kontakt'}>Skontaktuj się z nami</Link>
			</div>
		</div>
	);
};
