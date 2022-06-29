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
      },

      width: {
        'text': '700px',
      },

      maxWidth: {
        'text': '700px',
      },

      backgroundImage: {
        'laptop-code': 'url("../public/laptop-code.jpg")',
      }
    },
  },
  plugins: [],
}
