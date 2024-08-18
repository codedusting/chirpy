/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	important: true,
	prefix: "tw-",
	darkMode: ["media"],
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			},
			fontFamily: {
				sans: ["var(--inter)", ...fontFamily.sans],
				serif: ["var(--aleo)", ...fontFamily.serif],
				mono: ["var(--firacode)", ...fontFamily.mono]
			}
		}
	},
	corePlugins: {
		container: false
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/container-queries"),
		require("tailwind-scrollbar-hide"),
		require("tailwindcss-animate"),
		plugin(function ({ addComponents }: { addComponents: any }) {
			addComponents({
				".container": {
					maxWidth: "100%",
					width: "100%",
					padding: "0 1rem",
					"@screen sm": {
						maxWidth: "640px",
						padding: "0 2rem"
					},
					"@screen md": {
						maxWidth: "768px",
						padding: "0 3rem"
					},
					"@screen lg": {
						maxWidth: "1280px",
						padding: "0 3.5rem"
					},
					"@screen xl": {
						maxWidth: "1400px",
						padding: "0 4rem"
					}
				}
			});
		})
	]
};
