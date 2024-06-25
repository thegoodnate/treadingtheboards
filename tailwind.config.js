const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Frontage-Regular', ...defaultTheme.fontFamily.serif],
      },
      letterSpacing: {
        normal: '-.3rem',
        tight: '-.6rem',
        tighter: '-1rem',
       },
       lineHeight: {
        loose: '7rem',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
