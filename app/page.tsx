import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { JsonLd } from '@/components/json-ld';
import { ProfileLinks } from '@/components/profile-links';
import { coreStack } from '@/lib/data';
import { profilePageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { profile, seo } from '@/lib/site';

export const metadata = pageMetadata({ title: seo.title, description: seo.description, path: '/' });

export default function HomePage() {
	return (
		<div className="page-container grid h-full grid-cols-1 lg:grid-cols-12 lg:gap-10">
			{/* Identity */}
			<section
				aria-labelledby="home-title"
				className="flex flex-col justify-center py-8 short:py-5 lg:col-span-7 lg:py-7"
			>
				<p className="rise inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-muted">
					<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
					{profile.availability}
				</p>

				<h1
					id="home-title"
					className="rise rise-2 mt-5 font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[72px] short:lg:text-[60px]"
				>
					{profile.name}
				</h1>

				<h2 className="rise rise-2 mt-3 text-lg text-ink/80 lg:text-xl">
					Full Stack Developer <span className="text-faint">·</span> {profile.focus}
				</h2>

				<p className="rise rise-3 mt-4 max-w-xl text-[15.5px] leading-[1.7] text-muted">
					I design and build web applications, cross-platform mobile apps, SaaS products and APIs, from the
					interface to the database to deployment, with React, Next.js, React Native and Node.js.
				</p>

				<div className="rise rise-3 mt-5 flex flex-wrap items-center gap-3">
					<Link href="/projects" className="btn-primary">
						View work
						<ArrowRight className="h-4 w-4" aria-hidden="true" />
					</Link>
					<Link href="/contact" className="btn-ghost">
						Hire me
					</Link>
				</div>

				<ul aria-label="Core technologies" className="rise rise-3 mt-6 flex max-w-xl flex-wrap gap-2">
					{coreStack.map((tech) => (
						<li key={tech} className="chip">
							{tech}
						</li>
					))}
				</ul>

				<ProfileLinks className="rise rise-3 mt-4" />
			</section>

			{/* portrait and circle, sized from --p (portrait height) */}
			<div
				className="relative -mx-5 min-h-[400px] sm:-mx-8 lg:col-span-5 lg:mx-0 lg:min-h-0"
				style={{ containerType: 'size', clipPath: 'inset(-100vh -100vw 0 -100vw)' }}
			>
				<div aria-hidden="true" className="absolute inset-0" style={{ ['--p' as string]: 'min(94cqh, 122cqw)' }}>
					<div
						className="absolute left-1/2 aspect-square -translate-x-1/2 rounded-full border border-white/[0.05]"
						style={{
							width: 'min(1.28 * var(--p), 124cqw)',
							bottom: 'calc(0.47 * var(--p) - 0.5 * min(1.28 * var(--p), 124cqw))',
						}}
					/>
					<div
						className="absolute left-1/2 aspect-square -translate-x-1/2 rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_50%_36%,rgba(255,106,61,0.30),rgba(255,106,61,0.10)_55%,rgba(255,106,61,0.03)_100%)]"
						style={{
							width: 'min(1.06 * var(--p), 118cqw)',
							bottom: 'calc(0.47 * var(--p) - 0.5 * min(1.06 * var(--p), 118cqw))',
						}}
					/>
				</div>
				<div className="absolute inset-x-0 bottom-0 top-3 lg:top-7">
					<Image
						src={profile.portrait}
						alt={`Portrait of ${profile.name}, Full Stack Developer`}
						fill
						priority
						sizes="(min-width: 1024px) 42vw, 100vw"
						className="rise rise-2 object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.5)]"
					/>
				</div>
			</div>

			<JsonLd data={profilePageSchema()} />
		</div>
	);
}
