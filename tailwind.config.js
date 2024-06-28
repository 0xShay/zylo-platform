/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      zylo: {
        gray: '#e6e6e6',
        blue: {
          '100': '#0fc1d1',
          '200': '#0b95a2',
          '300': '#086972',
          '400': '#053d42'
        }
      }
    },
    extend: {},
  },
  plugins: [],
}

