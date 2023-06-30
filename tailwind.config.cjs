/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			sans: ['Inter']
		},
		extend: {
			backgroundImage: {
				'adicustom': "url('/projects/adidas-project.png')",
				'nike': "url('/projects/nike-project.png')",
			  },
			  colors: {
				'blue-box': '#DEF1FC',
			  },
		},
	},
	plugins: [],
}
