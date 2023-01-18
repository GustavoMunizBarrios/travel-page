/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
             './index.html', './src/index.css'],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('/dpublic/img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('/dpublic/img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('/dpublic/img/yosemite.jpg')",
			  'LA': "url('/dpublic/img//LA.jpg')",
			  'seattle': "url('/dpublic/img/seattle.jpg')",
			  'new_york': "url('/dpublic/img/new_york.jpg')",
			  'norway': "url('/dpublic/img/norway.jpg')",
			  'sydney': "url('/dpublic/img/sydney.jpg')",
			  'miami': "url('/dpublic/img/miami.jpg')",
			  'switzerland': "url('/dpublic/img/switzerland.jpg')",
			  'bali': "url('/dpublic/img/bali.jpg')",
			  'norway': "url('/dpublic/img/norway.jpg')",
			  'chicago': "url('/dpublic/img/chicago.jpg')",
			  'europe': "url('/dpublic/img/europe.jpg')",
			  'iceland': "url('/dpublic/img/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#cc2d4a',
        'secondary': '#8fa206',
        'terciary': '#61aec9' 
      }),
      textColor: theme => ({
        ...theme('colors'),
        primary: '#CC2D4A',
        secondary: '#8FA206',
        terciary: '#61AEC9',
      }),
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
