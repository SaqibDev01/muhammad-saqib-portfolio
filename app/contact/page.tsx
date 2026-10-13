import { ArrowUpRight, Mail } from 'lucide-react';

import { BrandIcon } from '@/components/brand-icon';
import { PageFrame, PageHeader } from '@/components/page-header';
import { pageMetadata } from '@/lib/seo';
import { profile, profileLinks } from '@/lib/site';

export const metadata = pageMetadata({
	title: 'Contact & Hire Muhammad Saqib | Full Stack Developer',
	description:
		'Hire Muhammad Saqib for web app, mobile app, SaaS or API projects. Email contact.saqibdev@gmail.com or message on Upwork, Fiverr or LinkedIn.',
	path: '/contact',
});

export default function ContactPage() {
	return (
		<PageFrame>
			<div className="grid min-h-0 flex-1 grid-cols-1 content-center items-center gap-8 lg:grid-cols-12 lg:gap-14">
				<section className="lg:col-span-6">
					<PageHeader title="Let's work together" />
					<p className="rise rise-2 mt-4 max-w-md text-[15.5px] leading-[1.7] text-muted">
						{profile.availability}. Send me a short description of what you want to build, and I will reply
						with questions or a plan.
					</p>

					<div className="rise rise-3 mt-6 flex flex-wrap items-center gap-3">
						<a href={`mailto:${profile.email}`} className="btn-primary">
							<Mail className="h-4 w-4" aria-hidden="true" />
							Email me
						</a>
						<a
							href={profileLinks[0].href}
							target="_blank"
							rel="me noopener noreferrer"
							className="btn-ghost"
						>
							Hire on Upwork
							<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
						</a>
					</div>
				</section>

				<section aria-labelledby="profiles" className="lg:col-span-6">
					<h2 id="profiles" className="label mb-3">
						Find me online
					</h2>
					<ul className="rise rise-2 panel divide-y divide-line overflow-hidden">
						{profileLinks.map((link) => (
							<li key={link.id}>
								<a
									href={link.href}
									target="_blank"
									rel="me noopener noreferrer"
									aria-label={`${link.label}: ${link.blurb} (opens in a new tab)`}
									className="group flex items-center gap-4 px-4 py-3 transition-colors hover:bg-raised short:py-2"
								>
									<BrandIcon
										name={link.icon}
										className="h-[18px] w-[18px] shrink-0 text-muted transition-colors group-hover:text-accent"
									/>
									<span className="min-w-0 flex-1">
										<span className="block text-sm font-medium">{link.label}</span>
										<span className="block truncate text-[12.5px] text-muted">{link.blurb}</span>
									</span>
									<span className="hidden font-mono text-xs text-faint sm:block">{link.handle}</span>
									<ArrowUpRight
										className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-ink"
										aria-hidden="true"
									/>
								</a>
							</li>
						))}
					</ul>
				</section>
			</div>
		</PageFrame>
	);
}
