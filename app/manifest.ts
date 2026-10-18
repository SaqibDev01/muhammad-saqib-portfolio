import type { MetadataRoute } from 'next';

import { profile, seo } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${profile.name} | Full Stack Developer`,
		short_name: profile.name,
		description: seo.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#040a09',
		theme_color: '#040a09',
		icons: [
			{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
		],
	};
}
