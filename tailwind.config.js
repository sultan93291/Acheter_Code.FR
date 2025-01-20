/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFA500",
        light_orange: " #FFF6E6",
        secondary_orange: "#FF8000",
        white: "#fff",
        light_gray: "#C2C8CA",
        transparent_black: "#0000003D",
        owl_black: "#052732",
        light_black: "#052732",
        text_black: "#333",
        text_gray: "#A1A1A1",
        secondary_gray: "#5C5C5C",
        ocean_blue: "#ADD8E6",
        red: "#FF0000",
        primary_gray: "#5C5C5C",
        secondary_blue: "#9DC5D1",
        primary_blue: "#D9EDF4",
        off_blue: "#7B99A3",
        heading_black: "#2A3439",
        card_gray: "#495B61",
        dark_black: "#171D1F",
        text_orange: "#B57500",
        border_orange: "#E89600",
        deep_ocean: "#E6F3F7",
        shade_black: "#272727",
        specail_black: "#242424",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        righteous: 'Righteous", serif',
        nunito: "Nunito Sans, serif",
      },
      boxShadow: {
        custom_shadow: "0px 0px 4px 0px rgba(0, 9, 54, 0.06)",
        btn_shadow: "0px 2px 4px 0px rgba(80, 0, 72, 0.14)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "pulse-text": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        "zoom-in": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        "pulse-text": "pulse-text 1.5s ease-in-out infinite",
        "zoom-in": "zoom-in 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
