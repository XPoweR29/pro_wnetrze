'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';

import styles from './ReviewSwiper.module.scss';
import 'swiper/css';

import reviewJson from '../../data/reviews.json';
import icon_quote from '../../assets/icons/icon_quote.svg';

export const ReviewSwiper = ({ className }: { className?: string }) => {
	const { breakpoint } = useBreakpoints();
	const reviews: Review[] = reviewJson;

	return (
		<Swiper
			className={className}
			modules={[A11y, Autoplay]}
			spaceBetween={30}
			slidesPerView={breakpoint.xl ? 3 : breakpoint.lg ? 2 : 1}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{reviews.map(({ author, comment }, index) => (
				<SwiperSlide key={index}>
					<div className={styles.reviewCard}>
						<img src={icon_quote.src} alt='' aria-hidden />
						<p className={styles.comment}>{comment}</p>
						<p className={styles.author}>{`- ${author}`}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
