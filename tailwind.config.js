/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			maxWidth: {
				'max-w-set': '1440px',
			},
			width: {
				'30':'120px',
				'65': '260px', 
				'75': '300px', 
				'87.5': '350px', 
				'112.5': '450px',
			},
			height: {
				'11.5': '45px',
				'12.5': '50px',
				'72.5': '290px',
				'125': '500px'
			},
			spacing: {
				'4.5': '10px',
				'25': '6.25rem',
				'26': '6.5rem',
				'37.5': '9.375rem'
				// 150 /16 = rem
			},
			colors: {
			'set-orange': '#EA6E14',
			'set-dark-blue': '#263238',
			'set-gray': '#c4c4c4',
			'set-brown': '#7F5539',
			},
			fontSize: {
				'40': '2.5rem',
				'sm': ['14px', '20px'],
				'base': ['16px', '24px'],
				'lg': ['20px', '28px'],
				'xl': ['24px', '32px'],
			},
			boxShadow: {
				'custom': '0 0 5px rgba(0, 0, 0, 0.5)',
			}
		},
	},
	plugins: [],
}
