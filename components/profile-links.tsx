import { BrandIcon } from '@/components/brand-icon';
import { profileLinks } from '@/lib/site';
import { cn } from '@/lib/utils';

type ProfileLinksProps = {
	className?: string;
	/** seconds before the first icon pops in; the rest follow one after another */
	firstDelay?: number;
};

export function ProfileLinks({ className, firstDelay = 0 }: ProfileLinksProps) {
	return (
		<ul aria-label="Profiles" className={cn('flex flex-wrap items-center gap-2', className)}>
			{profileLinks.map((link, i) => (
				<li key={link.id} className="pop" style={{ ['--delay' as string]: `${firstDelay + i * 0.06}s` }}>
					<a
						href={link.href}
						target="_blank"
						rel="me noopener noreferrer"
						aria-label={`${link.label} profile (opens in a new tab)`}
						title={link.label}
						className="group grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:bg-raised active:scale-95"
					>
						<BrandIcon
							name={link.icon}
							className="h-[18px] w-[18px] text-muted transition duration-200 group-hover:scale-110 group-hover:text-accent-2"
						/>
					</a>
				</li>
			))}
		</ul>
	);
}
