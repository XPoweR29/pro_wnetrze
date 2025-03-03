'use client';

import React from 'react';
import styles from './Locations.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { locationLinks } from '@/data/locationLinks';
import arrowIcon from '../../assets/icons/circle-arrow.png';
import magnifyingGlassIcon from '../../assets/icons/magnifying-glass-icon.png';
import { usePathname } from 'next/navigation';

export const Locations = () => {
	const pathname = usePathname();
	const currentSlug = pathname.split('/')[2];

	return (
		<div className={styles.locations}>
			<h3>Firma budowlana PRO Wnętrze - nasz obszar działania</h3>
			<ul>
				{locationLinks
					.filter(({ slug }) => slug !== currentSlug)
					.map(({ slug, label }) => (
						<li key={slug}>
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
				<Image src={magnifyingGlassIcon} aria-hidden alt=''/> Nie widzisz swojego miasta na liście? Jest duża szansa, że działamy
				również w Twojej okolicy – <Link href={'/kontakt'}>skontaktuj się z nami</Link>, a
				sprawdzimy możliwość realizacji Twojego projektu!
			</p>
		</div>
	);
};
