'use client';
import { useEffect, useRef, useState, FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './ParallaxImage.module.scss';

interface ParallaxImageProps {
	src: string | StaticImageData;
	speed?: number;
	className?: string;
}

const ParallaxImage: FC<ParallaxImageProps> = ({
	src,
	speed = 0.5,
	className,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			setOffset(rect.top * speed);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [speed]);

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${className || ''}`}>
			<div
				className={styles.parallax}
				style={{ transform: `translateY(${offset}px)` }}>
				<Image
					src={src}
					alt=''
					aria-hidden
					fill
					style={{ objectFit: 'cover' }}
					priority
				/>
			</div>
		</div>
	);
};

export default ParallaxImage;
