'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

import { Magnetic } from '@/components/magnetic';
import { nav, profile } from '@/lib/site';
import { cn } from '@/lib/utils';

export function isActive(pathname: string, href: string) {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
	const pathname = usePathname();
	const listRef = useRef<HTMLUListElement>(null);
	const [bar, setBar] = useState<{ left: number; width: number } | null>(null);

	// the underline slides from one menu item to the next
	useLayoutEffect(() => {
		function measure() {
			const el = listRef.current?.querySelector<HTMLElement>('[aria-current="page"]');
			setBar(el ? { left: el.offsetLeft + 16, width: el.offsetWidth - 32 } : null);
		}
		measure();
		window.addEventListener('resize', measure);
		document.fonts?.ready.then(measure);
		return () => window.removeEventListener('resize', measure);
	}, [pathname]);

	return (
		<header className="relative z-30 shrink-0 border-b border-line bg-bg/60 backdrop-blur-xl">
			<div className="page-container flex h-14 items-center justify-between gap-4">
				<Link href="/" className="group flex items-center gap-3" aria-label={`${profile.name}, home`}>
					<Image
						src="/avatar.webp"
						alt=""
						width={40}
						height={40}
						priority
						className="h-10 w-10 rounded-full ring-1 ring-white/20 transition duration-300 group-hover:scale-105 group-hover:ring-accent/70"
					/>
					<span className="leading-tight">
						<span className="block text-sm font-semibold">{profile.name}</span>
						<span className="hidden text-[11px] text-faint sm:block">{profile.role}</span>
					</span>
				</Link>

				<nav aria-label="Primary" className="hidden lg:block">
					<ul ref={listRef} className="relative flex items-center gap-1">
						{nav.map((item) => {
							const active = isActive(pathname, item.href);
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										aria-current={active ? 'page' : undefined}
										className={cn(
											'relative block rounded-md px-4 py-1.5 text-sm transition-colors duration-200',
											active ? 'text-ink' : 'text-muted hover:bg-white/5 hover:text-ink',
										)}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
						{bar && (
							<span
								aria-hidden="true"
								className="absolute -bottom-[13px] h-[2px] rounded-full bg-accent transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
								style={{ left: bar.left, width: bar.width }}
							/>
						)}
					</ul>
				</nav>

				{profile.cvUrl ? (
					<Magnetic>
						<a
							href={profile.cvUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Open resume as PDF (opens in a new tab)"
							className="btn-primary h-9 px-4"
						>
							Resume
						</a>
					</Magnetic>
				) : (
					<Link href="/contact" className="btn-primary h-9 px-4">
						Hire me
					</Link>
				)}
			</div>
		</header>
	);
}
