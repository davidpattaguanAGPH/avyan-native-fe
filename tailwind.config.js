/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      aiaregular: ["aiaregular", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          black: "#333D47",
          red: "#D31145",
          white200: "#F8FAFC",
          white: "#FFFFFF",
          gray: "rgba(173, 177, 181, 0.4)",
          background: "#D7D7D7",
        },
        gray: {
          100: "#F3F1EF",
          200: "#DDD6D3",
          300: "#D1C9C3",
          400: "#806F61",
        },
        blue: {
          100: "#CADCE9",
          200: "#6598BD",
          300: "#3976A8",
          400: "#2C5B81",
        },
        lavender: {
          100: "#D2D1E2",
          200: "#B7B3C9",
          300: "#9F9AB7",
          400: "#796F9C",
        },
        purple: {
          100: "#E7E5EC",
          200: "#7776AA",
          300: "#4A488E",
          400: "#363568",
        },
        yellow: {
          100: "#FAF1CC",
          200: "#F4D670",
          300: "#F0CA4E",
          400: "#8A6F22",
        },
        orange: {
          100: "#F9DDD4",
          200: "#F19C7F",
          300: "#EE7C57",
          400: "#CD4120",
        },
        magenta: {
          100: "#E6C2D6",
          200: "#BC4D86",
          300: "#AB245F",
          400: "#931F52",
        },
        pink: {
          100: "#FADEE5",
          200: "#F2A0A5",
          300: "#EF8187",
          400: "#BF4D5E",
        },
      },
    },
  },
  plugins: [],
};
