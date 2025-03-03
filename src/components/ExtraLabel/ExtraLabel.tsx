import React from 'react';
import styles from './ExtraLabel.module.scss';
import Image from 'next/image';
import underline from '../../assets/underline.svg';

interface Props {
    location: string;
    children: React.ReactNode;
}


export const ExtraLabel = ({ location, children }: Props) => {
	return (
		<div className={styles.extraLabel}>
			<div className={styles.title}>
				<h2>Remonty {location}</h2>
				<h3>
					<span className={styles.word}>
						Fachowa
						<Image src={underline} alt='' aria-hidden />
					</span>{' '}
					realizacja od A do Z!
				</h3>
			</div>

			<p>{children}</p>
		</div>
	);
};
