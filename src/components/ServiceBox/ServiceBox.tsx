import React from 'react';
import styles from './ServiceBox.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import icon from '../../assets/icons/circle-arrow.png';

interface Props {
	title: string;
	links: LinkData[];
	image: string | StaticImageData;
	imageAlt: string;
	reverse?: boolean;
	children?: React.ReactNode;
}
export const ServiceBox = ({
	links,
	image,
	imageAlt,
	title,
	reverse,
	children,
}: Props) => {
	return (
		<section
			className={`${styles.serviceBox} ${reverse ? styles.reverse : ''}`}>
			<div className={styles.linkContainer}>
				<h3 className={reverse ? styles.reverse : ''}>{title}</h3>
				<p className={`${styles.text} ${reverse ? styles.reverse : ''}`}>
					{children}
				</p>

				<div
					className={`${styles.flexContainer} ${
						reverse ? styles.reverse : ''
					}`}>
					<Image
						src={image}
						alt={imageAlt}
						className={`${styles.serviceImage}`}
					/>
					<ul className={styles.linkList}>
						{links.map(({ slug, label }) => (
							<li key={slug}>
								<Image src={icon} alt='' aria-hidden />
								<Link href={`/uslugi-remotnowe/${slug}`}>{label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
