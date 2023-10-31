/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
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
