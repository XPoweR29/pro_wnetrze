import type { Metadata } from 'next';
import { ContextProvider } from '../contexts/app.context';
import { Header } from '@/components/Header/Header';
import { Rubik_Dirt, Manrope, Rubik } from 'next/font/google';
import '../sass/globals.scss';
import { Footer } from '@/components/Footer/Footer';
import { businessSchema } from '@/data/schema';
import Script from 'next/script';

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
		'Kompleksowe usługi remontowo-budowlane Żywiec | PROWnętrze - firma budowlana',
	description:
		'PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz w Żywcu oraz regionach Krakowa, Andrychowa i Bielska. Zaufaj naszym fachowcom!',
	openGraph: {
		title:
			'Kompleksowe usługi remontowo-budowlane Żywiec | PROWnętrze - firma budowlana',
		description:
			'PROWnętrze oferuje kompleksowe remonty oraz wykończenia wnętrz w Żywcu oraz regionach Krakowa, Andrychowa i Bielska. Zaufaj naszym fachowcom i ciesz się nową jakością przestrzeni!',
		url: 'https://pro-wnetrze.pl',
		siteName: 'PROWnętrze',
		images: [
			{
				url: 'https://pro-wnetrze.pl/og_img.jpg',
				width: 1200,
				height: 630,
				alt: 'PROWnętrze Logo',
			},
		],
		type: 'website',
		locale: 'pl_PL',
	},
	alternates: {
		canonical: 'https://pro-wnetrze.pl',
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<html lang='pl-PL'>
				<head>
					<link
						rel='preload'
						as='video'
						href='/video-bg.mp4'
						type='video/mp4'
					/>
					<Script
						async
						src='https://www.googletagmanager.com/gtag/js?id=G-0YM4R3T4P6'
					/>
					<Script id='gtag-init' strategy='afterInteractive'>
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){window.dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-0YM4R3T4P6', {
								anonymize_ip: true,
								cookie_flags: 'SameSite=None; Secure'
							});
        				`}
					</Script>
					<script
						type='application/ld+json'
						dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
					/>
				</head>

				<body className={manrope.className}>
					<ContextProvider>
						<Header />
						{children}
						<Footer />
					</ContextProvider>
				</body>
			</html>
		</>
	);
}
