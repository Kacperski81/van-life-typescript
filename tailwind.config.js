const textShadowValue = '1px 1px 1px rgba(110, 110, 110, 0.9)';
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
        'hidden-menu': '80px auto 60px',
        'mobile-menu': '190px auto 70px',
        'tablet-menu': `auto auto 70px`,
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
        'mapbg': "url('/vanbg11.png')"
      },
      boxShadow: {
        '3xl': '10px 35px 60px 5px rgba(255, 255, 255, 0.3)',
      },
      textShadow: {
        'default': textShadowValue,
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: textShadowValue,
        },
      }, ['responsive']);
    },
  ],
}

