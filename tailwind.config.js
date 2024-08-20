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
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
}

