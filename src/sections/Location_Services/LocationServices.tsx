import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { rubikDirt } from '@/app/layout';

import styles from './LocationServices.module.scss';
import underline from '../../assets/underline.svg';
import { BrandCarousel } from '@/components/BrandCarousel/BrandCarousel';
import Image from 'next/image';
import { ServiceBox } from '@/components/ServiceBox/ServiceBox';
import { renovationServicesLinks } from '@/data/navLinks';
import { interiorDesignLinks } from '@/data/navLinks';
import { decorationsLinks } from '@/data/navLinks';

import renovationImg from '../../assets/img/uslugi-remontowe.jpg';
import renovation2Img from '../../assets/img/kompleksowy-remont.webp';
import decorationImg from '../../assets/img/dekorowanie-scian.webp';

interface Props {
	className?: string;
	heading: string;
	underline_word?: string;
	text: string;
	servicesArr: ServiceBoxType[];
}

export const LocationServices = ({
	className,
	heading,
	underline_word,
	text,
	servicesArr,
}: Props) => {
	return (
		<section className={`${styles.services} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						usługi
					</span>
					<h2 className={styles.heading}>
						<span className={styles.word}>
							{underline_word}
							<Image src={underline} alt='' aria-hidden />
						</span>
						{''} {heading}
					</h2>
				</div>

				<p className={styles.text}>{text}</p>

				<div className={styles.serviceContainer}>
					<ServiceBox
						title={servicesArr[0].title}
						image={servicesArr[0].image}
						imageAlt={servicesArr[0].imageAlt}
						links={renovationServicesLinks}>
						{servicesArr[0].content}
					</ServiceBox>

					<ServiceBox
						title={servicesArr[1].title}
						image={servicesArr[1].image}
						imageAlt={servicesArr[1].imageAlt}
						links={interiorDesignLinks}
						reverse>
						{servicesArr[1].content}
					</ServiceBox>

					<ServiceBox
						title={servicesArr[2].title}
						image={servicesArr[2].image}
						imageAlt={servicesArr[2].imageAlt}
						links={decorationsLinks}>
						{servicesArr[2].content}
					</ServiceBox>
				</div>
			</Wrapper>

			<BrandCarousel className={styles.carousel} />
		</section>
	);
};
