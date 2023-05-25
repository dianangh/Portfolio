/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],

	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#13242a",
				secondary: "#FFFFFF",
				tertiary: "#13242a",
				"black-100": "#283F45",
				"black-200": "#3A5660",
				"white-100": "#f7f7f7",
			},
			boxShadow: {
				card: "0px 8px 10px rgba(0, 0, 0, 0.1)",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				// "hero-pattern": "url('/src/assets/background.png')",
			},
			secondary: {
				secondary: "url('/src/assets/background2.png')",
			},
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin.cjs")],
	darkMode: "class",
};
