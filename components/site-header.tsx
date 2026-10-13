'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { nav, profile } from '@/lib/site';
import { cn } from '@/lib/utils';

export function isActive(pathname: string, href: string) {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="shrink-0 border-b border-line bg-bg">
			<div className="page-container flex h-14 items-center justify-between gap-4">
				<Link href="/" className="flex items-center gap-3" aria-label={`${profile.name}, home`}>
					<Image
						src="/avatar.webp"
						alt=""
						width={40}
						height={40}
						priority
						className="h-10 w-10 rounded-full border border-line bg-surface"
					/>
					<span className="leading-tight">
						<span className="block text-sm font-semibold">{profile.name}</span>
						<span className="hidden text-[11px] text-faint sm:block">{profile.role}</span>
					</span>
				</Link>

				<nav aria-label="Primary" className="hidden lg:block">
					<ul className="flex items-center gap-1">
						{nav.map((item) => {
							const active = isActive(pathname, item.href);
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										aria-current={active ? 'page' : undefined}
										className={cn(
											'relative rounded-md px-3 py-2 text-sm transition-colors',
											active ? 'text-ink' : 'text-muted hover:text-ink',
										)}
									>
										{item.label}
										{active && (
											<span
												aria-hidden="true"
												className="absolute inset-x-3 -bottom-[13px] h-px bg-accent"
											/>
										)}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				{profile.cvUrl ? (
					<a
						href={profile.cvUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open resume as PDF (opens in a new tab)"
						className="btn-primary h-9 px-3.5"
					>
						Resume
					</a>
				) : (
					<Link href="/contact" className="btn-primary h-9 px-3.5">
						Hire me
					</Link>
				)}
			</div>
		</header>
	);
}
