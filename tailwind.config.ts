import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			// small laptop screens
			screens: {
				short: { raw: '(max-height: 700px)' },
			},
			colors: {
				bg: '#0b0c0f',
				surface: '#111318',
				raised: '#171a21',
				line: '#242831',
				ink: '#ece9e2',
				muted: '#9b9ea8',
				faint: '#7a7e89',
				accent: {
					DEFAULT: '#ff6a3d',
					ink: '#140a06',
				},
			},
			fontFamily: {
				sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
		},
	},
	plugins: [],
};

export default config;
