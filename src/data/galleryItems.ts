import bathroom from '../assets/img/bathroom.png';
import kitchen from '../assets/img/kitchen.png';
import room1 from '../assets/img/room.png';
import room2 from '../assets/img/guestroom.png';

export const galleryItems: Omit<GalleryItem, 'number'>[] = [
	{
		title: 'Nowoczesna łazienka',
		description:
			'Projekt obejmował kompleksowe kafelkowanie, montaż wyposażenia oraz instalację oświetlenia LED, co nadało wnętrzu elegancji i funkcjonalności.',
		imgUrl: bathroom,
		imgAlt:
			'Nowoczesna łazienka – kompleksowe kafelkowanie, montaż wyposażenia i oświetlenia LED',
	},
	{
		title: 'Mała kuchnia - pełna funkcjonalność',
		description:
			'Pomieszczenie zostało zaadaptowane na małą, funkcjonalną kuchnię. Wyrównano ściany za pomocą płyt G-K, wykonano gładzie i malowanie, a estetyczna glazura oraz oświetlenie LED podkreśliły styl wnętrza.',
		imgUrl: kitchen,
		imgAlt:
			'Adaptacja pomieszczenia na małą kuchnię – montaż płyt G-K, gładzie, kafelkowanie i oświetlenie LED.',
	},
	{
		title: 'Przytulna przestrzeń',
		description:
			'Pomieszczenie przeszło gruntowną odnowę – usunięto stary, zniszczony tynk, wyrównano ściany i wykonano nowe gładzie. Renowacja drewnianej podłogi i świeże malowanie nadały wnętrzu nowoczesny, elegancki wygląd.',
		imgUrl: room1,
		imgAlt:
			'Kompleksowa renowacja wnętrza – usunięcie starego tynku, gładzie, malowanie i odnowienie podłogi.',
	},
	{
		title: 'Salon po metamorfozie',
		description:
			'Wnętrze zyskało nowoczesnego wyglądu dzięki renowacji parkietu, położeniu tapety z włókna szklanego i odświeżeniu ścian jasną farbą, co nadało wnętrzu elegancji i przestronności.',
		imgUrl: room2,
		imgAlt:
			'Metamorfoza salonu – odnowiony parkiet, tapeta z włókna szklanego i malowanie ścian.',
	},
];
