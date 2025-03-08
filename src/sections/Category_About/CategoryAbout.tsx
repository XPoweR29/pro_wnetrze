'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';

import styles from './CategoryAbout.module.scss';
import underline from '../../assets/underline.svg';
import circleArrowIcon from '../../assets/icons/circle-arrow.png';
import Link from 'next/link';
import { MultiImage } from '@/components/MultiImage/MultiImage';
import { useInView } from 'framer-motion';

interface Props {
	className?: string;
	heading: string | React.ReactNode;
	underline_word: string;
	text: string | React.ReactNode;
	graphicTitle: string;
	graphicText: string;
	img1: string | StaticImageData;
	img2: string | StaticImageData;
	img3: string | StaticImageData;
	img4: string | StaticImageData;
	linkArr: LinkData[];
}

export const CategoryAbout = ({
	className,
	heading,
	underline_word,
	text,
	graphicTitle,
	graphicText,
	img1,
	img2,
	img3,
	img4,
	linkArr,
}: Props) => {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 1, once: true });

	return (
		<section className={`${styles.about} ${className}`} id='about_section'>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					<span className={styles.word}>
						{underline_word}
						<Image src={underline} alt='' aria-hidden />
					</span>{' '}
					{heading}
				</h2>
				<p className={styles.text}>{text}</p>

				<div className={styles.flexContainer}>
					<MultiImage
						className={styles.image}
						img1={img1}
						img2={img2}
						img3={img3}
						img4={img4}
					/>

					<div className={styles.content}>
						<h3>{graphicTitle}</h3>
						<p>{graphicText}</p>
						<ul className={styles.linkContainer} ref={ref}>
							{linkArr.map(({ label, slug }, i) => (
								<li
									key={slug}
									className={inView ? 'fade-in-left' : ''}
									style={{
										animationDelay: `0.${i + 1}s`,
										animationDuration: '1s',
									}}>
									<Link
										href={`/uslugi-remontowo-budowlane/${slug}`}
										className={styles.link}>
										<Image src={circleArrowIcon} aria-hidden alt={slug} />
										<span>{label}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
