import React from 'react';
import styles from './LocatoinArea.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import underline from '../../assets/underline.svg';
import Image from 'next/image';
import { Locations } from '@/components/Locations/Locations';
import { ExtraLabel } from '@/components/ExtraLabel/ExtraLabel';

export const LocationArea = ({
	location,
	children,
	mapHref
}: {
	location: string;
	children: React.ReactNode;
	mapHref: string;
}) => {
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
					src={mapHref}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>

				<Locations />
				<ExtraLabel location={location}>{children}</ExtraLabel>
			</Wrapper>
		</section>
	);
};
