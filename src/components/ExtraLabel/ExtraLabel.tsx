'use client';

import React, { useRef } from 'react';
import styles from './ExtraLabel.module.scss';
import Image from 'next/image';
import underline from '../../assets/underline.svg';
import { useInView } from 'framer-motion';

interface Props {
    location: string;
    children: React.ReactNode;
}


export const ExtraLabel = ({ location, children }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, {amount: 0.7, once: true});

	return (
		<div className={styles.extraLabel} ref={ref}>
			<div className={`${styles.title} ${inView?'fade-in-left':''}`}>
				<h2>Remonty {location}</h2>
				<h3>
					<span className={styles.word}>
						Fachowa
						<Image src={underline} alt='' aria-hidden />
					</span>{' '}
					realizacja od A do Z!
				</h3>
			</div>

			<p className={inView?'fade-in-right':''}>{children}</p>
		</div>
	);
};
