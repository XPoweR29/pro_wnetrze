'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BurgerBtn } from '@/components/BurgerBtn/BurgerBtn';
import { Wrapper } from '@/components/Wrapper/Wrapper';

import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { LinkBar } from '@/components/LinkBar/LinkBar';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';
import { AppContext } from '@/contexts/app.context';
import { usePathname } from 'next/navigation';

export const Header = () => {
	const [showNav, setShowNav] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [bgColor, setBgColor] = useState<string>('transparent');
	const { breakpoint } = useBreakpoints();
	const { setMobileMenuShown } = useContext(AppContext)!;
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollPos > currentScrollPos) {
				setShowNav(true);
			} else {
				setShowNav(false);
				setMobileMenuShown(false);
			}

			if (currentScrollPos > 100) {
				setBgColor('#2E2E2E');
			} else if (
				pathname !== '/polityka-prywatnosci' &&
				currentScrollPos <= 100
			) {
				setBgColor('transparent');
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	useEffect(() => {
		if (pathname === '/polityka-prywatnosci') {
			setBgColor('#2E2E2E');
		} else setBgColor('transparent');
	}, [pathname]);

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
				<MobileMenu />
			</Wrapper>
		</header>
	);
};
