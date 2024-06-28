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
      lightgray: '#f2f2f2',
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

