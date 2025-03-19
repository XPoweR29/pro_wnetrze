import React from 'react';
import backgroundImage from '../../../assets/img/układanie-podłóg.webp';
import styles from './index.module.scss';

import { Metadata } from 'next';
import { ServiceStart } from '@/sections/Service_Start/ServiceStart';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CategoryFeatures } from '@/components/CategoryFeatures/CategoryFeatures';
import { CategoryContact } from '@/sections/Category_Contact/CategoryContact';
import { ServiceAbout } from '@/sections/Service_About/ServiceAbout';
import underline from '../../../assets/underline.svg';

import image1 from '../../../assets/img/ukladanie-paneli-podlogowych.webp';
import image2 from '../../../assets/img/ukladanie-paneli-winylowych.webp';
import { ServicePost } from '@/types/servicePost.type';
import Image from 'next/image';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id':
		'https://pro-wnetrze.pl/wykonczenia-wnetrz/ukladanie-paneli-parkietow#service',
	isPartOf: {
		'@type': 'CollectionPage',
		'@id': 'https://pro-wnetrze.pl/wykonczenia-wnetrz',
	},
	name: 'Układanie podłóg – montaż partkietu i układanie paneli podłogowych',
	description:
		'Profesjonalne układanie podłóg – montaż paneli podłogowych, parkietu i paneli winylowych. Oferujemy także cyklinowanie i pomoc w wyborze wzoru podłogi.',
	provider: {
		'@id': 'https://pro-wnetrze.pl#business',
	},
	serviceType: [
		'Układanie podłóg – montaż i wykończenie',
		'Profesjonalne układanie paneli podłogowych',
		'Instalacja i montaż paneli podłogowych',
		'Układanie podłóg winylowych – trwałość i estetyka',
		'Parkiety drewniane – układanie i konserwacja',
		'Renowacja i cyklinowanie parkietu',
		'Nowoczesne sposoby układania paneli',
		'Koszt renowacji drewnianej podłogi',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi montażu i układania podłóg',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż paneli podłogowych – solidne i estetyczne wykonanie',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Układanie paneli podłogowych – różne wzory i techniki montażu',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Układanie podłóg winylowych – wodoodporne i trwałe podłogi',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Montaż parkietu – klasyczne i nowoczesne układy desek',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Cyklinowanie parkietu – profesjonalna renowacja drewnianych podłóg',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Sposoby układania paneli – od klasycznych po nowoczesne wzory',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Koszt cyklinowania parkietu – indywidualna wycena i doradztwo',
				},
			},
		],
	},
};

export const metadata: Metadata = {
	title: 'Układanie podłóg – montaż partkietu i układanie paneli podłogowych',
	description:
		'Profesjonalne układanie podłóg – montaż paneli podłogowych, parkietu i paneli winylowych. Oferujemy także cyklinowanie i pomoc w wyborze wzoru podłogi.',

	alternates: {
		canonical:
			'https://pro-wnetrze.pl/wykonczenia-wnetrz/ukladanie-paneli-parkietow',
	},

	openGraph: {
		title: 'Układanie podłóg – montaż partkietu i układanie paneli podłogowych',
		description:
			'Profesjonalne układanie podłóg – montaż paneli podłogowych, parkietu i paneli winylowych. Oferujemy także cyklinowanie parkietu i doradztwo w wyborze wzoru podłogi. ',
		url: 'https://pro-wnetrze.pl/wykonczenia-wnetrz/ukladanie-paneli-parkietow',
		siteName: 'PRO Wnętrze',
		images: [
			{
				url: 'https://pro-wnetrze.pl/og_img.jpg',
				width: 1200,
				height: 630,
				alt: 'PRO Wnętrze Logo',
			},
		],
		type: 'website',
		locale: 'pl_PL',
	},
};

