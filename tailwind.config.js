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
        'hiddenMenu': '60px auto 50px',
        'shownMenu': '160px auto 50px'
      },
      colors: {
        'background': '#FFF7ED',
        'footer': '#252525',
        'font-footer': '#AAAAAA',
        'light-orange': '#FFCC8D',
        'filter-normal': '#FFEAD0',
        'filter-text': '#4D4D4D',
        'rent-button': '#FF8C38',
      },
      backgroundImage: {
        'hero-image': "url('/background.png')"
      }
    },
  },
  plugins: [],
}

