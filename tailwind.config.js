/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFA500",
        light_orange: " #FFF6E6",
        white: "#fff",
        light_gray: "#767676",
        transparent_black: "#0000003D",
        owl_black: "#052732",
      },
      fontFamily: {
        righteous: '"Righteous", serif',
        nunito: '"Nunito Sans", serif',
      },
    },
  },
  plugins: [],
};
