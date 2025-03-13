'use client';

import React, { useRef } from 'react';
import styles from './ServiceBox.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import icon from '../../assets/icons/circle-arrow.png';
import { useInView } from 'framer-motion';
import { useBreakpoints } from '@/hooks/useBreakpoint';

interface Props {
	title: string;
	categorySlug: string;
	links: LinkData[];
	image: string | StaticImageData;
	imageAlt: string;
	reverse?: boolean;
	children?: React.ReactNode;
}
export const ServiceBox = ({
	categorySlug,
	links,
	image,
	imageAlt,
	title,
	reverse,
	children,
}: Props) => {
	const { breakpoint } = useBreakpoints();

	const textRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const linkRef = useRef<HTMLUListElement>(null);

	const textInView = useInView(textRef, { amount: breakpoint.lg?1:0.5, once: true });
	const imageInView = useInView(imageRef, { amount: breakpoint.lg?1:0.5, once: true });
	const linkInView = useInView(linkRef, { amount: breakpoint.lg?1:0.5, once: true });

	return (
		<section
			className={`${styles.serviceBox} ${reverse ? styles.reverse : ''}`}>
			<div className={styles.linkContainer}>
				<h3
					ref={textRef}
					className={`${reverse ? styles.reverse : ''} ${
						textInView ? styles['fade-in-bottom'] : ''
					}`}>
					{title}
				</h3>
				<p
					className={`${styles.text} ${reverse ? styles.reverse : ''} ${
						textInView ? styles['fade-in-bottom'] : ''
					}`}>
					{children}
				</p>

				<div
					className={`${styles.flexContainer} ${
						reverse ? styles.reverse : ''
					}`}>
					<Image
						src={image}
						alt={imageAlt}
						ref={imageRef}
						className={`${styles.serviceImage} ${
							imageInView ? styles['fade-in-bottom'] : ''
						}`}
					/>
					<ul
						className={`${styles.linkList}`}
						ref={linkRef}>
						{links.map(({ slug, label }, i) => (
							<li key={slug} className={linkInView ? styles['fade-in-left'] : ''} style={{animationDelay: `0.${i}s`, animationDuration: '1s'}}>
								<Image src={icon} alt='' aria-hidden />
								<Link href={`/${categorySlug}/${slug}`}>{label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
