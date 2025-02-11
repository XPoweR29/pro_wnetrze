import React from 'react';
import styles from './ServiceItem.module.scss';
import Image from 'next/image';

export const ServiceItem = ({
	className,
	title,
	children,
	image,
	alt,
	isEven
}: ServiceItem) => {
	return (
		<div className={`${className} ${styles.item} ${isEven?styles.even:''}`}>
			<Image className={styles.photo} src={image} alt={alt} />
			<div className={styles.flexContainer}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{children}</p>
			</div>
		</div>
	);
};
