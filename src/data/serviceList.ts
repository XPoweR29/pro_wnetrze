import keys from '../assets/img/photo_keys.png';
import floor from '../assets/img/photo_floor.png';
import painting from '../assets/img/photo_painting.png';
import sanding from '../assets/img/photo_sanding.png';
import tiling from '../assets/img/photo_tiling.png';
import viles from '../assets/img/photo_viles.webp';

export const serviceList: ServiceItem[] = [
	{
		title: 'Kompleskowe wykończenia wnętrz',
		children:
			'Zapewniamy kompleksowe wykończenia wnętrz, od stanu deweloperskiego po gotowe do zamieszkania przestrzenie. Specjalizujemy się także w adaptacji poddaszy, przekształcając niewykorzystane przestrzenie w funkcjonalne i komfortowe wnętrza. Dbamy o każdy detal, oferując wysokiej jakości materiały i precyzyjne wykonanie.',
		image: keys,
		alt: 'Wykończenia wnętrz oraz adaptacja poddaszy. Kompleksowe remonty domów i mieszkań',
	},
	{
		title: 'Gładzie gipsowe i montaż płyt G-K',
		children:
			'Oferujemy profesjonalne wykonywanie gładzi gipsowych, zapewniając idealnie gładkie powierzchnie gotowe do malowania lub tapetowania. Specjalizujemy się w montażu płyt kartonowo-gipsowych, w tym budowie ścianek działowych, zabudowie wnęk oraz montażu sufitów podwieszanych jedno- i wielopoziomowych.',
		image: sanding,
		alt: 'Gipsowanie ścian oraz montaż płyt gipsowo-kartonowych. Wykonywanie gładzi dla idealnie gładkich powierzchni.',
	},
	{
		title: 'Malowanie i dekoracje ścian',
		children:
			'Stosujemy nowoczesne techniki malowania natryskowego, dzięki czemu uzyskujemy idealnie gładkie i trwałe powierzchnie. W naszej ofercie jest  również malowanie elewacji oraz tapetowanie wnętrz.',
		image: painting,
		alt: 'Malowanie natryskowe, tapetowanie wnętrz i elewacji, dekoracyjne wykończenia ścian.',
	},
	{
		title: 'Tapety z włókna szklanego',
		children:
			'Montaż tapet z włókna szklanego to idealne rozwiązanie do wnętrz wymagających trwałości i odporności na wilgoć. Wzmacnia ściany, maskuje pęknięcia i nadaje się do malowania. Doskonała do łazienek, kuchni, biur i klatek schodowych. Zapewniamy fachowy montaż i doradztwo.',
		image: viles,
		alt: 'Tapeta z włókna szklanego – trwałe i odporne wykończenie ścian, idealne do łazienek, kuchni i biur. Montaż i malowanie tapet wzmacniających powierzchnię.',
	},
	{
		title: 'Układanie podłóg i paneli',
		children:
			'Zapewniamy precyzyjny montaż podłóg drewnianych, parkietów i paneli, które staną się trwałą i elegancką podstawą Twojego wnętrza. Oferujemy także montaż drzwi wewnętrznych i zewnętrznych, dopasowanych do stylu wnętrza.',
		image: floor,
		alt: 'Montaż podłogi drewnianej, parkietu i paneli dla trwałości i eleganckiego wykończenia wnętrza.',
	},
	{
		title: 'Kafelkowanie i remonty łazienek',
		children:
			'Realizujemy kompleksowe remonty łazienek, od układania płytek ceramicznych po montaż wyposażenia. Tworzymy łazienki funkcjonalne i stylowe, dopasowane do Twoich potrzeb. Jeśli szukasz specjalistów do kafelkowania lub remontu łazienki, możemy pomóc na każdym etapie realizacji.',
		image: tiling,
		alt: 'Remont łazienki – układanie płytek ceramicznych, montaż armatury i kompleksowe wykończenie.',
	},
];
