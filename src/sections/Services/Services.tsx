import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { rubikDirt } from '@/app/layout';
import { serviceList } from '@/data/serviceList';

import styles from './Services.module.scss';
import underline from '../../assets/underline.svg';
import { BrandCarousel } from '@/components/BrandCarousel/BrandCarousel';
import { AnimateServiceItem } from '@/components/AnimateServiceitem/AnimateServiceItem';

export const Services = () => {
	return (
		<section className={styles.services} id='uslugi'>
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						usługi
					</span>
					<h2 className={styles.heading}>
						<span className={styles.word}>
							Profesjonalne
							<img src={underline.src} alt='' aria-hidden />
						</span>
						{''} usługi remontowe i wykończeniowe
					</h2>
				</div>

				<p className={styles.text}>
					Zajmujemy się kompleksowymi usługami remontowo-wykończeniowymi,
					dostosowanymi do indywidualnych potrzeb każdego klienta. Niezależnie
					od tego, czy planujesz odświeżenie mieszkania, remont łazienki, czy
					wykończenie wnętrz – możesz liczyć na naszą fachowość, solidność i
					terminowość. Pracujemy z wykorzystaniem nowoczesnych narzędzi i
					materiałów, aby zapewnić trwałe i estetyczne efekty.
				</p>

				<div className={styles.serviceContainer}>
					{serviceList.map((item, index) => (
							<AnimateServiceItem
								title={item.title}
								image={item.image}
								alt={item.alt}
								isEven={index%2===0}
								key={index}>
								{item.children}
							</AnimateServiceItem>
					))}
				</div>
			</Wrapper>

			<BrandCarousel />
		</section>
	);
};
