'use client';

import { useEffect, useRef } from 'react';

type PortraitStageProps = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
};

// sets --px and --py (-1 to 1) from the cursor so the layers inside can drift by depth
export function PortraitStage({ children, className, style }: PortraitStageProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const el = ref.current;
		if (!canHover || reduce || !el) return;

		let frame = 0;
		let x = 0;
		let y = 0;

		function onMove(event: PointerEvent) {
			x = (event.clientX / window.innerWidth - 0.5) * 2;
			y = (event.clientY / window.innerHeight - 0.5) * 2;
			if (frame) return;
			frame = requestAnimationFrame(() => {
				el?.style.setProperty('--px', x.toFixed(3));
				el?.style.setProperty('--py', y.toFixed(3));
				frame = 0;
			});
		}

		window.addEventListener('pointermove', onMove, { passive: true });
		return () => {
			window.removeEventListener('pointermove', onMove);
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<div ref={ref} className={className} style={style}>
			{children}
		</div>
	);
}
