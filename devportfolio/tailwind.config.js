/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  darkMode: 'class', // class toggles the dark mode manually
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      }
    },
  },
  plugins: [],
}
