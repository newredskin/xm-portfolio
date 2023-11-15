/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      transitionDuration: {
        10000: "10000ms",
      },
      colors: {
        red: {
          700: "rgb(193, 18, 31)",
          600: "rgb(188,71,73)",
        },
        teal: {
          950: "rgb(56,102,65)",
          900: "rgb(106,153,78)",
          700: "rgb(163,177,138)",
        },
        orange: {
          50: "rgb(252,240,213)",
          100: "rgb(254,249,237)",
        },
        gray: {
          950: "rgb(0,19,30)",
          900: "rgb(0,38,58)",
          800: "rgb(0, 48, 73)",
          700: "rgb(102,155,188)",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1180px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  darkMode: "class",
};

/*
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1920px",
    },
 */

/*
/* test palette 1
  rgb(0, 48, 73)
  rgb(102,155,188)
  rgb(252,240,213)
  rgb(254,249,237)
  rgb(193,18,31)
  rgb(120,0,0)

  rgb(56,102,65)
  rgb(106,153,78)
  rgb(167,201,87)
  rgb(242,232,207)
  rgb(188,71,73)

  rgb(52,78,65)
  rgb(58,90,64)
  rgb(88,129,87)
  rgb(163,177,138)
  rgb(218,215,205)

  rgb(120,113,108)

*/
