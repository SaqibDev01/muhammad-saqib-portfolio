import { projects } from '@/lib/data';
import { SITE_URL, profile, profileLinks, seo } from '@/lib/site';

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

const person = {
	'@type': 'Person',
	'@id': personId,
	name: profile.name,
	alternateName: [profile.handle],
	url: SITE_URL,
	image: `${SITE_URL}${profile.portrait}`,
	jobTitle: profile.role,
	description:
		'Full-Stack Engineer building web applications, mobile apps, SaaS products and APIs with React, Next.js, React Native and Node.js.',
	email: profile.email,
	address: {
		'@type': 'PostalAddress',
		addressLocality: profile.city,
		addressRegion: profile.region,
		addressCountry: profile.countryCode,
	},
	knowsAbout: [
		'Full-stack web development',
		'Mobile app development',
		'React',
		'Next.js',
		'React Native',
		'Node.js',
		'MERN stack',
		'REST APIs',
		'SaaS development',
		'TypeScript',
	],
	sameAs: profileLinks.map((link) => link.href),
};

const website = {
	'@type': 'WebSite',
	'@id': websiteId,
	url: SITE_URL,
	name: `${profile.name} | Full Stack Developer`,
	description: seo.description,
	inLanguage: 'en',
	publisher: { '@id': personId },
};

export function siteSchema() {
	return { '@context': 'https://schema.org', '@graph': [person, website] };
}

export function profilePageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		'@id': `${SITE_URL}/#profilepage`,
		url: SITE_URL,
		name: seo.title,
		inLanguage: 'en',
		isPartOf: { '@id': websiteId },
		about: { '@id': personId },
		mainEntity: { '@id': personId },
	};
}

export function projectListSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: `Projects by ${profile.name}`,
		itemListElement: projects.map((project, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'CreativeWork',
				name: project.name,
				description: project.description,
				creator: { '@id': personId },
				keywords: project.stack.join(', '),
			},
		})),
	};
}
