'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BurgerBtn } from '@/components/BurgerBtn/BurgerBtn';
import { Wrapper } from '@/components/Wrapper/Wrapper';

import styles from './Header.module.scss';
import logo from '../../assets/logo_slogan_yellow.png';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { LinkBar } from '@/components/LinkBar/LinkBar';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/hooks/useAppContext';
import { MegaMenu } from '../MegaMenu/MegaMenu';

export const Header = () => {
	const { breakpoint } = useBreakpoints();
	const { setMobileMenuShown } = useAppContext();
	const pathname = usePathname();
	const [showNav, setShowNav] = useState(true);
	const [bgColor, setBgColor] = useState<string>('transparent');
	const prevScrollPos = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollPos.current > currentScrollPos) {
				setShowNav(true);
			} else {
				setShowNav(false);
				setMobileMenuShown(false);
			}

			if (currentScrollPos > 100 || pathname === '/polityka-prywatnosci') {
				setBgColor('#2E2E2E');
			} else {
				setBgColor('transparent');
			}

			prevScrollPos.current = currentScrollPos;
		};

		if (pathname === '/polityka-prywatnosci') {
			setBgColor('#2E2E2E');
		} else {
			setBgColor('transparent');
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [pathname, setMobileMenuShown]);

	return (
		<header
			className={`${styles.header} ${!showNav ? styles['header--hidden'] : ''}`}
			style={{ backgroundColor: bgColor }}>
			<Wrapper className={styles.wrapper}>
				<Link href='/#start'>
					<Image className={styles.logo} src={logo} alt='logo' />
				</Link>

				{breakpoint.md ? (
					<LinkBar />
				) : (
					<BurgerBtn className={styles.burgerBtn} />
				)}
				<MobileMenu/>

				<MegaMenu />
			</Wrapper>
		</header>
	);
};
