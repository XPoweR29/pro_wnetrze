import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import { rubik } from '@/app/layout';

import styles from './Start.module.scss';
import Link from 'next/link';
import social_img from '../../assets/icons/icon_social.svg';
import instagram from '../../assets/icons/icon_instagram.svg';
import arrow from '../../assets/icons/icon_arrow.svg';
import ParallaxVideo from '@/components/ParallaxImage/ParallaxVideo';

export const Start = () => {
	return (
		<section className={styles.home} id='start'>
			<ParallaxVideo
				src={'/video-bg.mp4'}
				speed={-0.7}
				className={styles.parallax}
			/>

			<Wrapper className={styles.wrapper}>
				<h1 className={`${styles.heading} ${rubik.className}`}>
					PRO Wnętrze – Remonty i Wykończenia Wnętrz Żywiec, Bielsko-Biała
				</h1>
				<p className={styles.text}>
					<span>Planujesz remont mieszkania lub domu?</span>
					<span>
						{' '}
						Zaufaj naszym fachowcom i ciesz się nową jakością przestrzeni!
					</span>
				</p>

				<div className={styles.buttons}>
					<Link href='#kontakt' className={styles.contact}>
						Zapytaj o wycenę
					</Link>
					<Link href='#portfolio' className={styles.portfolio}>
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
