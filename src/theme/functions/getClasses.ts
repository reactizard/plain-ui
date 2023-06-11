import { Colors } from "../constants"

interface GetClassesProps {
  color: Colors
}
export const getClasses = ({ color }: GetClassesProps) => {
  const bg = {
    "bg-primary-500": color == "primary",
    "bg-warning-500": color == "warning",
    "bg-success-500": color == "success",
    "bg-danger-500": color == "danger",
    "bg-gray-300": color == "grays",
  }

  const bgLight = {
    "bg-primary-100": color == "primary",
    "bg-warning-100": color == "warning",
    "bg-success-100": color == "success",
    "bg-danger-100": color == "danger",
    "bg-gray-100": color == "grays",
  }

  const hover = {
    "hover:bg-primary-700": color == "primary",
    "hover:bg-warning-700": color == "warning",
    "hover:bg-success-700": color == "success",
    "hover:bg-danger-700": color == "danger",
    "hover:bg-gray-300": color == "grays",
  }

  const fill = {
    "fill-primary-500": color == "primary",
    "fill-warning-500": color == "warning",
    "fill-success-500": color == "success",
    "fill-danger-500": color == "danger",
    "fill-gray-300": color == "grays",
  }

  const border = {
    border: true,
    "border-primary-700": color == "primary",
    "border-warning-700": color == "warning",
    "border-success-700": color == "success",
    "border-danger-700": color == "danger",
    "border-gray-300": color == "grays",
  }

  const text = {
    "text-gray-100": color == "primary" || "warning" || "success" || "danger",
    "text-gray-400": color == "grays",
  }

  const coloredText = {
    "text-primary-700": color == "primary",
    "text-warning-700": color == "warning",
    "text-success-700": color == "success",
    "text-danger-700": color == "danger",
    "text-gray-300": color == "grays",
  }

  return { bg, bgLight, hover, border, text, coloredText, fill }
}
