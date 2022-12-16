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
				"productcard-p": "var(--productlist-padding)",
				"red-wine-card": "var(--red-wine-card-hover)",
				"breadcrumbs-gap": "var(--space-3xs)",
				"breadcrumbs-x": "var(--breadcrumbs-padding-x)",
				"breadcrumbs-y": "var(--breadcrumbs-padding-y)",
				"wine-padding-y": "var(--wine-padding-y)",
				"body-padding-x": "var(--body-padding-x)",
				"body-padding-y": "var(--body-padding-y)",
				"space-s": "var(--space-s)",
				"space-m": "var(--space-m)",
				"space-m-l": "var(--space-m-l)",
				"space-l": "var(--space-l)",
				"space-xs": "var(--space-xs)",
				"space-2xs": "var(--space-2xs)",
				"space-3xs": "var(--space-3xs)",
				"space-xl": "var(--space-xl)",
				"space-xl-2xl": "var(--space-xl-2xl)",
				"space-2xl": "var(--space-2xl)",
				"space-3xl": "var(--space-3xl)",
				"landing-padding-y": "var(--landing-padding-y)",
				"space-review-order": "var(--space-2xs-xs)",
				"padding-headers": "var(--padding-headers",
				"padding-headers": "var(--space-l)",
				"padding-paragraphs": "var(--padding-paragraphs)",
			},

      			gridTemplateColumns: {
        		"burger-grid": "5fr 1fr",
        		"productlist": "1fr 6fr",
				"winesubscriptions-deluxe": "1fr 1.3fr",
				"winesubscriptions-premium": "1.3fr 1fr",
				"winemakers": "5fr 10fr 7fr",
				"included": "8.5fr 10fr",
				"deluxe": "3fr 2fr",
				"premium": "2fr 3fr",
				"included-top": "5fr 4fr",
				"included-bottom": "4fr 5fr",

      		},

			fontSize: {
				"body-small": "var(--font-size-body-small)",
			},



			colors:{
				"accent-red-main": "var(--color-accent-red-500)",
				"burger-blue": "var(--color-accent-blue-100)",
				"product-list": "var(--color-product-list-grey)",
				"accent-grey":"var(--color-primary-button-grey)",
				"red-wine-primary": "var(--color-red-wine-primary)",
				"red-wine-secondary": "var(--color-red-wine-secondary)",
				"white-wine-primary": "var(--color-white-wine-primary)",
				"white-wine-secondary": "var(--color-white-wine-secondary)",
				"rose-wine-primary": "var(--color-rose-wine-primary)",
				"rose-wine-secondary": "var(--color-rose-wine-secondary)",
				"sparkling-wine-primary": "var(--color-sparkling-wine-primary)",
				"sparkling-wine-secondary": "var(--color-sparkling-wine-secondary)",
				"line-checkout": "var(--color-accent-blue-500)",
				"bg-grey": "var(--color-bg-grey)",
				"display-blue": "var( --color-accent-blue-900)",
				"form-bg-": "var( --color-accent-blue-200)",
				"landing-grey": "var(--color-bg-grey)",
				"line-checkout": "var( --color-accent-blue-500)",
        		"form-inputandlabel": "var(--form-inputandlabel)",
        		"background-blue": "var(--bg-blue)",
				"vt-blue": "(--vt-blue)",
				"bespoke-blue": "var(--bespoke-blue)",
				"virtual-blue": "var(--color-accent-blue-300)"
			},

		},
	},
  plugins: [],
};
