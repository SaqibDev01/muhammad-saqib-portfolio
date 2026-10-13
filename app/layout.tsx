import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

import { JsonLd } from '@/components/json-ld';
import { MobileTabs } from '@/components/mobile-tabs';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteSchema } from '@/lib/schema';
import { SITE_URL, profile, seo } from '@/lib/site';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['700', '800'],
	variable: '--font-display',
	display: 'swap',
});
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: seo.title,
	description: seo.description,
	applicationName: `${profile.name} Portfolio`,
	authors: [{ name: profile.name, url: SITE_URL }],
	creator: profile.name,
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: SITE_URL,
		siteName: profile.name,
		title: seo.title,
		description: seo.description,
		images: [
			{
				url: seo.ogImage,
				width: 1200,
				height: 630,
				alt: `${profile.name}, Full Stack Developer (MERN, Next.js, React Native)`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		creator: seo.twitter,
		title: seo.title,
		description: seo.description,
		images: [seo.ogImage],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
	},
	formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
	themeColor: '#0b0c0f',
	colorScheme: 'dark',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
			<body>
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
				>
					Skip to content
				</a>
				<div className="app-shell">
					<SiteHeader />
					<main id="main" className="app-main">
						{children}
					</main>
					<SiteFooter />
				</div>
				<MobileTabs />
				<JsonLd data={siteSchema()} />
			</body>
		</html>
	);
}
