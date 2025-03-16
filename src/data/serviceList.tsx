import keys from '../assets/img/photo_keys.png';
import decorations from '../assets/img/wykonczenia-scian-beton.webp';
import renovations from '../assets/img/uslugi-remontowo-budowlane.webp';
import icon from '../assets/icons/circle-arrow.png';

import Link from 'next/link';
import { iconExists } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

export const serviceList: ServiceItem[] = [
	{
		title: (
			<Link href='/uslugi-remontowo-budowlane'>
				<Image src={icon} alt='' aria-hidden /> Kompleksowe usługi remontowe
			</Link>
		),
		alt: 'Remonty wnętrz',
		image: renovations,
		children: (
			<>
				Kompleksowo realizujemy wszelkie usługi remontowe — od drobnych prac
				wykończeniowych po generalne remonty mieszkań i domów. Zajmujemy się
				m.in. układaniem płytek, glazurnictwem, montażem podłóg, a także
				renowacją łazienek i adaptacją pomieszczeń. Każde zlecenie traktujemy
				indywidualnie, dbając o precyzyjne wykonanie i terminowość.{' '}
				<Link href='/uslugi-remontowo-budowlane'>Dowiedz się więcej</Link>.
			</>
		),
	},
	{
		title: (
			<Link href='/wykonczenia-wnetrz'>
				<Image src={icon} alt='' aria-hidden /> Wykończenia wnętrz
			</Link>
		),
		alt: 'Wykończenia wnętrz',
		image: keys,
		children: (
			<>
				Zapewniamy profesjonalne wykończenia wnętrz, dostosowane do potrzeb i
				wizji klienta. Wykonujemy montaż płyt G-K, adaptacje poddaszy,
				tapetowanie, malowanie oraz montaż drzwi i paneli. Naszym celem jest
				stworzenie funkcjonalnych, estetycznych i trwałych przestrzeni, które
				spełnią oczekiwania nawet najbardziej wymagających klientów.{' '}
				<Link href='/wykonczenia-wnetrz'>
					Sprawdź szczegóły
				</Link>
				.
			</>
		),
	},
	{
		title: (
			<Link href='/tynki-dekoracyjne'>
				<Image src={icon} alt='' aria-hidden /> Tynki dekoracyjne
			</Link>
		),
		alt: 'Tynki dekoracyjne',
		image: decorations,
		children: (
			<>
				Specjalizujemy się w nakładaniu wysokiej jakości tynków dekoracyjnych,
				takich jak imitacja betonu, stiuki weneckie czy glinka wenecka. Dzięki
				naszym usługom nadasz ścianom oryginalny wygląd i elegancję. Oferujemy
				fachowe doradztwo w wyborze odpowiedniego efektu i precyzyjne wykonanie,
				które podkreśli charakter Twoich wnętrz.{' '}
				<Link href='/tynki-dekoracyjne'>
					Poznaj ofertę
				</Link>
				.
			</>
		),
	},
];
