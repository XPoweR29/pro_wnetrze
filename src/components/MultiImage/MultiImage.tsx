'use client'

import React, { useRef } from 'react';
import styles from './MultiImage.module.scss';
import Image, { StaticImageData } from 'next/image';
import { useInView } from 'framer-motion';

interface Props {
	img1: string |StaticImageData;
	img2: string |StaticImageData;
	img3: string |StaticImageData;
	img4: string |StaticImageData;
	className?: string;
}

export const MultiImage = ({ img1, img2, img3, img4, className }: Props) => {
	const imgRef = useRef(null);
	const inView = useInView(imgRef, {amount: 0.7, once: true});

	return (
		<div className={`${styles.multiImg} ${className} ${inView?'fade-in-right':''}`} ref={imgRef}>
			<Image className={styles.image1} src={img1} alt='kompleksowe remonty'/>
			<Image className={styles.image2} src={img2} alt='wykończenia wnętrz pod klucz'/>
			<Image className={styles.image3} src={img3} alt='dekoracje ścian'/>
			<Image className={styles.image4} src={img4} alt='usługi remontowe'/>
		</div>
	);
};
