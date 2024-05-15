/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      gridTemplateRows: {
        'layout': '80px 1fr 50px'
      },
      colors: {
        'background': '#FFF7ED',
        'footer': '#252525',
        'font-footer': '#AAAAAA',
        'light-orange': '#FFCC8D',
      },
      backgroundImage: {
        'hero-image': "url('/background.png')"
      }
    },
  },
  plugins: [],
}

