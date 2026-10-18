'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Mail, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { nav } from '@/lib/site';
import { cn } from '@/lib/utils';
import { isActive } from '@/components/site-header';

const icons: Record<string, LucideIcon> = {
	'/': Home,
	'/about': User,
	'/projects': LayoutGrid,
	'/contact': Mail,
};

// bottom tab bar, mobile only
export function MobileTabs() {
	const pathname = usePathname();

	return (
		<nav
			aria-label="Primary"
			className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/75 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
		>
			<ul className="mx-auto grid max-w-xl grid-cols-4">
				{nav.map((item) => {
					const Icon = icons[item.href] ?? Home;
					const active = isActive(pathname, item.href);
					return (
						<li key={item.href}>
							<Link
								href={item.href}
								aria-current={active ? 'page' : undefined}
								className={cn(
									'flex h-16 flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors',
									active ? 'text-accent' : 'text-muted',
								)}
							>
								<Icon className="h-[18px] w-[18px]" aria-hidden="true" />
								{item.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
