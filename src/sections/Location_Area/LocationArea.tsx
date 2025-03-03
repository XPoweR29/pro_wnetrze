import React from 'react';
import styles from './LocatoinArea.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import underline from '../../assets/underline.svg';
import Image from 'next/image';
import { Locations } from '@/components/Locations/Locations';
import { ExtraLabel } from '@/components/ExtraLabel/ExtraLabel';

export const LocationArea = () => {
	return (
		<section className={styles.area}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<h2 className={styles.heading}>
						<span className={styles.word}>
							Gdzie
							<Image src={underline} alt='' aria-hidden />
						</span>
						{''} świadczymy usługi remontowo wykończeniowe?
					</h2>
				</div>
				<div className={styles.text}>
					Nasza firma oferuje kompleksowe remonty i wykończenia wnętrz na
					terenie województwa Śląskiego i Małopolskiego, zapewniając najwyższą
					jakość usług oraz terminową realizację. Współpracujemy zarówno z
					klientami indywidualnymi, jak i firmami, wykonując remonty mieszkań,
					domów i lokali użytkowych. Działamy lokalnie, co pozwala nam sprawnie
					realizować projekty i dostosowywać ofertę do specyfiki danego regionu.
				</div>

				<iframe
					className={styles.map}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82567.17693981451!2d19.1275050383832!3d49.70657924019559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47142623c76da4bb%3A0x85a9dc5388d3f017!2zxbt5d2llYw!5e0!3m2!1spl!2spl!4v1741017485831!5m2!1spl!2spl'
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>

				<Locations />
				<ExtraLabel location='Żywiec'>
					Jeśli chcesz całkowicie odmienić swoją przestrzeń przyjemnością
					wykonamy kompleksowe prace remontowe, które zwiększą wygodę i
					funkcjonalność Twojego domu, apartamentu, biura czy obiektu
					komercyjnego. Realizujemy remonty – od drobnych modernizacji po pełne
					wykończenia wnętrz. Dzięki naszemu doświadczeniu i dbałości o detale
					możesz liczyć na terminową realizację oraz najwyższą jakość wykonania.
				</ExtraLabel>
			</Wrapper>
		</section>
	);
};
