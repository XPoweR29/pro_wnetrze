import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { rubikDirt } from '@/app/layout';
import { GalleryCard } from '@/components/GalleryCard/GalleryCard';

import styles from './Portfolio.module.scss';
import underline from '../../assets/underline.svg';
import { galleryItems } from '@/data/galleryItems';
import { Reviews } from '../Reviews/Reviews';
import bgImg from '../../assets/img/img_livingroom.jpg';
import FixedBackground from '@/components/FixedBackground/FixedBackground';

export const Portfolio = () => {
	return (
		<section className={styles.portfolio} id='portfolio'>
			<FixedBackground src={bgImg} className={styles.fixedBackground}/>
			<div className={styles.divider} />
			<div className={styles.divider} />

			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						galeria
					</span>
					<h2 className={styles.heading}>
						Zobacz, co możemy dla {''}
						<span className={styles.word}>
							Ciebie
							<img src={underline.src} alt='' aria-hidden />
						</span>
						{''} zrobić
					</h2>
				</div>
				<div className={styles.text}>
					Zobacz efekty naszych prac – od kompleksowych remontów łazienek po
					precyzyjne wykończenia wnętrz. Dbamy o każdy szczegół, dostarczając
					wnętrza, które spełniają oczekiwania naszych klientów.
				</div>

				<div className={styles.gallery}>
					{galleryItems.map(({ title, description, imgUrl, imgAlt }, index) => (
						<GalleryCard
							title={title}
							description={description}
							imgUrl={imgUrl}
							imgAlt={imgAlt}
							number={`0${index + 1}.`}
							key={index}
						/>
					))}
				</div>

				<Reviews className={styles.commentSection} />
			</Wrapper>
		</section>
	);
};
