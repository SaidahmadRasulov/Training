/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#B500F4',
        gray: '#5F5F5F',
        lightGray: '#ABABAB',
        orange: '#FF8A00'
      },
      width: {
        '30': '30%'
      },
      screens: {
        sm: '10px',
        md: '580px'
      },
      borderColor: {
        gray: '#ECECEC'
      }
    },
  },
  plugins: [],
}