const posts: ServicePost[] = [
	{
		title: 'Układanie paneli podłogowych',
		text: (
			<>
				<span>
					Układanie paneli podłogowych to szybki i estetyczny sposób na
					odświeżenie wnętrza, który pozwala nadać pomieszczeniu nowoczesny i
					elegancki wygląd. Oferujemy profesjonalny montaż paneli podłogowych,
					dbając o ich stabilność, trwałość oraz precyzyjne dopasowanie do
					podłoża. W zależności od potrzeb wykonujemy także montaż paneli
					podłogowych na stare panele, co eliminuje konieczność kosztownego
					demontażu poprzedniej podłogi. Dzięki temu rozwiązaniu można znacznie
					przyspieszyć proces remontu, zachowując jednocześnie wysoką jakość
					wykończenia.
				</span>
				<span>
					Aby uzyskać najlepszy efekt, kluczowe jest odpowiednie przygotowanie
					powierzchni oraz właściwy dobór podkładu. Precyzyjne układanie paneli
					zapewnia estetyczny wygląd, optymalną izolację akustyczną i
					długowieczność podłogi, dzięki czemu może ona służyć przez wiele lat
					bez potrzeby renowacji.
				</span>
			</>
		),
		image: image1,
		imageAlt: 'Układanie paneli podłogowych',
	},
	{
		title: 'Sposoby układania paneli – jak dopasować wzór do wnętrza',
		text: (
			<>
				<span>
					Wybór odpowiedniego sposobu układania paneli ma kluczowe znaczenie dla
					estetyki wnętrza i trwałości podłogi. Istnieje kilka popularnych metod
					montażu, które pozwalają uzyskać różne efekty wizualne oraz dostosować
					podłogę do charakteru pomieszczenia. Oferujemy montaż paneli
					podłogowych w klasycznym układzie równoległym, diagonalnym, w cegiełkę
					oraz w jodełkę, które nadają podłodze elegancki wygląd i
					niepowtarzalny styl. Każda metoda ma swoje zalety – układanie paneli
					równoległe sprawdza się w małych wnętrzach, optycznie je powiększając,
					podczas gdy jodełka francuska lub angielska nadają pomieszczeniu
					wyjątkowy charakter. Coraz większą popularnością cieszy się również
					układanie paneli winylowych w nietypowych wzorach geometrycznych,
					które mogą stanowić ciekawy akcent w nowoczesnych aranżacjach.
				</span>
				<span>
					Przy wyborze metody montażu warto uwzględnić nie tylko efekt wizualny,
					ale także sposób eksploatacji podłogi. Wysokiej jakości panele
					winylowe podłogowe lub drewniane deski montowane w systemie pływającym
					pozwalają na szybki demontaż w razie potrzeby, a podłogi klejone
					zapewniają większą stabilność i trwałość. Jeśli masz wątpliwości,
					który sposób układania paneli sprawdzi się najlepiej w Twoim wnętrzu,
					skontaktuj się z nami – pomożemy dobrać idealne rozwiązanie Podczas
					wymiany warto zwrócić uwagę na szczelność konstrukcji oraz odpowiednią
					instalację uszczelek, które poprawiają właściwości termoizolacyjne. W
					przypadku modernizacji domu lub mieszkania często konieczna jest
					wymiana drzwi zewnętrznych, szczególnie jeśli dotychczasowe modele nie
					zapewniają odpowiedniej ochrony. Dzięki precyzyjnemu montażowi drzwi
					ich trwałość oraz funkcjonalność zostają zachowane na długie lata, co
					czyni je opłacalną inwestycją.
				</span>
			</>
		),
	},
	{
		title: 'Układanie paneli winylowych',
		text: (
			<>
				<span>
					Układanie paneli winylowych to doskonałe rozwiązanie dla osób
					szukających trwałej i odpornej na wilgoć podłogi. Panele winylowe na
					podłogę charakteryzują się wysoką odpornością na uszkodzenia,
					łatwością w utrzymaniu czystości oraz eleganckim wyglądem. Aby
					osiągnąć najlepsze efekty, kluczowe jest dobranie odpowiedniego
					podkładu pod panele winylowe, który zapewni stabilność oraz dodatkową
					izolację akustyczną.
				</span>
				<span>
					Oferujemy różne wzory układania paneli winylowych, które pozwalają na
					unikalne aranżacje wnętrz. Jeśli zastanawiasz się, jak układać panele
					winylowe, skontaktuj się z nami – doradzimy najlepszą metodę montażu,
					dostosowaną do Twoich potrzeb i rodzaju pomieszczenia.
				</span>
			</>
		),
		image: image2,
		imageAlt: 'Montaż paneli winylowych na podłodze',
	},
	{
		title: 'Układanie parkietu – elegancja i trwałość na lata',
		text: (
			<>
				<span>
					Układanie parkietu to ponadczasowe rozwiązanie, które nadaje wnętrzu
					elegancji i wyjątkowego charakteru. Drewniana podłoga to synonim
					trwałości i klasy, pasujący zarówno do klasycznych, jak i nowoczesnych
					aranżacji. Oferujemy fachowe układanie podłóg drewnianych, dostosowane
					do indywidualnych oczekiwań klienta oraz specyfiki pomieszczenia.
					Podczas montażu dbamy o odpowiednie przygotowanie podłoża, co ma
					kluczowe znaczenie dla stabilności podłogi. Precyzyjne dopasowanie
					desek pozwala uniknąć nierówności i zapewnia odporność na
					odkształcenia. Każdy etap prac realizujemy z dbałością o detale, aby
					efekt końcowy był estetyczny i trwały.
				</span>
				<span>
					W zależności od preferencji klienta wykonujemy różne sposoby układania
					paneli, w tym klasyczną cegiełkę, jodełkę francuską oraz jodełkę
					angielską, które nadają wnętrzu elegancki wygląd. Coraz większą
					popularnością cieszą się także wzory geometryczne, które stanowią
					wyjątkowy akcent dekoracyjny w przestrzeni. Odpowiednio dobrana
					technika montażu oraz wysokiej jakości materiały sprawiają, że
					drewniana podłoga zachowa swój naturalny urok i trwałość przez wiele
					lat.
				</span>
			</>
		),
	},
];

