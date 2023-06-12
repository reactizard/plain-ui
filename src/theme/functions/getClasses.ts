import { Colors } from "../constants"

interface GetClassesProps {
  color: Colors
}

export const getClasses = ({ color }: GetClassesProps) => {
  const bg = {
    [`bg-${color}-500`]: true,
    "bg-gray-300": color == "gray",
  }

  const bgLight = {
    [`bg-${color}-100`]: true,
  }

  const hover = {
    [`hover:bg-${color}-700`]: true,
    "hover:bg-gray-300": color == "gray",
  }

  const fill = {
    [`fill-${color}-500`]: true,
    "fill-gray-300": color == "gray",
  }

  const border = {
    border: true,
    [`border-${color}-700`]: true,
    "border-gray-300": color == "gray",
  }

  const text = {
    "text-gray-100": color == "primary" || "warning" || "success" || "danger",
    "text-gray-400": color == "gray",
  }

  const coloredText = {
    [`text-${color}-700`]: true,
    "text-gray-300": color == "gray",
  }

  return { bg, bgLight, hover, border, text, coloredText, fill }
}
