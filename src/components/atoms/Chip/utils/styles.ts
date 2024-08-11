import classNames from "classnames"
import { Colors } from "../../../../theme/constants"
import { bg, border, hover, text } from "../../../../theme/mapper"
import { ChipProps } from "../Chip"

interface StyleProps {
  variant: NonNullable<ChipProps["variant"]>
  color?: Colors
  disabled?: boolean
}

type variantColorType = Record<StyleProps["variant"], Array<string>>

export const getStyles = ({
  variant,
  color = "primary",
  disabled = false,
}: StyleProps) => {
  const outlined = ["border", border[color][700], text[color][700]]
  const filled = [bg[color][500], hover[color][600], "text-white"]
  const variantColor: variantColorType = { filled, outlined }

  const ownClasses = [
    "flex",
    "items-center",
    "rounded-[4px]",
    "gap-[4px]",
    "px-[8px]",
    "py-[2px]",
    "text-smRegular",
    disabled ? "disabled:opacity-50 disabled:cursor-not-allowed" : "",
    "w-fit",
  ]

  const styles = classNames(variantColor[variant], ownClasses)

  return styles
}
