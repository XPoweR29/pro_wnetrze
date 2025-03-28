import React from 'react';
import Link from 'next/link';

import styles from './Reviews.module.scss';
import underline from '../../assets/underline.svg';
import { ReviewSwiper } from '@/components/ReviewSwiper/ReviewSwiper';
import Image from 'next/image';

interface Props {
	heading?: React.ReactNode;
	text?: React.ReactNode;
	className?: string;
}

export const Reviews = ({ className, heading, text }: Props) => {
	return (
		<div className={`${styles.section} ${className}`}>
			<div className={styles.headingContainer}>
				{heading ?? (
					<h2 className={styles.heading}>
						<span className={styles.word}>
							Dlaczego
							<Image src={underline} alt='' aria-hidden />
						</span>
						{''} warto nam zaufać?
					</h2>
				)}
			</div>

			<p className={styles.text}>
				{text ?? (
					<>
						Zaufanie naszych klientów to nasz największy sukces. Przekonaj się
						sam, dlaczego współpraca z nami to gwarancja jakości i zadowolenia.{' '}
						<Link href={'/#kontakt'}> Skontaktuj się z nami</Link> i dołącz do
						grona zadowolonych klientów!
					</>
				)}
			</p>

			<ReviewSwiper className={styles.swiper} />
		</div>
	);
};
