import { Colors } from "../constants"

interface GetClassesProps {
  color: Colors
}

export const getClasses = ({ color }: GetClassesProps) => {
  const bg = {
    //[`bg-${color}-500`]: true,
    "bg-primary-500": color == "primary",
    "bg-warning-500": color == "warning",
    "bg-success-500": color == "success",
    "bg-danger-500": color == "danger",
    "bg-yellow-500": color == "yellow",
    "bg-orange-500": color == "orange",
    "bg-melon-500": color == "melon",
    "bg-pink-500": color == "pink",
    "bg-purple-500": color == "purple",
    "bg-azure-500": color == "azure",
    "bg-aloha-500": color == "aloha",
    "bg-lime-500": color == "lime",
    "bg-warm-500": color == "warm",
    "bg-gray-300": color == "gray",
  }

  const bgLight = {
    //[`bg-${color}-100`]: true,
    "bg-primary-100": color == "primary",
    "bg-warning-100": color == "warning",
    "bg-success-100": color == "success",
    "bg-danger-100": color == "danger",
    "bg-yellow-100": color == "yellow",
    "bg-orange-100": color == "orange",
    "bg-melon-100": color == "melon",
    "bg-pink-100": color == "pink",
    "bg-purple-100": color == "purple",
    "bg-azure-100": color == "azure",
    "bg-aloha-100": color == "aloha",
    "bg-lime-100": color == "lime",
    "bg-warm-100": color == "warm",
    "bg-gray-100": color == "gray",
  }

  const hover = {
    //[`hover:bg-${color}-700`]: true,
    "hover:bg-primary-700": color == "primary",
    "hover:bg-warning-700": color == "warning",
    "hover:bg-success-700": color == "success",
    "hover:bg-danger-700": color == "danger",
    "hover:bg-yellow-700": color == "yellow",
    "hover:bg-orange-700": color == "orange",
    "hover:bg-melon-700": color == "melon",
    "hover:bg-pink-700": color == "pink",
    "hover:bg-purple-700": color == "purple",
    "hover:bg-azure-700": color == "azure",
    "hover:bg-aloha-700": color == "aloha",
    "hover:bg-lime-700": color == "lime",
    "hover:bg-warm-700": color == "warm",
    "hover:bg-gray-300": color == "gray",
  }

  const fill = {
    //[`fill-${color}-500`]: true,
    "fill-primary-500": color == "primary",
    "fill-warning-500": color == "warning",
    "fill-success-500": color == "success",
    "fill-danger-500": color == "danger",
    "fill-yellow-500": color == "yellow",
    "fill-orange-500": color == "orange",
    "fill-melon-500": color == "melon",
    "fill-pink-500": color == "pink",
    "fill-purple-500": color == "purple",
    "fill-azure-500": color == "azure",
    "fill-aloha-500": color == "aloha",
    "fill-lime-500": color == "lime",
    "fill-warm-500": color == "warm",
    "fill-gray-300": color == "gray",
  }

  const border = {
    border: true,
    // [`border-${color}-700`]: true,
    "border-primary-700": color == "primary",
    "border-warning-700": color == "warning",
    "border-success-700": color == "success",
    "border-danger-700": color == "danger",
    "border-yellow-700": color == "yellow",
    "border-orange-700": color == "orange",
    "border-melon-700": color == "melon",
    "border-pink-700": color == "pink",
    "border-purple-700": color == "purple",
    "border-azure-700": color == "azure",
    "border-aloha-700": color == "aloha",
    "border-lime-700": color == "lime",
    "border-warm-700": color == "warm",
    "border-gray-300": color == "gray",
  }

  const text = {
    "text-gray-100": color == "primary" || "warning" || "success" || "danger",
    "text-gray-400": color == "gray",
  }

  const coloredText = {
    // [`text-${color}-700`]: true,
    "text-primary-700": color == "primary",
    "text-warning-700": color == "warning",
    "text-success-700": color == "success",
    "text-danger-700": color == "danger",
    "text-yellow-700": color == "yellow",
    "text-orange-700": color == "orange",
    "text-melon-700": color == "melon",
    "text-pink-700": color == "pink",
    "text-purple-700": color == "purple",
    "text-azure-700": color == "azure",
    "text-aloha-700": color == "aloha",
    "text-lime-700": color == "lime",
    "text-warm-700": color == "warm",
    "text-gray-300": color == "gray",
  }

  return { bg, bgLight, hover, border, text, coloredText, fill }
}
