import { ColorPalette } from "./src/theme/constants"
import Font from "./src/theme/constants/font"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...ColorPalette
      },
    },
    ...Font
  },
  plugins: [],
}