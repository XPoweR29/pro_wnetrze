import React from 'react';
import styles from './GalleryCard.module.scss';
import { Icon } from '@iconify/react';
import Image from 'next/image';



export const GalleryCard = ({title, description, imgUrl, number, imgAlt}: GalleryItem) => {
	return (
		<div className={styles.card}>
            <Image className={styles.image} src={imgUrl} alt={imgAlt}/>

			<div className={styles.overlay}>
				<span className={styles.number}>{number}</span>
				<div className={styles.zoom}>
					<Icon icon='solar:magnifer-broken' />
				</div>

				<h3>{title}</h3>
				<p>
                    {description}
				</p>
			</div>
		</div>
	);
};
