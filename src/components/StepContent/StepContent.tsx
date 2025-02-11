import React, { useRef } from 'react';
import styles from './StepContent.module.scss';
import Image, { StaticImageData } from 'next/image';
import { useInView } from 'framer-motion';

interface Props {
    title: string;
    content: string;
    image: string | StaticImageData;
}

export const StepContent = ({title, content, image}: Props) => {
	const stepRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(stepRef, {
		amount: 0.5,
		once: true,
	});

	return (
		<div className={`${styles.content} ${isInView ? styles['content--animate'] : ''}`} ref={stepRef}>
			<Image className={styles.image} src={image} alt='' aria-hidden />
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.describe}>{content}</p>
		</div>
	);
};
