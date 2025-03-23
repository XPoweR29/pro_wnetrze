import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Link from 'next/link';

import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg';
import Image from 'next/image';
import dev_logo from '../../assets/dev_logo.svg';
import toolsImg from '../../assets/img/tools.svg';
import arrow from '../../assets/icons/icon_arrow.svg';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.flexContainer}>
					<div className={styles.col1}>
						<Link href={'/#start'} className={styles.logo}>
							<Image src={logo} alt='PROWnętrze' />
						</Link>

						<p className={styles.description} itemProp='name'>
							PRO Wnętrze – Remonty i Wykończenia Wnętrz Żywiec, Bielsko-Biała.
						</p>
					</div>

					<address className={styles.col2}>
						<p>
							<a
								href='https://maps.app.goo.gl/qT8ocCPwH2ghQtveA'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.link}>
								ul. Parkowa 43, <span>34-321 Kocierz Moszczanicki</span>
							</a>
						</p>
						<p>
							<a href='tel:+48515484232' className={styles.link}>
								+48 515-484-232
							</a>
						</p>
						<p>
							<a
								href='mailto:prownetrze.zywiec@gmail.com'
								className={styles.link}>
								prownetrze.zywiec@gmail.com
							</a>
						</p>
						<p className={styles.link}>NIP: 553 259 57 98</p>
						<p>
							<a
								href='https://www.instagram.com/prownetrze/profilecard/?igsh=NWxrOGMzazA2M29s'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.link}>
								instagram/@PROWnetrze
							</a>
						</p>
					</address>

					<div className={styles.col3}>
						<div className={styles.container}>
							<Link className={styles.link} href='/uslugi-remontowo-budowlane'>
								<Image src={arrow} alt='' aria-hidden /> usługi remontowe
							</Link>
							<Link className={styles.link} href='/wykonczenia-wnetrz'>
								<Image src={arrow} alt='' aria-hidden /> wykończenia wnętrz
							</Link>
							<Link className={styles.link} href='/tynki-dekoracyjne'>
								<Image src={arrow} alt='' aria-hidden /> tynki dekoracyjne
							</Link>
							<Link href='/polityka-prywatnosci' className={styles.link}>
								<Image src={arrow} alt='' aria-hidden /> Polityka Prywatności
							</Link>
						</div>
						<p className={styles.copyright}>
							© {new Date().getFullYear()} PROWnętrze <br /> Wszelkie prawa
							zastrzeżone.
						</p>
					</div>
				</div>

				<div className={styles.dev_sign}>
					<p>Designed & Developed by</p>
					<a
						href='https://webcraft-studio.pl/'
						target='_blank'
						aria-label='strona webcraft-studio'
						title='Zamów własną stronę internetową!'
						rel='noopener noreferrer'>
						<Image
							src={dev_logo}
							alt='Logo Webcraft Studio – profesjonalne projektowanie stron'
						/>
					</a>
				</div>

				<Image className={styles.toolsImg} src={toolsImg} alt='' aria-hidden />
			</Wrapper>
		</footer>
	);
};
