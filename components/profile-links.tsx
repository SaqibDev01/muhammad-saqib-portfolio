import { BrandIcon } from '@/components/brand-icon';
import { profileLinks } from '@/lib/site';
import { cn } from '@/lib/utils';

export function ProfileLinks({ className }: { className?: string }) {
	return (
		<ul aria-label="Profiles" className={cn('flex flex-wrap items-center gap-2', className)}>
			{profileLinks.map((link) => (
				<li key={link.id}>
					<a
						href={link.href}
						target="_blank"
						rel="me noopener noreferrer"
						aria-label={`${link.label} profile (opens in a new tab)`}
						title={link.label}
						className="group grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface transition-colors hover:border-accent/60 hover:bg-raised"
					>
						<BrandIcon
							name={link.icon}
							className="h-[18px] w-[18px] text-muted transition-colors group-hover:text-accent"
						/>
					</a>
				</li>
			))}
		</ul>
	);
}
