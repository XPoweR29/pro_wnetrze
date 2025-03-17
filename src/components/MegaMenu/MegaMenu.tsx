import React from 'react';
import styles from './MegaMenu.module.scss';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { Wrapper } from '../Wrapper/Wrapper';
import { Variants, motion } from 'framer-motion';
import { useMegaMenu } from '@/hooks/useMegaMenu';

export const MegaMenu = () => {
	const { openMenu, closeMenu, isSubmenuOpen } = useMegaMenu();
	// 	hideTimeout = setTimeout(() => {
	// 		setIsSubMenuOpen(false);
	// 	}, 200);
	// };

	// const cancelClosing = () => {
	// 	clearTimeout(hideTimeout);
	// };

	// const handleMouseLeave = (event: MouseEvent) => {
	// 	const relatedTarget = event.relatedTarget as Node | null;

	// 	if (
	// 		!relatedTarget ||
	// 		(submenuRef.current && submenuRef.current.contains(relatedTarget)) ||
	// 		(serviceRef.current && serviceRef.current.contains(relatedTarget))
	// 	) {
	// 		return;
	// 	}
	// 	delayedClose();
	// };

	const menuVariants: Variants = {
		open: {
			y: 0,
			opacity: 1,
			visibility: 'visible',
			pointerEvents: 'auto',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		closed: {
			y: -20,
			opacity: 0,
			visibility: 'hidden',
			pointerEvents: 'none',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
	};

	return (
		<motion.div
			className={styles.megaMenu}
			onMouseEnter={openMenu}
			onMouseLeave={closeMenu}
			initial='closed'
			variants={menuVariants}
			animate={isSubmenuOpen ? 'open' : 'closed'}>
			<Wrapper className={styles.wrapper}>
				{navLinks
					.find((link) => link.label === 'Usługi')
					?.children?.map((category) => (
						<div key={category.label} className={styles.megaColumn}>
							<Link href={`${category.slug}`} className={styles.categoryLink}>
								{category.label}
							</Link>

							<ul className={styles.linkList}>
								{category.children?.map((serv) => (
									<li className={styles.linkItem} key={serv.label}>
										<Link href={`${category.slug}/${serv.slug}`}>
											{serv.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
			</Wrapper>
		</motion.div>
	);
};
