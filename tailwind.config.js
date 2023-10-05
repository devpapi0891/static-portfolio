/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				'fam-brand': ['Oswald', 'sans-serif'],
				'fam-primary': ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
