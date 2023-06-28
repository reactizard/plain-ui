import classNames from "classnames"
import { Colors, Size } from "../../../../theme/constants"
import { bg, border, hover, text } from "../../../../theme/mapper"
import { ButtonProps } from "../Button"

interface StyleProps extends ButtonProps {
  color: Colors
  size: Size
}

export const getStyles = ({
  color,
  disabled,
  size,
  variant,
  children,
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

  const ownClasses = [
    "inline-flex",
    "flex-shrink-0",
    "gap-[4px]",
    "max-w-fit",
    "items-center",
    sizeMapper[size].height,
    children ? "px-[20px]" : sizeMapper[size].padding,
    "font-inter",
    "text-mdRegular",
    disabled ? "disabled:opacity-50 disabled:cursor-not-allowed" : "",
    round ? "rounded-[200px]" : "rounded-[4px]",
    variant ? variantColor[variant] : "",
  ]

  const styles = classNames(ownClasses)

  return styles
}
