import { ColorPalette } from "./src/theme/constants/colors"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...ColorPalette
      }
    },
  },
  plugins: [],
}