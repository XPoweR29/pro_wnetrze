'use client';
import { FC, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './FixedBackground.module.scss';

interface FixedBackgroundProps {
	src: string | StaticImageData;
    className?: string;
    margin?: number;
}

const FixedBackground: FC<FixedBackgroundProps> = ({ src, className, margin=0 }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!containerRef.current) return;

		const parentElement = containerRef.current.parentElement;
		if (!parentElement) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setVisible(entry.isIntersecting);
			},
			{ rootMargin: `${margin}px` } 
		);

		observer.observe(parentElement);

		return () => {
			observer.unobserve(parentElement);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`${styles.fixedContainer} ${className || ''}`}
			style={{ display: visible ? 'block' : 'none' }}>
			<Image src={src} alt='' aria-hidden fill style={{ objectFit: 'cover' }} priority />
		</div>
	);
};

export default FixedBackground;
