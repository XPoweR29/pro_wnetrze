import React from 'react';

import styles from './LinkBar.module.scss';
import Link from 'next/link';
import { navLinks } from '@/data/navLinks';
import { useMegaMenu } from '../../hooks/useMegaMenu';

export const LinkBar = () => {
	const { openMenu } = useMegaMenu();

	return (
		<nav className={styles.linkBar}>
			<ul>
				{navLinks.map(({ href, label }) => (
					<li key={label}>
						<Link
							href={href}
							onMouseEnter={label === "Usługi" ? openMenu : undefined}>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
