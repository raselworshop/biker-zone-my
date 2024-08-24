/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"', '"sans-serif"'],
    },
    colors: {
      clifford: '#da373d',
      'bike-primary': '#E76F51',
      'bike-primary-txt': 'white',
      'bike-primary-bg': 'rgba(231, 111, 81, 0.1)',
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
}

