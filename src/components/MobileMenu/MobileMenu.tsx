import { useState, useEffect } from 'react';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import tools_img from '../../assets/img/tools.svg';
import { navLinks } from '@/data/navLinks';
import { useAppContext } from '@/hooks/useAppContext';
import backArrow from '../../assets/icons/circle-arrow.png';
import downArrow from '../../assets/icons/double_down_arrow.svg';
import { motion } from 'framer-motion';

export const MobileMenu = () => {
	const { mobileMenuShown, setMobileMenuShown } = useAppContext();
	const [activeMenu, setActiveMenu] = useState<'main' | 'services'>('main');

	useEffect(() => {
		document.body.style.overflow = mobileMenuShown ? 'hidden' : 'visible';
	}, [mobileMenuShown]);

	const handleClose = () => {
		setMobileMenuShown(false);
		setActiveMenu('main');
	};

	const goBack = () => setActiveMenu('main');

	return (
		<nav
			className={`${styles.mobileMenu} ${
				mobileMenuShown ? styles['mobileMenu--active'] : ''
			}`}
			aria-hidden={!mobileMenuShown}
			inert={!mobileMenuShown}
			aria-label='Menu główne'>
			<div className={styles.menuContainer}>
				{activeMenu === 'main' && (
					<ul>
						{navLinks.map(({ href, label }, index) => (
							<li
								onClick={(e) => {
									if (label === 'Usługi') {
										e.preventDefault();
										setActiveMenu('services');
									} else handleClose();
								}}
								key={index}
								style={{ animationDelay: `${index * 0.07}s` }}>
								<Link href={label === 'Usługi' ? '#' : href}>
									{label === 'Usługi' ? (
										<>
											{label}
											<Image src={backArrow} alt='' aria-hidden />
										</>
									) : (
										label
									)}
								</Link>
							</li>
						))}
					</ul>
				)}

				{activeMenu === 'services' && (
					<motion.button
						className={styles.backButton}
						onClick={goBack}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, ease: 'easeOut' }}>
						<Image src={backArrow} alt='' aria-hidden />
					</motion.button>
				)}

				{activeMenu === 'services' && (
					<div className={styles.submenu}>
						{navLinks
							.find((link) => link.label === 'Usługi')
							?.children?.map((cat) => (
								<div key={cat.label} className={styles.serviceCategory}>
									<Link
										className={styles.catLink}
										href={cat.slug}
										onClick={handleClose}>
										{cat.label}
									</Link>
									<ul>
										{cat.children?.map(({ slug, label }, i) => (
											<li key={slug} style={{ animationDelay: `${i * 0.07}s` }}>
												<Link
													href={`${cat.slug}/${slug}`}
													onClick={handleClose}>
													{label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
					</div>
				)}

				{activeMenu === 'services' && <Image className={styles.downArrow} src={downArrow} alt='' aria-hidden/>}

				<Image src={tools_img} className={styles.image} alt='' aria-hidden />
			</div>
		</nav>
	);
};
