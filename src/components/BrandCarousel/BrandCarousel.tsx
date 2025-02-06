'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import styles from './BrandCarousel.module.scss';

import atlasLogo from '../../assets/brands/atlas.png';
import ceresitLogo from '../../assets/brands/ceresit.png';
import dekoralLogo from '../../assets/brands/dekoral.png';
import duluxLogo from '../../assets/brands/dulux.png';
import fluggerLogo from '../../assets/brands/flugger.png';
import knaufLogo from '../../assets/brands/knauf.png';
import mapeiLogo from '../../assets/brands/mapei.png';
import soudalLogo from '../../assets/brands/soudal.png';
import sniezkaLogo from '../../assets/brands/śnieżka.jpg';
import tikkurilaLogo from '../../assets/brands/tikkurila.png';
import weberLogo from '../../assets/brands/weber.png';
import eggerLogo from '../../assets/brands/egger.png';
import Marquee from 'react-fast-marquee';

const brands: {name: string; src: StaticImageData}[] = [
	{ name: 'Atlas', src: atlasLogo },
	{ name: 'Ceresit', src: ceresitLogo },
	{ name: 'Dekoral', src: dekoralLogo },
	{ name: 'Dulux', src: duluxLogo },
	{ name: 'Flugger', src: fluggerLogo },
	{ name: 'Knauf', src: knaufLogo },
	{ name: 'Mapei', src: mapeiLogo },
	{ name: 'Soudal', src: soudalLogo },
	{ name: 'Śnieżka', src: sniezkaLogo },
	{ name: 'Tikkurila', src: tikkurilaLogo },
	{ name: 'Weber', src: weberLogo },
	{ name: 'Egger', src: eggerLogo },
];
export const BrandCarousel = () => {
	return (
		<Marquee 
			className={styles.carousel} 
			speed={35}
		>
			{brands.map((brandLogo) => (
				<Image src={brandLogo.src} alt={brandLogo.name} key={brandLogo.name}/>
			))}
		</Marquee>
	);
};
