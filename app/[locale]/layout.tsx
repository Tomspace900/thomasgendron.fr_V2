import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";

const font = Heebo({
	subsets: ["latin"],
	variable: "--font-main",
});

export const metadata: Metadata = {
	title: "Thomas GENDRON",
	description: "Welcome to my personal website, where you can find everything about me, and even more",
};

const grainyBackground = (
	<div
		id='grainyBackground'
		className='absolute left-0 top-0 w-full h-full -z-10 bg-[#19cc70] bg-opacity-40'
		style={{ filter: "url(#noiseFilter)" }}></div>
);

const backgroundDots = (
	<>
		<div className='absolute sm:bottom-44 top-24 sm:right-[5em] right-0 bg-background max-w-[500px] w-[45%] aspect-square rounded-full blur-3xl bg-blue-400 opacity-60 -z-20'></div>
		<div className='absolute -bottom-16 sm:-left-[10em] left-0 bg-background max-w-[700px] w-[75%] h-[300px] aspect-auto rounded-full blur-3xl bg-gray-400 opacity-70 -z-20'></div>
	</>
);

type RootLayoutProps = {
	children: React.ReactNode;
	params: { locale: Locale };
};

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
	const content = useMessages();
	return (
		<html lang={locale} className={`${font.variable} font-sans font-light`}>
			<body className='bg-background w-full flex justify-center z-0 relative'>
				<NextIntlClientProvider messages={content}>
					{children}
					{grainyBackground}
				</NextIntlClientProvider>
			</body>

			{backgroundDots}

			<svg className='hidden'>
				<filter id='noiseFilter'>
					<feTurbulence type='fractalNoise' baseFrequency='0.5' stitchTiles='stitch' />
					<feColorMatrix in='colorNoise' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' />
					<feComposite operator='in' in2='SourceGraphic' result='monoNoise' />
					<feBlend in='SourceGraphic' in2='monoNoise' mode='screen' />
				</filter>
			</svg>
			<Toaster />
		</html>
	);
}
