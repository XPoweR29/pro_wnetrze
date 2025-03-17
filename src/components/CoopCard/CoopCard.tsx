import React from 'react';
import styles from './CoopCard.module.scss';
import Image from 'next/image';
import { TimelineEntry } from '@/data/timelineSteps';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
});

export const CoopCard = ({
	image,
	title,
	content,
	spanNumber,
}: TimelineEntry & Record<'spanNumber', string>) => {
	return (
		<div className={styles.card}>
			<span className={rubik.className}>{spanNumber}</span>
			<div className={styles.content}>
				<Image src={image} alt='' aria-hidden />
				<div className={styles.container}>
					<h3>{title}</h3>
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};
