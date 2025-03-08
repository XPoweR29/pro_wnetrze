'use client';

import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image, { StaticImageData } from 'next/image';
import styles from './ServiceStart.module.scss';
import scrollDownIcon from '../../assets/icons/scrolldown_arrow.svg';
import FixedBackground from '@/components/FixedBackground/FixedBackground';
import { Rubik } from 'next/font/google';

export const rubik = Rubik({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
});

interface Props {
	className?: string;
	title: string;
	text: string;
	bgImage: string | StaticImageData;
}

export const ServiceStart = ({ title, bgImage, text, className }: Props) => {
	const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const aboutSection = document.getElementById('about_section');
		if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className={`${styles.start} ${className}`}>
			<FixedBackground src={bgImage} className={styles.fixedBackground} />

			<Wrapper className={styles.wrapper}>
				<h1 className={`${styles.heading} ${rubik.className}`}>{title}</h1>
				<p className={styles.text}>{text}</p>

				<button
					className={styles.scrollDownBtn}
					aria-label='Przewiń w dół'
					onClick={handleButton}>
					<Image src={scrollDownIcon} alt='' />
				</button>
			</Wrapper>

			<div className={styles.divider} />
		</section>
	);
};
