'use client';

import { useRef } from 'react';

type MagneticProps = {
	children: React.ReactNode;
	className?: string;
	strength?: number;
};

// the wrapped element leans toward the cursor and springs back when it leaves
export function Magnetic({ children, className, strength = 0.28 }: MagneticProps) {
	const ref = useRef<HTMLSpanElement>(null);

	function enabled() {
		return (
			window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
			!window.matchMedia('(prefers-reduced-motion: reduce)').matches
		);
	}

	function onMove(event: React.PointerEvent<HTMLSpanElement>) {
		const el = ref.current;
		if (!el || !enabled()) return;
		const rect = el.getBoundingClientRect();
		const dx = (event.clientX - (rect.left + rect.width / 2)) * strength;
		const dy = (event.clientY - (rect.top + rect.height / 2)) * strength;
		el.style.transition = 'transform 0.12s linear';
		el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
	}

	function onLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.transition = 'transform 0.7s cubic-bezier(0.3, 1.6, 0.4, 1)';
		el.style.transform = '';
	}

	return (
		<span ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`inline-block ${className ?? ''}`}>
			{children}
		</span>
	);
}
