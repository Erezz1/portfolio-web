const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salmon: 'salmon',
        amber: colors.amber[50],
      },

      width: {
        'text': '700px',
        '2full': '200%'
      },

      maxWidth: {
        'text': '700px',
      },

      backgroundImage: {
        'laptop-code': 'url("../public/laptop-code.jpg")',
      },

      lineHeight: {
        0: '0',
      },

      brightness: {
        25: '.25',
      }
    },
  },
  plugins: [],
}
