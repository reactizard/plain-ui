import { Size } from "../../../../theme/constants"
import { bg, border, hover, ring, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({
  color = "primary",
  disabled,
  size = "sm",
  variant = "filled",
  fullWidth = false,
  round,
}: StyleProps) => {
  const sizeMapper: Record<Size, { height: string; padding: string }> = {
    lg: { height: "h-12", padding: "px-[15px]" },
    md: { height: "h-10", padding: "px-[10px]" },
    sm: { height: "h-8", padding: "px-[6px]" },
  }

  const filled = [bg[color][500], hover[color][600], "text-white"]
  const outlined = [
    "border",
    border[color][700],
    text[color][700],
    hover[color][200],
  ]
  const variantColor = { filled, outlined }

  const button = [
    fullWidth ? "w-full" : "w-max",
    "flex",
    "gap-[4px]",

    "items-center",
    "justify-center",
    "text-center",
    "text-mdRegular",
    "focus:ring-2 focus:outline-none",
    sizeMapper[size].height,
    sizeMapper[size].padding,
    disabled ? "disabled:opacity-50 disabled:cursor-not-allowed" : "",
    round ? "rounded-[200px]" : "rounded-[4px]",
    variant ? variantColor[variant] : "",
    ring[color][300],
  ]

  return { button }
}