const ServicePage = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<ServiceStart
				title='Układanie podłóg'
				text='Układanie podłóg to kluczowy etap wykończenia wnętrza, który wpływa na jego trwałość i estetykę. Oferujemy profesjonalne układanie paneli podłogowych, montaż paneli winylowych, a także układanie parkietu. Stosujemy nowoczesne techniki oraz najwyższej jakości materiały, co zapewnia doskonały efekt wizualny i długowieczność podłogi.'
				bgImage={backgroundImage}
			/>
			<ServiceAbout
				underline_word='Fachowe'
				heading='układanie podłogi'
				text={
					<>
						<span>
							Profesjonalne układanie podłogi to nie tylko estetyka, ale także
							trwałość i wygoda użytkowania. Wybór odpowiednich materiałów i
							techniki montażu ma kluczowe znaczenie dla końcowego efektu.
							Oferujemy kompleksowe układanie paneli podłogowych, układanie
							paneli winylowych oraz układanie podłóg drewnianych, dostosowane
							do specyfiki wnętrza i oczekiwań klienta.
						</span>
						<span>
							Podczas montażu stosujemy różne sposoby układania paneli, takie
							jak układ klasyczny, diagonalny czy jodełka, co pozwala uzyskać
							unikalny wygląd podłogi. Zapewniamy także profesjonalne
							przygotowanie powierzchni oraz wybór najlepszych podkładów, dzięki
							czemu montaż paneli podłogowych jest trwały, stabilny i odporny na
							codzienne użytkowanie.
						</span>
					</>
				}
				posts={posts}
			/>

			<section className={styles.innerLinkingSection}>
				<Wrapper className={styles.wrapper}>
					<h3 className={styles.linkingHeading}>
						<span>
							Cyklinowanie
							<Image src={underline} alt='' aria-hidden />
						</span>{' '}
						parkietu - przywróć podłodze dawny blask
					</h3>
					<p className={styles.linkingText}>
						<span>
							Naturalna drewniana podłoga wymaga regularnej pielęgnacji, a
							cyklinowanie parkietu to najlepszy sposób na jej odnowienie i
							przywrócenie pierwotnego wyglądu. Proces ten polega na usunięciu
							zniszczonej warstwy drewna, wygładzeniu powierzchni oraz ponownym
							zabezpieczeniu jej lakierem lub olejem, co zwiększa odporność na
							uszkodzenia i podkreśla naturalne piękno drewna.
						</span>
						<span>
							Dzięki zastosowaniu profesjonalnych narzędzi skutecznie usuwamy
							rysy, nierówności oraz zużyte warstwy lakieru, pozostawiając
							podłogę idealnie gładką i gotową do dalszego użytkowania. W
							przypadku głębszych uszkodzeń istnieje możliwość częściowej
							wymiany pojedynczych desek, co pozwala uniknąć konieczności
							montażu całej nowej podłogi.
						</span>
						<span>
							Jeśli zastanawiasz się, ile kosztuje cyklinowanie parkietu, warto
							pamiętać, że cena zależy od kilku czynników, takich jak stopień
							zużycia powierzchni, wielkość podłogi oraz rodzaj wybranego
							zabezpieczenia. Oferujemy kompleksowe usługi renowacji parkietu,
							które przywracają drewnianym podłogom ich dawny blask i trwałość
							na długie lata. Skontaktuj się z nami, aby uzyskać indywidualną
							wycenę i cieszyć się piękną, odnowioną podłogą!
						</span>
					</p>

					<CategoryFeatures title='Sprawdź, dlaczego warto nam zlecić układanie paneli?' />
				</Wrapper>
			</section>

			<CategoryContact
				helpWithHeading='w układaniu podłóg?'
				textClass={styles.contactText}>
				Planujesz układanie podłogi, ale nie wiesz, jaka metoda będzie
				najlepsza? Oferujemy fachowe układanie paneli podłogowych, układanie
				parkietu oraz montaż paneli winylowych, zapewniając trwałość, estetykę i
				najwyższą jakość wykonania. Niezależnie od tego, czy interesuje Cię
				montaż paneli podłogowych na stare panele, wybór odpowiedniego sposobu
				układania paneli, czy profesjonalne cyklinowanie parkietu, jesteśmy do
				Twojej dyspozycji. Zapewniamy kompleksowe doradztwo oraz precyzyjne
				wykonanie, które sprawi, że Twoja podłoga będzie służyć przez lata.
			</CategoryContact>
		</>
	);
};
export default ServicePage;
