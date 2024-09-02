import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";
const textShadowValue = "1px 1px 1px rgba(110, 110, 110, 0.9)";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0px" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(100%)" },
        },
      },
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Accordion
        accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        // Dialog
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Drawer
        drawerSlideLeftAndFade:
          "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sansChart: ["Geist Sans", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        "hidden-menu": "80px auto 60px",
        "mobile-menu": "190px auto 60px",
        "tablet-menu": `auto auto 70px`,
      },
      colors: {
        background: "#FFF7ED",
        "background-large": "#e9dbc0",
        footer: "#252525",
        "font-footer": "#AAAAAA",
        "light-orange": "#FFCC8D",
        "filter-normal": "#FFEAD0",
        "filter-text": "#4D4D4D",
        "rent-button": "#FF8C38",
        "active-simple": "#E17654",
        "active-luxury": "#161616",
        "active-rugged": "#115e59",
      },
      backgroundImage: {
        "hero-image": "url('/background.png')",
        "about-image": "url('/hero-about.png')",
        "about-image-hd": "url('/hero-about-hd.png')",
        mapbg: "url('/vanbg11.png')",
      },
      boxShadow: {
        "3xl": "10px 35px 60px 5px rgba(255, 255, 255, 0.3)",
      },
      textShadow: {
        default: textShadowValue,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: textShadowValue,
          },
        },
        ["responsive"],
      );
    },
    forms,
  ],
};
