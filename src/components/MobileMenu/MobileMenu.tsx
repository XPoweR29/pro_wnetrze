'use client';
import React, { useContext } from 'react';

import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { AppContext } from '@/contexts/app.context';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import Image from 'next/image';
import tools_img from '../../assets/img/tools.svg';
import { navLinks } from '@/data/navLinks';

export const MobileMenu = () => {
	const { breakpoint } = useBreakpoints();
	const { mobileMenuShown, setMobileMenuShown } = useContext(AppContext)!;

	const handleClick = () => {
		setMobileMenuShown(false);
	};

	return (
		<>
			{!breakpoint.md ? (
				<nav
					className={`${styles.mobileMenu} ${
						mobileMenuShown && styles['mobileMenu--active']
					}`}
					aria-hidden={!mobileMenuShown}
					inert={!mobileMenuShown}
					aria-label='Menu główne'>
					<ul>
						{navLinks.map(({href, label, onClick}, index) => (
							<li onClick={handleClick} key={index}
							style={{animationDelay: `${index*0.07}s`}}>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>

					<Image src={tools_img} className={styles.image} alt='' aria-hidden/>
				</nav>
			) : null}
		</>
	);
};
