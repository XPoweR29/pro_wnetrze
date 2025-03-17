'use client';

import React, { useRef } from 'react'
import styles from './CateogryFeatures.module.scss';
import Image from 'next/image';
import icon from '../../assets/icons/feature_icon.png';
import { useInView } from 'framer-motion';

interface Props {
    title: string;
}

export const CategoryFeatures = ({ title }: Props) => {
	const ref = useRef(null);
	const inView = useInView(ref, {amount:0.75, once: true});

  return (
		<div className={styles.features}>
			<h3>{title}</h3>
			<ul ref={ref}>
				<li className={inView?'fade-in-bottom':''} style={{animationDelay: '0s'}}>
					<Image src={icon} aria-hidden alt='' />
					<div className={styles.flexContainer}>
						<h4>Doświadczenie</h4>
						<p>
							Wieloletnia praktyka w remontach pozwala nam na wykonywanie nawet
							najbardziej skomplikowanych projektów.
						</p>
					</div>
				</li>
				<li className={inView?'fade-in-bottom':''} style={{animationDelay: '0.2s'}}>
					<Image src={icon} aria-hidden alt='' />
					<div className={styles.flexContainer}>
						<h4>Jakość</h4>
						<p>
							Korzystamy z najwyższej klasy materiałów i nowoczesnych technik,
							co przekłada się na trwałość wykończeń.
						</p>
					</div>
				</li>
				<li className={inView?'fade-in-bottom':''} style={{animationDelay: '0.4s'}}>
					<Image src={icon} aria-hidden alt='' />
					<div className={styles.flexContainer}>
						<h4>Skrupulatność</h4>
						<p>
							Każdy etap realizacji kontrolujemy, aby uniknąć niedoskonałości i
							zapewnić perfekcyjny efekt.
						</p>
					</div>
				</li>
				<li className={inView?'fade-in-bottom':''} style={{animationDelay: '0.6s'}}>
					<Image src={icon} aria-hidden alt='' />
					<div className={styles.flexContainer}>
						<h4>Kompleksowość</h4>
						<p>
							Oferujemy pełen zakres usług – od szybkiego odświeżenia mieszkań
							po pełne wykończenia wnętrz zarówno w starych domach jak i nowo
							powstałych budynkach.
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
}
