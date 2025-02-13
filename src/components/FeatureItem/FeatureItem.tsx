'use client';

import React, { useRef } from 'react';
import styles from './FeatureItem.module.scss';
import { useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface Props {
	icon: string | StaticImageData;
	children: React.ReactNode;
	delay?: number;
}

export const FeatureItem = ({ icon, children, delay=0 }: Props) => {
	const itemRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(itemRef, {once: true, margin: '-15%'});

	return (
		<div className={`${styles.feature} ${isInView?styles['slide-right']:''}`} ref={itemRef} style={{animationDelay: `${delay}s`}}>
			<Image src={icon} alt='' aria-hidden />
			<p>{children}</p>
		</div>
	);
};
