/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'#41B6AD',
				secondary:'#EDC81A',
				helper:'#047291'
			},
			fontFamily:{
				body:["Prompt", "sans-serif"]
			}
		},
	},
	plugins: [],
}
