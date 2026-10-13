import type { Metadata } from 'next';
import Link from 'next/link';

import { PageFrame } from '@/components/page-header';

export const metadata: Metadata = {
	title: { absolute: 'Page not found | Muhammad Saqib' },
	robots: { index: false, follow: false },
};

export default function NotFound() {
	return (
		<PageFrame className="items-start justify-center">
			<p className="label">404</p>
			<h1 className="mt-2 font-display text-4xl font-bold tracking-tight">Page not found</h1>
			<p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-muted">
				The page you are looking for does not exist or has moved.
			</p>
			<Link href="/" className="btn-primary mt-6">
				Back to home
			</Link>
		</PageFrame>
	);
}
