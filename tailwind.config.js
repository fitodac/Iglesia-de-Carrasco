/** @type {import('tailwindcss').Config} */

module.exports = {
  
	content: [],

  theme: {
    extend: {
			
			colors: {
				'primary': {
					// DEFAULT: '#80bd01'
					DEFAULT: '#6B9E00'
				},
				'secondary': {
					DEFAULT: '#4B4E67'
				}
			},
		},

		fontFamily: {
			'primary': ['Product Sans', 'sans'],
			'handwrite': ['Have Heart One', 'Tahoma']
		}
  },

  plugins: [
		require('tailwind-scrollbar'),
	],

}
