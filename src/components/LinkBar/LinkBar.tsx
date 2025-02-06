import React from 'react';

import styles from './LinkBar.module.scss';
import Link from 'next/link';
import { navLinks } from '@/data/navLinks';

export const LinkBar = () => {
	return (
		<nav className={styles.linkBar}>
			<ul>
				{navLinks.map((link, index) => (
					<li
						key={index}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
