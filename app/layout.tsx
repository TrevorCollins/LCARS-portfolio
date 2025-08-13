import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './_components/Header';
import { LCARSBody } from './_components/LcarsSVG';
import NavCon from './_components/NavCon';
import Space from './_components/Space';

const oxanium = localFont({
	src: [
		{ path: '../public/fonts/oxanium/oxanium-regular.woff2', weight: '400' },
		{ path: '../public/fonts/oxanium/oxanium-bold.woff2', weight: '800' },
		{ path: '../public/fonts/oxanium/oxanium-light.woff2', weight: '200' },
	],
	variable: '--font-oxanium',
});
const teko = localFont({
	src: [
		{ path: '../public/fonts/teko/teko-regular.woff', weight: '400' },
		{ path: '../public/fonts/teko/teko-bold.woff', weight: '800' },
		{ path: '../public/fonts/teko/teko-light.woff', weight: '200' },
	],
	variable: '--font-teko',
});

export const metadata: Metadata = {
	title: 'Trevor Collins - Frontend Developer',
	description: `Stellar frontend developer who's continuing mission is to explore strange new frameworks, seek out new libraries, and boldly code where noone has coded before.`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${oxanium.variable} ${teko.variable} antialiased`}>
				<Space />
				<div className='fixed top-0 left-[2dvw] w-[98dvw] h-[100dvh]'>
					<Header />
					<div className='w-full h-[80dvh] pt-4'>
						<LCARSBody />
						<NavCon />
						<main className='main-content'>{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
