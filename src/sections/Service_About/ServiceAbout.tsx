'use client';

import React from 'react';
import Image from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';

import styles from './ServiceAbout.module.scss';
import underline from '../../assets/underline.svg';
import { ServicePost } from '@/types/servicePost.type';
import { ServicePosts } from '@/components/ServicePosts/ServicePosts';

interface Props {
	className?: string;
	heading: string | React.ReactNode;
	underline_word: string;
	text: string | React.ReactNode;
	posts: ServicePost[];
}

export const ServiceAbout = ({
	className,
	heading,
	underline_word,
	text,
	posts
}: Props) => {
	return (
		<section className={`${styles.about} ${className}`} id='about_section'>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					<span className={styles.word}>
						{underline_word}
						<Image src={underline} alt='' aria-hidden />
					</span>{' '}
					{heading}
				</h2>
				<p className={styles.text}>{text}</p>

				<ServicePosts posts={posts} />
			</Wrapper>
		</section>
	);
};
