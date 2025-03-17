import React from 'react';
import styles from './ServicePosts.module.scss';
import { ServicePost } from '@/types/servicePost.type';
import arrowIcon from '../../assets/icons/circle-arrow.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
	posts: ServicePost[];
}

export const ServicePosts = ({ posts }: Props) => {
	return (
		<section className={styles.posts}>
			<div className={styles.postsContainer}>
				{posts.map(({ text, title, image, imageAlt }, i) => (
					<div
						className={`${styles.post} ${image ? styles.imaged : ''}`}
						key={i}>
						<div className={styles.container}>
							<h2 className={styles.heading}>
								<motion.div
									className={styles.icon}
									initial={{ opacity: 0, x: -25 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, ease: 'easeOut' }}
									viewport={{ once: true, amount: 0, margin: "-100px 0px" }}>
									<Image src={arrowIcon} alt='' aria-hidden />
								</motion.div>

								{title}
							</h2>
							<p className={styles.text}>{text}</p>
						</div>

						{image && (
							<motion.div
								className={styles.motionImgContainer}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: 'easeOut' }}
								viewport={{ once: true, amount: 0.5 }}>
								<Image
									className={styles.postImage}
									src={image}
									alt={imageAlt!}
								/>
							</motion.div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};
