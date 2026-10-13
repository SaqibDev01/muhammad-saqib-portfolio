import { PageFrame, PageHeader } from '@/components/page-header';
import { about, techGroups } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'About Muhammad Saqib | Full Stack Developer in Pakistan',
	description:
		'Full-Stack Engineer from Rahim Yar Khan, Pakistan with 4 years of experience in web apps, mobile apps, SaaS and APIs using React, Next.js, React Native and Node.js.',
	path: '/about',
});

export default function AboutPage() {
	return (
		<PageFrame>
			<div className="grid min-h-0 flex-1 grid-cols-1 content-center items-center gap-8 lg:grid-cols-12 lg:gap-14">
				<section className="lg:col-span-6">
					<PageHeader title="About" />

					<div className="rise rise-2 mt-5 max-w-xl space-y-4 text-[16px] leading-[1.75] text-muted">
						{about.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</section>

				<aside className="lg:col-span-6">
					<section aria-labelledby="tech" className="rise rise-2 panel px-5 py-4 lg:px-6 short:py-3">
						<h2 id="tech" className="font-display text-lg font-bold tracking-tight">
							Tech stack
						</h2>
						<dl className="mt-2 divide-y divide-line">
							{techGroups.map((group) => (
								<div
									key={group.title}
									className="grid grid-cols-[96px_1fr] items-start gap-3 py-2.5 short:py-2"
								>
									<dt className="pt-1 text-xs text-faint">{group.title}</dt>
									<dd>
										<ul className="flex flex-wrap gap-1.5">
											{group.items.map((item) => (
												<li key={item} className="chip">
													{item}
												</li>
											))}
										</ul>
									</dd>
								</div>
							))}
						</dl>
					</section>
				</aside>
			</div>
		</PageFrame>
	);
}
