import React from 'react';
import { LocationStart } from '@/sections/Location_Start/LocationStart';
import { LocationAbout } from '@/sections/Location_About/LocationAbout';
import { LocationServices } from '@/sections/Location_Services/LocationServices';
import { LocationCoop } from '@/sections/Location_Coop/LocationCoop';
import { LocationArea } from '@/sections/Location_Area/LocationArea';

const PageZywiec = () => {
	return (
		<>
			<LocationStart
				titleRow1='Firma budowlana Żywiec'
				text1='Szukasz firmy budowlanej w okolicach Żywca?'
				text2='Zaufaj naszym fachowcom i ciesz się nowym jakością przestrzeni'
			/>

			<LocationAbout
				heading='Firma budowlana'
				underline_word='Żywiec'
				paragraph1='Jesteśmy doświadczoną firmą remontowo-budowlaną działającą na terenie między innymi Żywca i okolic. Nasze usługi remontowo wykończeniowe, w tym kompleksowe wykończenia wnętrz pod klucz, to gwarancja najwyższej jakości oraz terminowości. Jako firma remontowa, realizujemy projekty dla klientów indywidualnych i biznesowych, dbając o każdy detal.'
				paragraph2='Dzięki wieloletniemu doświadczeniu wiemy, jak ważne jest terminowe i rzetelne wykonanie remontu. Nasza ekipa składa się z wykwalifikowanych fachowców, którzy dbają o wysoką jakość usług oraz estetykę każdego wykończenia. Gwarantujemy przejrzysty proces współpracy – od wyceny, przez realizację, aż po odbiór gotowej przestrzeni.'
				featureTitle='Dlaczego warto wybrać nasze usługi budowlane?'
			/>

			<LocationServices
				underline_word='Realizujemy'
				heading='większość usług remontowo-budowlanych'
				text='Jesteśmy firmą budowlaną specjalizującą się w kompleksowych remontach i wykończeniach wnętrz. Oferujemy szeroki zakres usług, obejmujących zarówno drobne modernizacje, jak i generalne remonty domów, mieszkań oraz lokali użytkowych. Dzięki doświadczeniu i wykorzystaniu sprawdzonych materiałów gwarantujemy solidne wykonanie oraz estetyczny efekt końcowy. Niezależnie od skali projektu, zapewniamy profesjonalne doradztwo oraz kompleksową realizację prac – od przygotowania powierzchni po finalne wykończenie wnętrz. Współpracujemy zarówno z klientami indywidualnymi, jak i firmami, oferując rozwiązania dostosowane do ich potrzeb i oczekiwań.'
			/>
			<LocationCoop />
			<LocationArea />
		</>
	);
};

export default PageZywiec;