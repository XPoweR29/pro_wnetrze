import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { rubik } from '@/app/layout';

import styles from './LocationStart.module.scss';
import Link from 'next/link';
import social_img from '../../assets/icons/icon_social.svg';
import instagram from '../../assets/icons/icon_instagram.svg';
import arrow from '../../assets/icons/icon_arrow.svg';
import ParallaxVideo from '@/components/ParallaxImage/ParallaxVideo';

interface Props {
	className?: string;
	titleRow1: string;
	titleRow2?: string;
	text1?: string;
	text2?: string;
}

export const LocationStart = ({titleRow1, titleRow2, text1, text2, className}: Props) => {
	return (
		<section className={`${styles.start} ${className}`}>
			<ParallaxVideo
				src={'/video-bg.mp4'}
				speed={-0.7}
				className={styles.parallax}
			/>

			<Wrapper className={styles.wrapper}>
				<h1 className={`${styles.heading} ${rubik.className}`}>
					<span>{titleRow1}</span>
					<span>{' '}{titleRow2}</span>
				</h1>
				<p className={styles.text}>
					<span>{text1}</span>
					<span> {text2}</span>
				</p>

				<div className={styles.buttons}>
					<Link href='/kontakt' className={styles.contact}>
						Zapytaj o wycenę
					</Link>
					<Link href='/#portfolio' className={styles.portfolio}>
						<span>Nasze realizacje</span>
						<Image src={arrow} className={styles.icon} alt='' aria-hidden />
					</Link>
				</div>

				<div className={styles.socialLink}>
					<Image
						className={styles.writing}
						src={social_img}
						alt=''
						aria-hidden
					/>
					<a
						href='https://www.instagram.com/prownetrze/profilecard/?igsh=NWxrOGMzazA2M29s'
						className={styles.link}
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							className={styles.icon}
							src={instagram}
							alt='link do instagrama'
						/>
					</a>
				</div>
			</Wrapper>

			<div className={styles.divider} />
		</section>
	);
};
