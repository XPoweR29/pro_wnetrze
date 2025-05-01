import React from 'react';
import Image from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { FeatureItem } from '@/components/FeatureItem/FeatureItem';
import { rubikDirt } from '@/app/layout';

import styles from './About.module.scss';
import underline from '../../assets/underline.svg';
import icon_list from '../../assets/icons/icon_list.png';
import icon_hands from '../../assets/icons/icon_hands.png';
import icon_quality from '../../assets/icons/icon_quality.png';
import icon_calendar from '../../assets/icons/icon_calendar.png';
import about_img from '../../assets/img/about_image.png';

export const About = () => {
	return (
		<section className={styles.about} id='o-nas'>
			<Wrapper className={styles.wrapper}>
				<div className={styles.flexContainer}>
					<div className={styles.headingContainer}>
						<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
							o nas
						</span>
						<h2 className={styles.heading}>
							Poznaj naszą {''}
							<span className={styles.word}>
								markę
								<Image src={underline} alt='' aria-hidden />
							</span>
						</h2>
					</div>

					<p className={styles.text}>
						PRO Wnętrze Żywiec | Remonty i Wykończenia Wnętrz to firma , która realizuje <strong>kompleksowe remonty</strong>{' '}
						i wykończenia domów oraz mieszkań, zapewniając{' '}
						<strong>najwyższą jakość</strong> usług. Wykorzystujemy nowoczesne
						narzędzia i sprawdzone techniki, co pozwala nam pracować efektywnie
						i precyzyjnie, spełniając oczekiwania naszych klientów. Solidność,{' '}
						<strong>terminowość</strong> i dbałość o detale to wartości, które
						stawiamy na pierwszym miejscu.
					</p>
					<p className={styles.text}>
						Działamy głównie na terenie powiatu Żywieckiego, okolic Bielska-Białej, Andrychowa i Krakowa, oferując
						klientom indywidualnym oraz firmom niezawodne wsparcie przy
						realizacji różnorodnych projektów. Naszym celem jest nie tylko
						dostarczanie usług najwyższej jakości, ale również budowanie{' '}
						<strong>trwałych relacji</strong> opartych na zaufaniu i współpracy.
						Dzięki lokalnemu doświadczeniu i znajomości potrzeb klientów
						jesteśmy partnerem, na którym można polegać.
					</p>

					<div className={styles.features}>
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

				<Image
					className={styles.aboutImg}
					src={about_img}
					alt='prace remontowe'
				/>
			</Wrapper>
		</section>
	);
};
