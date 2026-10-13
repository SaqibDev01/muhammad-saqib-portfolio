import type { MetadataRoute } from 'next';

import { SITE_URL, nav } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();
	return nav.map((item) => ({
		url: item.href === '/' ? SITE_URL : `${SITE_URL}${item.href}`,
		lastModified,
	}));
}
