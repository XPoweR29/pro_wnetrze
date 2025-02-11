'use client'
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './AnimateServiceItem.module.scss';
import { ServiceItem } from '../ServiceItem/ServiceItem';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const AnimateServiceItem = ({ ...props }: ServiceItem) => {
	const { breakpoint } = useBreakpoints();
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { 
		amount: breakpoint.lg ? 1 : 0.5, 
		once: true 
	});

	return (
		<div
			ref={ref}
			className={`${styles.container} ${isInView?styles['fade-in-bottom']:''}`}>
			<ServiceItem {...props}/>
		</div>
	);
};
