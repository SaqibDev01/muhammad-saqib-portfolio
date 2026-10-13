import type { Metadata } from 'next';

import { SITE_URL, profile, seo } from '@/lib/site';

type PageMeta = {
	title: string;
	description: string;
	path: string;
};

// openGraph and twitter are replaced (not merged) per page, so each page sets them in full
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
	const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
	const imageAlt = `${profile.name}, Full Stack Developer (MERN, Next.js, React Native)`;

	return {
		title: { absolute: title },
		description,
		alternates: { canonical: path },
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url,
			siteName: profile.name,
			title,
			description,
			images: [{ url: seo.ogImage, width: 1200, height: 630, alt: imageAlt }],
		},
		twitter: {
			card: 'summary_large_image',
			creator: seo.twitter,
			title,
			description,
			images: [{ url: seo.ogImage, alt: imageAlt }],
		},
	};
}
