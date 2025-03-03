'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import 'swiper/css';

import reviewJson from '../../data/reviews.json';
import { coopStep } from '@/data/coopSwiperSteps';
import { CoopCard } from '../CoopCard/CoopCard';

export const CoopSwiper = ({ className }: { className?: string }) => {
	const { breakpoint } = useBreakpoints();
	const reviews: Review[] = reviewJson;

	return (
		<Swiper
			className={className}
			modules={[A11y, Autoplay]}
			spaceBetween={30}
			slidesPerGroup={1}
			slidesPerView={breakpoint.lg ? 2 : 1}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{coopStep.map(({ title, content, image }, index) => (
				<SwiperSlide key={index}>
					<CoopCard
						title={title}
						content={content}
						image={image}
						spanNumber={`0${index+1}.`}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
