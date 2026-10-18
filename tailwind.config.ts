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
				bg: 'rgb(var(--bg) / <alpha-value>)',
				surface: 'rgba(255, 255, 255, 0.05)',
				raised: 'rgba(255, 255, 255, 0.09)',
				line: 'rgba(255, 255, 255, 0.1)',
				ink: 'rgb(var(--ink) / <alpha-value>)',
				muted: 'rgb(var(--muted) / <alpha-value>)',
				faint: 'rgb(var(--faint) / <alpha-value>)',
				accent: {
					DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
					2: 'rgb(var(--accent-2) / <alpha-value>)',
					ink: 'rgb(var(--accent-ink) / <alpha-value>)',
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
