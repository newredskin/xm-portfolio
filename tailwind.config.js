/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
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
