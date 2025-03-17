import React from 'react';
import Image from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { FeatureItem } from '@/components/FeatureItem/FeatureItem';
import { rubikDirt } from '@/app/layout';

import styles from './LocationAbout.module.scss';
import underline from '../../assets/underline.svg';
import icon_list from '../../assets/icons/icon_list.png';
import icon_hands from '../../assets/icons/icon_hands.png';
import icon_quality from '../../assets/icons/icon_quality.png';
import icon_calendar from '../../assets/icons/icon_calendar.png';
import about_img from '../../assets/img/about_image.png';

interface Props {
	className?: string;
	heading: string;
	underline_word: string;
	paragraph1: string;
	paragraph2?: string;
	featureTitle?: string;
}

export const LocationAbout = ({
	className,
	heading,
	underline_word,
	paragraph1,
	paragraph2,
	featureTitle
}: Props) => {
	return (
		<section className={`${styles.about} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.flexContainer}>
					<div className={styles.headingContainer}>
						<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
							o nas
						</span>

						<h2 className={styles.heading}>
							{heading} {''}
							<span className={styles.word}>
								{underline_word}
								<Image src={underline} alt='' aria-hidden />
							</span>
						</h2>
					</div>

					<p className={styles.text}>{paragraph1}</p>
					<p className={styles.text}>{paragraph2}</p>

					<div className={styles.features}>
						<h3 className={styles.title}>{featureTitle}</h3>

						<div className={styles.container}>
							<FeatureItem icon={icon_list} delay={0}>
								Zgodnie z Twoimi oczekiwaniami
							</FeatureItem>
							<FeatureItem icon={icon_hands} delay={0.2}>
								Zaufanie i współpraca
							</FeatureItem>
							<FeatureItem icon={icon_calendar} delay={0.4}>
								Terminowość i niezawodność
							</FeatureItem>
							<FeatureItem icon={icon_quality} delay={0.6}>
								Najwyższa jakość usług
							</FeatureItem>
						</div>
					</div>
				</div>

				<Image
					className={styles.aboutImg}
					src={about_img}
					alt='prace remontowe'
				/>
			</Wrapper>
		</section>
	);
};
