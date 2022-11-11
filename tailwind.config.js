/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-200": "#6783a4",
      "primary-400": "#023168",
      "primary-700": "#011d3e",
      "secondary-200": "#ECEEF1",
      "secondary-400": "#D8DEE7",
      "secondary-700": "#82878D",
      "secondary-900": "#333333",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
