'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Rubik, Rubik_Dirt } from 'next/font/google';
import Image from 'next/image';
import { timelineSteps } from '@/data/timelineSteps';

import styles from './TimelineSteps.module.scss';

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
});

const rubikDirt = Rubik_Dirt({
	subsets: ['latin'],
	weight: ['400'],
});

export const TimelineSteps = ({ className }: { className?: string }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 50%', 'end 70%'],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div
			className={`${styles.container} ${className} w-full bg-white dark:bg-neutral-950 font-sans md:px-10`}
			ref={containerRef}>
			<div
				ref={ref}
				className={`${styles.stepBox} relative max-w-7xl mx-auto pb-20`}>
				{timelineSteps.map((item, index) => (
					<div
						key={index}
						className={`${styles.step} flex justify-start pt-10 md:pt-40 md:gap-10`}>
						<div
							className={`${styles.label} sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full`}>
							<div className={styles.point}></div>
							<p className={`${styles.number} ${rubik.className}`}>{`0${
								index + 1
							}.`}</p>
						</div>

						<div
							className={`${styles.content} relative pl-20 pr-4 md:pl-4 w-full`}>
							<Image
								className={styles.image}
								src={item.image}
								alt=''
								aria-hidden
							/>
							<h3 className={styles.title}>{item.title}</h3>
							<p className={styles.describe}>{item.content}</p>
						</div>
					</div>
				))}
				<div
					style={{
						height: height + 'px',
					}}
					className={`${styles.track} absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className={`${styles.pathline} absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full`}
					/>
				</div>
			</div>
		</div>
	);
};
