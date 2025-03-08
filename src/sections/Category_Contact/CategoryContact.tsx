import React from 'react';
import styles from './CateogryContact.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import underline from '../../assets/underline.svg';
import Image from 'next/image';
import { Locations } from '@/components/Locations/Locations';
import { CtaFrame } from '@/components/CtaFrame/CtaFrame';

export const CategoryContact = ({
	helpWithHeading,
	children,
}: {
	helpWithHeading: string;
	children: React.ReactNode;
}) => {
	return (
		<section className={styles.area}>
			<div className={styles.divider} />

			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<h2 className={styles.heading}>
						Potrzebujesz
						<span className={styles.word}>
							{' '}
							pomocy
							<Image src={underline} alt='' aria-hidden />
						</span>
						{` ${helpWithHeading}`}
					</h2>
				</div>
				<p className={styles.text}>{children}</p>

				<CtaFrame className={styles.cta} />

				<Locations />
			</Wrapper>
		</section>
	);
};
