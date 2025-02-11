import type { Metadata } from 'next';
import { ContextProvider } from '../contexts/app.context';
import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Rubik_Dirt, Manrope, Rubik } from 'next/font/google';
import '../sass/globals.scss';
import { Footer } from '@/components/Footer/Footer';

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
	title: 'Profesjonalne usługi remontowo-budowlane Żywiec | PROWnętrze',
	description:
		'PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz w Żywcu oraz regionach Krakowa, Andrychowa i Bielska. Zaufaj naszym fachowcom i ciesz się nową jakością przestrzeni!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<Head>
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
