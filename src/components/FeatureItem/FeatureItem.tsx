import React from 'react';
import styles from './FeatureItem.module.scss';

interface Props {
	icon: string;
	children: React.ReactNode;
	className?: string;
}

export const FeatureItem = ({ icon, children, className }: Props) => {
	return (
		<div className={styles.feature}>
			<img src={icon} alt='' aria-hidden />
			<p>{children}</p>
		</div>
	);
};
