const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#f7396c',
          200: '#fc0345',
          300: '#c20034',
          400: '#780121',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}