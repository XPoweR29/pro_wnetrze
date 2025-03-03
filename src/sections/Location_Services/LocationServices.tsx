import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { rubikDirt } from '@/app/layout';

import styles from './LocationServices.module.scss';
import underline from '../../assets/underline.svg';
import { BrandCarousel } from '@/components/BrandCarousel/BrandCarousel';
import Image from 'next/image';
import { ServiceBox } from '@/components/ServiceBox/ServiceBox';
import { renovationServicesLinks } from '@/data/navLinks';
import { interiorDesignLinks } from '@/data/navLinks';
import { decorationsLinks } from '@/data/navLinks';

import renovationImg from '../../assets/img/uslugi-remontowe.jpg';
import renovation2Img from '../../assets/img/kompleksowy-remont.webp';
import decorationImg from '../../assets/img/dekorowanie-scian.webp';

interface Props {
	className?: string;
	heading: string;
	underline_word?: string;
	text: string;
}

export const LocationServices = ({
	className,
	heading,
	underline_word,
	text,
}: Props) => {
	return (
		<section className={`${styles.services} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.headingContainer}>
					<span className={`${styles.bg_heading} ${rubikDirt.className}`}>
						usługi
					</span>
					<h2 className={styles.heading}>
						<span className={styles.word}>
							{underline_word}
							<Image src={underline} alt='' aria-hidden />
						</span>
						{''} {heading}
					</h2>
				</div>

				<p className={styles.text}>{text}</p>

				<div className={styles.serviceContainer}>
					<ServiceBox
						title='Usługi remontowe w Żywcu'
						image={renovationImg}
						imageAlt='usługi remontowe w Żywcu i okolicach'
						links={renovationServicesLinks}>
						Potrzebujesz solidnej ekipy remontowej w Żywcu? Nasza firma zajmuje
						się kompleksową realizacją prac remontowych – od przygotowania
						powierzchni po końcowe wykończenie. Wspieramy zarówno drobne
						poprawki, jak i duże projekty obejmujące malowanie ścian,
						tapetowanie, montaż sufitów podwieszanych czy gładzenie tynków.
						Dzięki wieloletniemu doświadczeniu zapewniamy terminowość i wysoką
						jakość usług.
					</ServiceBox>

					<ServiceBox
						title='Żywiec wykończenia wnętrz'
						image={renovation2Img}
						imageAlt='Wykończenia wnętrz pod klucz w Żywcu'
						links={interiorDesignLinks}
						reverse>
						Marzysz o pięknie wykończonym wnętrzu? Nasz zespół specjalizuje się
						w kompleksowych wykończeniach mieszkań i domów w Żywcu i okolicach.
						Oferujemy m.in. remonty łazienek, adaptacje poddaszy, układanie
						podłóg, a także montaż stolarki okiennej. Stawiamy na profesjonalne
						doradztwo oraz indywidualne podejście do każdego projektu, abyś mógł
						cieszyć się wymarzonym efektem końcowym.
					</ServiceBox>

					<ServiceBox
						title='Techniki dekoracyjne'
						image={decorationImg}
						imageAlt='Tynki dekoracyjne'
						links={decorationsLinks}>
						Chcesz nadać wnętrzu unikalny charakter? Proponujemy szereg
						dekoracyjnych rozwiązań, które wyróżnią Twoje wnętrze. Wykonujemy
						m.in. imitację betonu, glinkę wenecką, trawertyn czy tynki
						dekoracyjne, dodając przestrzeni elegancji i niepowtarzalnego stylu.
						Zadbamy o odpowiedni dobór materiałów i perfekcyjne wykonanie, tak
						aby efekt zachwycał przez lata.
					</ServiceBox>
				</div>
			</Wrapper>

			<BrandCarousel className={styles.carousel}/>
		</section>
	);
};
