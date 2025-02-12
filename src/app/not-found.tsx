import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image from '../assets/img/notFoundImg.webp';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export default function NotFound() {
	return (
		<>
			<Head>
				<meta name='robots' content='noindex' />
			</Head>
			<div className='notFoundPage'>
				<Wrapper className='wrapper'>
					<Image className='image' src={image} alt='' aria-hidden />
					<h1 className='heading'>Strona nie znaleziona</h1>
					<p className='text'>
						Przepraszamy, ale nie mogliśmy znaleźć strony, której szukasz.
					</p>
					<Link href='/'>Wróć do strony głównej</Link>
				</Wrapper>
			</div>
		</>
	);
}
