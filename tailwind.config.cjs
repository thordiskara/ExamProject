/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing:{
				"footer-x": "var(--footer-x-padding)",
				"footer-y": "var(--footer-y-padding)",
				"footer-h6-pb": "var(--footer-h6-padding-bottom)",
				"footer-gaps": "var(--footer-gaps)",
				"header-x": "var(--header-x-padding)",
				"header-y": "var(--header-y-padding)",
				"burger-padding": "var(--space-s-m)",
				"breadcrumbs-gap": "var(--space-3xs)",
				"breadcrumbs-x": "var(--breadcrumbs-padding-x)",
				"breadcrumbs-y": "var(--breadcrumbs-padding-y)",
				"wine-padding-y": "var(--wine-padding-y)",
				"body-padding-x": "var(--body-padding-x)",
				"space-m": "var(--space-m)",
				"space-l": "var(--space-l)",
				"space-xs": "var(--space-xs)",
				"space-2xs": "var(--space-2xs)",
				"space-3xs": "var(--space-3xs)",
			},

			gridTemplateColumns:{
				"burger-grid": "5fr 1fr",
			},

			colors:{
				"accent-red-main": "var(--color-accent-red-500)",
				"burger-blue": "var(--color-accent-blue-100)",
				"red-wine-primary": "var(--color-red-wine-primary)",
				"red-wine-secondary": "var(--color-red-wine-secondary)",
				"white-wine-primary": "var(--color-white-wine-primary)",
				"white-wine-secondary": "var(--color-white-wine-secondary)",
				"rose-wine-primary": "var(--color-rose-wine-primary)",
				"rose-wine-secondary": "var(--color-rose-wine-secondary)",
				"sparkling-wine-primary": "var(--color-sparkling-wine-primary)",
				"sparkling-wine-secondary": "var(--color-sparkling-wine-secondary)"
			}

		},
	},
	plugins: [],
}
