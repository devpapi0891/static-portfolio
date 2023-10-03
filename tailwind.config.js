/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				customNeutral1: 'var(--color_netutral-1)',
				customNeutral2: 'var(--color_netutral-2)',
				customNeutral3: 'var(--color_netural-3)',
				customInverted1: 'var(--color_inverted-1)',
				customInverted2: 'var(--color_inverted-2)',
				customInverted3: 'var(--color_inverted-3)'
			}
		}
	},
	plugins: []
};
