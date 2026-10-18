'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type RotatingTextProps = {
	items: string[];
	interval?: number;
};

export function RotatingText({ items, interval = 2800 }: RotatingTextProps) {
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const timer = setInterval(() => setActive((n) => (n + 1) % items.length), interval);
		return () => clearInterval(timer);
	}, [items.length, interval]);

	return (
		<span className="inline-grid align-top">
			{items.map((text, i) => (
				<span
					key={text}
					aria-hidden={i !== active}
					className={cn(
						'col-start-1 row-start-1 transition-all duration-500',
						i === active ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-2 opacity-0',
					)}
				>
					{text}
				</span>
			))}
		</span>
	);
}
