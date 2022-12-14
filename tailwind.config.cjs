/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "footer-x": "var(--footer-x-padding)",
        "footer-y": "var(--footer-y-padding)",
        "footer-h6-pb": "var(--footer-h6-padding-bottom)",
        "footer-gaps": "var(--footer-gaps)",
        "header-x": "var(--header-x-padding)",
        "header-y": "var(--header-y-padding)",
        "burger-padding": "var(--space-s-m)",
        "productcard-p": "var(--productlist-padding)",
      },

      gridTemplateColumns: {
        "burger-grid": "5fr 1fr",
        productlist: "2fr 6fr",
      },

      colors: {
        "accent-red-main": "var(--color-accent-red-500)",
        "burger-blue": "var(--color-accent-blue-100)",
        "product-list": "var(--color-product-list-grey)",
        "line-checkout": "var( --color-accent-blue-500)",
      },
    },
  },
  plugins: [],
};
