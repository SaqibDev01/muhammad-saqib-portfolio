import { cn } from '@/lib/utils';

type PageHeaderProps = {
	title: string;
	children?: React.ReactNode;
	className?: string;
};

export function PageHeader({ title, children, className }: PageHeaderProps) {
	return (
		<header className={cn('rise', className)}>
			<h1 className="font-display text-3xl font-bold tracking-tight lg:text-[40px] lg:leading-[1.1] short:lg:text-[34px]">
				{title}
			</h1>
			{children && (
				<p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted short:hidden">{children}</p>
			)}
		</header>
	);
}

// same frame and top offset on every page
export function PageFrame({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div
			className={cn(
				'page-container flex h-full flex-col pb-6 pt-8 lg:pb-7 lg:pt-[clamp(2.25rem,7vh,4.5rem)] short:pb-4 short:pt-8',
				className,
			)}
		>
			{children}
		</div>
	);
}
