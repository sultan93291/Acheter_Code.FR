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
        light_black: "#052732",
        text_black: "#333",
        text_gray: "#A1A1A1",
        secondary_gray: "#5C5C5C",
      },
      fontFamily: {
        righteous: '"Righteous", serif',
        nunito: '"Nunito Sans", serif',
      },
      boxShadow: {
        custom_shadow: "0px 0px 4px 0px rgba(0, 9, 54, 0.06)",
      },
    },
  },
  plugins: [],
};
