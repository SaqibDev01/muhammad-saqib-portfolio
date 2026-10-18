'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

const thumbOf = (src: string) => src.replace('/projects/', '/projects/thumbs/');
const pad = (n: number) => String(n).padStart(2, '0');

type ProjectsGalleryProps = {
	projects: Project[];
	header: React.ReactNode;
};

export function ProjectsGallery({ projects, header }: ProjectsGalleryProps) {
	const [index, setIndex] = useState(0);
	const [dir, setDir] = useState<1 | -1>(1);
	const stripRef = useRef<HTMLUListElement>(null);
	const total = projects.length;
	const project = projects[index];

	function go(next: number, direction: 1 | -1) {
		setDir(direction);
		setIndex((next + total) % total);
	}

	// keep the active thumbnail centred in the strip
	useEffect(() => {
		const strip = stripRef.current;
		const item = strip?.querySelector<HTMLElement>(`[data-index="${index}"]`);
		if (!strip || !item) return;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		strip.scrollTo({
			left: item.offsetLeft - strip.clientWidth / 2 + item.clientWidth / 2,
			behavior: reduce ? 'auto' : 'smooth',
		});
	}, [index]);

	function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			go(index + 1, 1);
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			go(index - 1, -1);
		}
	}

	return (
		<div className="flex min-h-0 flex-1 flex-col gap-4 lg:gap-5" onKeyDown={onKeyDown}>
			<div className="flex items-end justify-between gap-4">
				{header}
				<div className="flex shrink-0 items-center gap-2">
					<span className="font-mono text-xs text-faint" aria-live="polite">
						<span className="text-accent-2">{pad(index + 1)}</span> / {pad(total)}
					</span>
					{(
						[
							['Previous project', ChevronLeft, index - 1, -1],
							['Next project', ChevronRight, index + 1, 1],
						] as const
					).map(([label, Icon, target, direction]) => (
						<button
							key={label}
							type="button"
							aria-label={label}
							onClick={() => go(target, direction)}
							className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition duration-200 hover:border-accent/60 hover:bg-raised hover:text-ink active:scale-95"
						>
							<Icon className="h-4 w-4" aria-hidden="true" />
						</button>
					))}
				</div>
			</div>

			<article
				key={project.slug}
				className="grid min-h-0 flex-1 grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-8"
			>
				<div className="relative min-h-[220px] overflow-hidden rounded-lg border border-line bg-raised lg:col-span-7">
					<Image
						src={project.image}
						alt={`${project.name} ${project.kind.toLowerCase()} screenshots`}
						fill
						priority={index === 0}
						sizes="(min-width: 1024px) 58vw, 94vw"
						className="settle object-contain"
					/>
				</div>

				<div className={cn(dir > 0 ? 'from-right' : 'from-left', 'flex min-h-0 flex-col justify-center lg:col-span-5')}>
					<p className="label text-accent-2">{project.kind}</p>
					<h2 className="mt-2 font-display text-3xl font-bold tracking-tight lg:text-[34px] lg:leading-[1.1]">
						{project.name}
					</h2>
					<p className="mt-3 text-[15px] font-medium leading-snug text-ink">{project.summary}</p>
					<p className="mt-2 text-[14.5px] leading-relaxed text-muted">{project.description}</p>
					{project.role && (
						<p className="mt-3 text-[13.5px] text-muted">
							<span className="mr-2 text-faint">My role</span>
							{project.role}
						</p>
					)}
					<ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-1.5">
						{project.stack.map((tech) => (
							<li key={tech} className="chip">
								{tech}
							</li>
						))}
					</ul>
				</div>
			</article>

			<ul
				ref={stripRef}
				aria-label="All projects"
				className="relative flex shrink-0 gap-2 overflow-x-auto pb-1.5 pt-1 [scrollbar-width:thin]"
			>
				{projects.map((item, i) => {
					const active = i === index;
					return (
						<li key={item.slug} className="shrink-0">
							<button
								type="button"
								data-index={i}
								aria-current={active}
								onClick={() => go(i, i > index ? 1 : -1)}
								className={cn(
									'relative block h-[68px] w-[120px] overflow-hidden rounded-md border bg-raised transition duration-200',
									active ? 'border-accent' : 'border-line opacity-60 hover:opacity-100',
								)}
							>
								<Image src={thumbOf(item.image)} alt="" fill sizes="120px" className="object-cover" />
								<span className="sr-only">
									{item.name}. {item.summary}
								</span>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
