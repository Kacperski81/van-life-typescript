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
        'hidden-menu': '60px auto 40px',
        'mobile-menu': '200px auto 50px',
        'tablet-menu': `auto auto 50px`,
      },
      colors: {
        'background': '#FFF7ED',
        'footer': '#252525',
        'font-footer': '#AAAAAA',
        'light-orange': '#FFCC8D',
        'filter-normal': '#FFEAD0',
        'filter-text': '#4D4D4D',
        'rent-button': '#FF8C38',
        'active-simple': '#E17654',
        'active-luxury': '#161616',
        'active-rugged': '#115e59',
      },
      backgroundImage: {
        'hero-image': "url('/background.png')",
        'about-image': "url('/hero-about.png')",
        'about-image-hd': "url('/hero-about-hd.png')",
      }
    },
  },
  plugins: [],
}

