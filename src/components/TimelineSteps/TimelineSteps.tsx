'use client';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Rubik, Rubik_Dirt } from 'next/font/google';
import Image from 'next/image';
import { timelineSteps } from '@/data/timelineSteps';

import styles from './TimelineSteps.module.scss';
import { StepContent } from '../StepContent/StepContent';
import { title } from 'process';

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
			className={`${styles.container} ${className}`}
			ref={containerRef}>
			<div
				ref={ref}
				className={styles.stepBox}>
				{timelineSteps.map((item, index) => (
					<div
						key={index}
						className={styles.step}>
						<div
							className={styles.label}>
							<div className={styles.point}></div>
							<p className={`${styles.number} ${rubik.className}`}>{`0${
								index + 1
							}.`}</p>
						</div>

						<StepContent title={item.title} content={item.content} image={item.image}/>
					</div>
				))}
				<div
					style={{
						height: height + 'px',
					}}
					className={styles.track}>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className={styles.pathline}
					/>
				</div>
			</div>
		</div>
	);
};
