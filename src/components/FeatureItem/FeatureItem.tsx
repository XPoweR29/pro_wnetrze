'use client';

import React, { useRef } from 'react';
import styles from './FeatureItem.module.scss';
import { useInView } from 'framer-motion';

interface Props {
	icon: string;
	children: React.ReactNode;
	delay?: number;
}

export const FeatureItem = ({ icon, children, delay=0 }: Props) => {
	const itemRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(itemRef, {once: true, margin: '-15%'});

	return (
		<div className={`${styles.feature} ${isInView?styles['slide-right']:''}`} ref={itemRef} style={{animationDelay: `${delay}s`}}>
			<img src={icon} alt='' aria-hidden />
			<p>{children}</p>
		</div>
	);
};
