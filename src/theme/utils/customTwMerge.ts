import { extendTailwindMerge } from "tailwind-merge"
import { FontNames } from "../constants/font"

const textSizeClasses = Object.values(FontNames).map((obj) => {
  return Object.keys(obj)[0]
})

export const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: textSizeClasses,
        },
      ],
    },
  },
})
