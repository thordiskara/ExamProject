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
			}
		},
	},
	plugins: [],
}
