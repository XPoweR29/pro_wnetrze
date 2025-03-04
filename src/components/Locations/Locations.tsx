'use client';

import React, { useRef } from 'react';
import styles from './Locations.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { locationLinks } from '@/data/locationLinks';
import arrowIcon from '../../assets/icons/circle-arrow.png';
import magnifyingGlassIcon from '../../assets/icons/magnifying-glass-icon.png';
import { usePathname } from 'next/navigation';
import { useInView } from 'framer-motion';

export const Locations = () => {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 1, once: true });
	const pathname = usePathname();
	const currentSlug = pathname.split('/')[2];

	return (
		<div className={styles.locations}>
			<h3>Firma budowlana PRO Wnętrze - nasz obszar działania</h3>
			<ul ref={ref}>
				{locationLinks
					.filter(({ slug }) => slug !== currentSlug)
					.map(({ slug, label }, i) => (
						<li
							key={slug}
							className={inView ? 'fade-in-left' : ''}
							style={{ 
								animationDelay: `0.${i + 1}s`, 
								animationDuration: '1s'
							}}>
							<Link href={`/firma-budowlana/${slug}`} className={styles.link}>
								<Image
									src={arrowIcon}
									aria-hidden
									alt={`Firma budowlana ${label}`}
								/>
								{label}
							</Link>
						</li>
					))}
			</ul>

			<p className={styles.text}>
				<Image src={magnifyingGlassIcon} aria-hidden alt='' /> Nie widzisz
				swojego miasta na liście? Jest duża szansa, że działamy również w Twojej
				okolicy – <Link href={'/kontakt'}>skontaktuj się z nami</Link>, a
				sprawdzimy możliwość realizacji Twojego projektu!
			</p>
		</div>
	);
};
