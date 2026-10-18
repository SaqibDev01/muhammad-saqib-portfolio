import { profile } from '@/lib/site';

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="app-footer shrink-0 border-t border-line bg-bg/50">
			<div className="page-container flex min-h-10 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-xs text-faint lg:h-10 lg:flex-nowrap lg:py-0">
				<span className="whitespace-nowrap">
					&copy; {year} {profile.name}
				</span>
				<a
					href={`mailto:${profile.email}`}
					className="transition-colors hover:text-accent-2"
				>
					{profile.email}
				</a>
				<span className="hidden whitespace-nowrap sm:inline">
					{profile.city}, {profile.country}
				</span>
			</div>
		</footer>
	);
}
