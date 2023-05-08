const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '280px',
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        'f1': '1px',
        'f2': '2px',
        'f3': '3px',
        'f4': '5px',
        'f5': '8px',
        'f6': '13px',
        'f7': '21px',
        'f8': '34px',
        'f9': '55px',
        'f10': '89px',
        'f11': '144px',
        'f12': '233px',
        'f13': '377px',
        'f14': '610px',
        'f15': '987px',
        'f16': '1597px',
        'f17': '2584px',
      },
      borderRadius: {
        'f1': '1px',
        'f2': '2px',
        'f3': '3px',
        'f4': '5px',
        'f5': '8px',
        'f6': '13px',
        'f7': '21px',
        'f8': '34px',
        'f9': '55px',
        'f10': '89px',
        'f11': '144px',
        'f12': '233px',
        'f13': '377px',
        'f14': '610px',
        'f15': '987px',
        'f16': '1597px',
        'f17': '2584px',
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
  ],
}
