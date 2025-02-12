import type { Metadata } from 'next';
import { ContextProvider } from '../contexts/app.context';
import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Rubik_Dirt, Manrope, Rubik } from 'next/font/google';
import '../sass/globals.scss';
import { Footer } from '@/components/Footer/Footer';
import SEO from '@/components/SEO/SEO';

const manrope = Manrope({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
});
export const rubik = Rubik({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
});
export const rubikDirt = Rubik_Dirt({
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata: Metadata = {
	title:
		'Profesjonalne usługi remontowo-budowlane Żywiec | PROWnętrze - firma budowlana',
	description:
		'PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz w Żywcu oraz regionach Krakowa, Andrychowa i Bielska. Zaufaj naszym fachowcom i ciesz się nową jakością przestrzeni!',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pl'>
			<SEO page='home' />
			<Head>
				<link rel='canonical' href='https://pro-wnetrze.pl' />
				<link href='dist/hamburgers.css' rel='stylesheet'></link>
			</Head>

			<body className={manrope.className}>
				<ContextProvider>
					<Header />
					{children}
					<Footer />
				</ContextProvider>
			</body>
		</html>
	);
}
