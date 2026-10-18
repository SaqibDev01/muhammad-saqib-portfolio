import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { JsonLd } from '@/components/json-ld';
import { Magnetic } from '@/components/magnetic';
import { PortraitStage } from '@/components/portrait-stage';
import { ProfileLinks } from '@/components/profile-links';
import { RotatingText } from '@/components/rotating-text';
import { coreStack } from '@/lib/data';
import { profilePageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { profile, seo } from '@/lib/site';

export const metadata = pageMetadata({ title: seo.title, description: seo.description, path: '/' });

const roles = [profile.focus, 'SaaS Products & APIs', 'React Native Apps', 'MERN & Next.js Projects'];

const delay = (seconds: number) => ({ ['--delay' as string]: `${seconds}s` });

export default function HomePage() {
	return (
		<div className="page-container grid h-full grid-cols-1 lg:grid-cols-12 lg:gap-10">
			<section
				aria-labelledby="home-title"
				className="flex flex-col justify-center py-8 short:py-5 lg:col-span-7 lg:py-7"
			>
				<h1
					id="home-title"
					className="font-display text-[46px] font-extrabold leading-[1] tracking-[-0.03em] sm:text-6xl lg:text-[72px] short:lg:text-[60px]"
				>
					<span className="mask-line">
						<span style={delay(0.05)}>Muhammad</span>
					</span>{' '}
					<span className="mask-line">
						<span className="text-accent-2" style={delay(0.18)}>
							Saqib
						</span>
					</span>
				</h1>

				<h2 className="mt-3 text-lg text-ink/85 lg:text-xl">
					<span className="mask-line">
						<span style={delay(0.32)}>
							Full Stack Developer <span className="text-faint">·</span> <RotatingText items={roles} />
						</span>
					</span>
				</h2>

				<p className="rise mt-4 max-w-xl text-[15.5px] leading-[1.7] text-muted" style={delay(0.45)}>
					I design and build web applications, cross-platform mobile apps, SaaS products and APIs, from the
					interface to the database to deployment, with React, Next.js, React Native and Node.js.
				</p>

				<div className="mt-5 flex flex-wrap items-center gap-3">
					<Magnetic>
						<Link href="/projects" className="btn-primary pop" style={delay(0.6)}>
							View work
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</Link>
					</Magnetic>
					<Magnetic>
						<Link href="/contact" className="btn-ghost pop" style={delay(0.7)}>
							Hire me
						</Link>
					</Magnetic>
				</div>

				<p className="rise mt-4 flex items-center gap-2.5 text-[13px] text-muted" style={delay(0.8)}>
					<span className="relative flex h-2 w-2" aria-hidden="true">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
					</span>
					{profile.availability}
				</p>

				<ul aria-label="Core technologies" className="mt-5 flex max-w-2xl flex-wrap gap-2">
					{coreStack.map((tech, i) => (
						<li key={tech} className="chip pop" style={delay(0.9 + i * 0.05)}>
							{tech}
						</li>
					))}
				</ul>

				<ProfileLinks className="mt-4" firstDelay={1.25} />
			</section>

			{/* portrait and its stage: disc, travelling light, signal rings, orbiting dots; sized from --p */}
			<PortraitStage
				className="relative -mx-5 min-h-[400px] max-lg:overflow-x-clip sm:-mx-8 lg:col-span-5 lg:mx-0 lg:min-h-0"
				style={{ containerType: 'size', clipPath: 'inset(-100vh -100vw 0 -100vw)' }}
			>
				<div
					aria-hidden="true"
					className="absolute inset-0"
					style={{
						['--p' as string]: 'min(94cqh, 122cqw)',
						['--d' as string]: 'min(1.06 * var(--p), 118cqw)',
						['--r' as string]: 'min(1.16 * var(--p), 108cqw)',
					}}
				>
					{/* outer ring with two small lights travelling on it */}
					<div
						className="absolute left-1/2 aspect-square"
						style={{
							width: 'var(--r)',
							marginLeft: 'calc(var(--r) / -2)',
							bottom: 'calc(0.47 * var(--p) - 0.5 * var(--r))',
						}}
					>
						<div className="px-layer absolute inset-0" style={{ ['--depth' as string]: 8 }}>
							<div className="stage-in absolute inset-0" style={delay(0.3)}>
								<div className="ring-outer" />
								<div className="orbit-spin">
									<span className="orbit-dot" />
								</div>
								<div className="orbit-spin reverse">
									<span className="orbit-dot" />
								</div>
							</div>
						</div>
					</div>

					{/* disc */}
					<div
						className="absolute left-1/2 aspect-square"
						style={{
							width: 'var(--d)',
							marginLeft: 'calc(var(--d) / -2)',
							bottom: 'calc(0.47 * var(--p) - 0.5 * var(--d))',
						}}
					>
						<div className="px-layer absolute inset-0" style={{ ['--depth' as string]: 16 }}>
							<div className="portrait-disc stage-in" style={delay(0.1)}>
								<span className="ripple" style={delay(0)} />
								<span className="ripple" style={delay(2.5)} />
								<span className="portrait-arc" />
							</div>
						</div>
					</div>
				</div>

				<div
					className="px-layer absolute inset-x-0 bottom-0 top-3 lg:top-7"
					style={{ ['--depth' as string]: -7 }}
				>
					<Image
						src={profile.portrait}
						alt={`Portrait of ${profile.name}, Full Stack Developer`}
						fill
						priority
						sizes="(min-width: 1024px) 42vw, 100vw"
						className="rise object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]"
						style={delay(0.4)}
					/>
				</div>
			</PortraitStage>

			<JsonLd data={profilePageSchema()} />
		</div>
	);
}
