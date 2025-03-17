'use client';
import { useEffect, useRef, useState, FC } from 'react';
import styles from './ParallaxVideo.module.scss';
import Loading from '@/app/loading';
import { useAppContext } from '@/hooks/useAppContext';

interface Props {
	src: string;
	speed?: number;
	className?: string;
}

const ParallaxVideo: FC<Props> = ({ src, speed = 0.5, className }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [offset, setOffset] = useState(0);
	const { isBgLoaded, setIsBgLoaded } = useAppContext();

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

	useEffect(() => {
		const handleLoad = () => {
			setIsBgLoaded(true);
		};

		if (document.readyState === 'complete') {
			handleLoad();
		} else {
			window.addEventListener('load', handleLoad);
		}

		return () => window.removeEventListener('load', handleLoad);
	}, [setIsBgLoaded]);

	return (
		<>
			{!isBgLoaded ? (
				<Loading />
			) : (
				<div
					ref={containerRef}
					className={`${styles.container} ${className || ''}`}>
					<div
						className={styles.parallax}
						style={{ transform: `translateY(${offset}px)` }}>
						<video 
						preload='auto'
						 autoPlay 
						 loop 
						 muted 
						 playsInline 
						 className={styles.video}>
							<source src={src} type='video/mp4' />
						</video>
					</div>
				</div>
			)}
		</>
	);
};

export default ParallaxVideo;
