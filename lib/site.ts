import type { BrandIconName } from '@/components/brand-icon';

// change the fallback URL when the custom domain goes live
export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL ?? 'https://muhammad-saqib-portfolio.netlify.app'
).replace(/\/$/, '');

export const profile = {
	name: 'Muhammad Saqib',
	handle: 'SaqibDev01',
	role: 'Full-Stack Engineer',
	focus: 'Web & Mobile Applications',
	city: 'Rahim Yar Khan',
	region: 'Punjab',
	country: 'Pakistan',
	countryCode: 'PK',
	email: 'contact.saqibdev@gmail.com',
	availability: 'Open to freelance and remote projects',
	company: 'Mercury Sols',
	cvUrl: '/Muhammad-Saqib-Resume.pdf' as string | null,
	portrait: '/portrait.webp',
};

export const seo = {
	title: 'Muhammad Saqib | Full Stack Developer (MERN, Next.js, React Native)',
	description:
		'Full Stack Developer from Pakistan with 4 years of experience building web apps, React Native mobile apps, SaaS products and APIs with MERN and Next.js.',
	ogImage: '/og.png',
	twitter: '@SaqibDev01',
};

export type ProfileLink = {
	id: string;
	label: string;
	handle: string;
	href: string;
	icon: BrandIconName;
	primary: boolean;
	blurb: string;
};

export const profileLinks: ProfileLink[] = [
	{
		id: 'upwork',
		label: 'Upwork',
		handle: 'muhammadsaqib01',
		href: 'https://www.upwork.com/freelancers/muhammadsaqib01',
		icon: 'upwork',
		primary: true,
		blurb: 'Hire me for a project',
	},
	{
		id: 'fiverr',
		label: 'Fiverr',
		handle: 'contactsaqibdev',
		href: 'https://www.fiverr.com/contactsaqibdev',
		icon: 'fiverr',
		primary: true,
		blurb: 'Browse my gigs',
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		handle: 'muhammadsaqibdev01',
		href: 'https://www.linkedin.com/in/muhammadsaqibdev01/',
		icon: 'linkedin',
		primary: true,
		blurb: 'Professional profile',
	},
	{
		id: 'github',
		label: 'GitHub',
		handle: 'SaqibDev01',
		href: 'https://github.com/SaqibDev01',
		icon: 'github',
		primary: true,
		blurb: 'Code and repositories',
	},
	{
		id: 'x',
		label: 'X',
		handle: '@SaqibDev01',
		href: 'https://x.com/SaqibDev01',
		icon: 'x',
		primary: false,
		blurb: 'Updates and notes',
	},
	{
		id: 'facebook',
		label: 'Facebook',
		handle: 'SaqibDev01',
		href: 'https://www.facebook.com/SaqibDev01',
		icon: 'facebook',
		primary: false,
		blurb: 'Follow on Facebook',
	},
	{
		id: 'instagram',
		label: 'Instagram',
		handle: '@saqibdev01',
		href: 'https://www.instagram.com/saqibdev01/',
		icon: 'instagram',
		primary: false,
		blurb: 'Follow on Instagram',
	},
];

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];
