export const about = {
	paragraphs: [
		"I'm Muhammad Saqib, a Full-Stack Engineer with 4 years of experience in web and mobile app development, SaaS applications, APIs and backend systems.",
		'I build with React, Next.js, React Native, Node.js and the MERN stack. My work covers responsive interfaces, backend APIs, databases, authentication, real-time features, third-party integrations and deployment.',
		'I work with startups, businesses and product teams on MVPs, admin dashboards and custom software.',
	],
	facts: [
		{ label: 'Experience', value: '4 years' },
		{ label: 'Based in', value: 'Rahim Yar Khan, Pakistan' },
		{ label: 'Languages', value: 'English, Urdu' },
		{ label: 'Availability', value: 'Freelance and remote projects' },
	],
};

export type Project = {
	slug: string;
	name: string;
	kind: 'Mobile app' | 'Web app';
	summary: string;
	description: string;
	stack: string[];
	image: string;
	featured: boolean;
	role?: string;
};

export const projects: Project[] = [
	// featured
	{
		slug: 'livetrack',
		name: 'LiveTrack',
		kind: 'Mobile app',
		summary: 'Real-time vehicle tracking app, available on the Play Store.',
		description:
			'Live vehicle tracking on a Google map with animated markers and a switch to turn live updates on or off. Built for smooth map performance and clear data presentation.',
		stack: ['React Native', 'Google Maps API', 'Firebase'],
		image: '/projects/livetrack.webp',
		featured: true,
	},
	{
		slug: 'banolive',
		name: 'BanoLive',
		kind: 'Mobile app',
		summary: 'Live-streaming platform with interactive video.',
		description:
			'A live-streaming mobile platform with interactive video streaming, built on ZegoCloud with Redux for state management.',
		stack: ['React Native', 'ZegoCloud', 'Redux'],
		image: '/projects/banolive.webp',
		featured: true,
	},
	{
		slug: 'matchers',
		name: 'Matchers',
		kind: 'Mobile app',
		summary: 'Interest-based social networking with real-time chat.',
		description:
			'Matches users by shared interests. Includes Firebase authentication, real-time chat, notifications, deep linking and custom animations.',
		stack: ['React Native', 'Firebase', 'Deep linking'],
		image: '/projects/matchers.webp',
		featured: true,
	},
	{
		slug: 'farmer',
		name: 'Farmer',
		kind: 'Mobile app',
		summary: 'Agriculture app with map-based crop selection and an AI chatbot.',
		description:
			'Lets farmers select areas on a map to view crops, with an AI chatbot for support. Built on Swagger-documented API services.',
		stack: ['React Native', 'Maps', 'AI chatbot', 'REST APIs'],
		image: '/projects/farmer.webp',
		featured: true,
	},
	{
		slug: 'fluxbeam',
		name: 'Fluxbeam',
		kind: 'Web app',
		summary: 'Coin tracking website with charts and Firebase authentication.',
		description:
			'A cryptocurrency tracking web app with Firebase authentication, data storage and clear graphs.',
		stack: ['React', 'Firebase', 'Charts'],
		image: '/projects/fluxbeam.webp',
		featured: true,
	},
	{
		slug: 'nexa-coin',
		name: 'Nexa Coin',
		kind: 'Mobile app',
		summary: 'Crypto trading app with a custom-designed interface.',
		description:
			'A cryptocurrency trading app with smooth animations and a custom UI built from scratch, without a Figma handoff.',
		stack: ['React Native', 'Animations', 'Custom UI'],
		image: '/projects/nexacoin.webp',
		featured: true,
	},
	{
		slug: 'finance',
		name: 'Finance',
		kind: 'Mobile app',
		summary: 'Expense tracking app with real-time graphs.',
		description:
			'A finance management app with graphs, accounting tools and real-time data entry, backed by Firebase.',
		stack: ['React Native', 'Firebase', 'Charts'],
		image: '/projects/finance.webp',
		featured: true,
	},
	{
		slug: 'chat-ais',
		name: 'Chat AIs',
		kind: 'Mobile app',
		summary: 'Real-time chat with AI-generated personalities.',
		description:
			'A social app where users chat in real time with AI personalities, built on Firebase with custom animations.',
		stack: ['React Native', 'Firebase', 'AI integration'],
		image: '/projects/chat.webp',
		featured: true,
	},

	// more work
	{
		slug: 'smart-live',
		name: 'Smart Live',
		kind: 'Mobile app',
		summary: 'Live-streaming app with real-time updates.',
		description:
			'A live-streaming app for real-time content delivery, with Firebase integration and custom animations.',
		stack: ['React Native', 'Firebase', 'Animations'],
		image: '/projects/smartlive.webp',
		featured: false,
	},
	{
		slug: 'sports-tracking',
		name: 'Sports Tracking',
		kind: 'Mobile app',
		summary: 'Sports app with live audio and video streaming.',
		description:
			'A sports app delivering real-time performance data with live audio and video streaming, built on Firebase.',
		stack: ['React Native', 'Firebase', 'Live streaming'],
		image: '/projects/sports.webp',
		featured: false,
	},
	{
		slug: 'social-app',
		name: 'Social App',
		kind: 'Mobile app',
		summary: 'Social networking with real-time chat and a map-based friend locator.',
		description:
			'A social app with real-time chat and an interactive map to find friends, backed by AWS services. I built the UI and integrated the APIs on the frontend.',
		stack: ['React Native', 'Maps', 'AWS', 'Redis'],
		image: '/projects/socialapp.webp',
		featured: false,
		role: 'UI development and API integration',
	},
	{
		slug: 'zm-solutions',
		name: 'ZM Solutions',
		kind: 'Mobile app',
		summary: 'Vehicle live tracking powered by API integration.',
		description:
			'Real-time live tracking of vehicles and their location, with dynamic map integration and Firebase support.',
		stack: ['React Native', 'Maps', 'Firebase', 'REST APIs'],
		image: '/projects/zmsolutions.webp',
		featured: false,
	},
	{
		slug: 'hematoscan',
		name: 'Hematoscan',
		kind: 'Mobile app',
		summary: 'Blood test report generation with text recognition.',
		description:
			'A medical app that generates blood test reports, using text recognition to read scanned results. I built the text recognition feature.',
		stack: ['React Native', 'Text recognition'],
		image: '/projects/hematoscan.webp',
		featured: false,
	},
	{
		slug: 'companycam',
		name: 'CompanyCam',
		kind: 'Mobile app',
		summary: 'Team and project collaboration with real-time sync.',
		description:
			'A collaboration app where users create an account, manage friends and projects, and stay in sync in real time through Firebase.',
		stack: ['React Native', 'Firebase'],
		image: '/projects/companycam.webp',
		featured: false,
	},
	{
		slug: 'defeat-depression',
		name: 'Defeat Depression',
		kind: 'Mobile app',
		summary: 'Mental wellness app with interactive tools.',
		description:
			'A mental wellness app with interactive tools, real-time tracking and a calming interface, using Firebase for secure data.',
		stack: ['React Native', 'Firebase'],
		image: '/projects/depression.webp',
		featured: false,
	},
	{
		slug: 'car-wash',
		name: 'Car Wash',
		kind: 'Mobile app',
		summary: 'Car wash booking app with Lottie animations.',
		description:
			'A booking app for car wash services with a clean interface and Lottie animations.',
		stack: ['React Native', 'Lottie'],
		image: '/projects/carwash.webp',
		featured: false,
	},
	{
		slug: 'pick-drop',
		name: 'Pick Drop',
		kind: 'Mobile app',
		summary: 'Pick-up and drop-off booking with real-time maps.',
		description:
			'An app for booking pick-up and drop-off services, with real-time map tracking and Lottie animations.',
		stack: ['React Native', 'Maps', 'Lottie'],
		image: '/projects/pickdrop.webp',
		featured: false,
	},
	{
		slug: 'freelancing',
		name: 'Freelancing',
		kind: 'Mobile app',
		summary: 'Freelancing platform with job listings and profiles.',
		description:
			'A freelancing platform with job listings, user profiles and Lottie animations, built on Firebase.',
		stack: ['React Native', 'Firebase', 'Lottie'],
		image: '/projects/freelancing.webp',
		featured: false,
	},
	{
		slug: 'payfox',
		name: 'Payfox',
		kind: 'Mobile app',
		summary: 'Payment app with a streamlined interface.',
		description:
			'A payment gateway app with secure transactions and a clean, streamlined interface.',
		stack: ['React Native', 'UI design'],
		image: '/projects/payfox.webp',
		featured: false,
	},
	{
		slug: 'squid-coin',
		name: 'Squid Coin',
		kind: 'Mobile app',
		summary: 'Crypto app designed for both React and React Native.',
		description:
			'A cryptocurrency app with real-time data and a Tailwind CSS design, built for both React and React Native.',
		stack: ['React Native', 'React', 'Tailwind CSS'],
		image: '/projects/squidcoin.webp',
		featured: false,
	},
	{
		slug: 'ghost-agency',
		name: 'Ghost Agency',
		kind: 'Mobile app',
		summary: 'Agency platform on React Native and WordPress.',
		description:
			'A services platform for mobile and web, combining React Native with a WordPress-powered WebView and custom UI.',
		stack: ['React Native', 'WordPress', 'WebView'],
		image: '/projects/ghost.webp',
		featured: false,
	},
	{
		slug: 'islamic-zawaj',
		name: 'Islamic Zawaj',
		kind: 'Mobile app',
		summary: 'Matrimonial platform for the Muslim community.',
		description: 'A matrimonial platform for the Muslim community.',
		stack: ['React Native'],
		image: '/projects/islamic-zawaj.webp',
		featured: false,
	},
];

export type TechGroup = { title: string; items: string[] };

export const techGroups: TechGroup[] = [
	{ title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI'] },
	{ title: 'Mobile', items: ['React Native', 'Expo', 'Android', 'iOS'] },
	{ title: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'JWT'] },
	{ title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase'] },
	{ title: 'Real-time & APIs', items: ['Socket.io', 'WebRTC', 'Agora', 'ZegoCloud', 'Google Maps', 'Stripe', 'OpenAI'] },
	{ title: 'Tools & deploy', items: ['Git & GitHub', 'Docker', 'Postman', 'Figma', 'Vercel', 'Netlify'] },
];

export const coreStack = ['React', 'Next.js', 'React Native', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'];
