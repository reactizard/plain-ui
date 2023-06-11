import classNames from "classnames"
import { Colors } from "../../../../theme/constants"
import { Variant } from "../../../../theme/constants/variant"
import { getClasses } from "../../../../theme/functions/getClasses"

interface StyleProps {
  variant: Variant
  color?: Colors
  disabled?: boolean
}
export const getStyles = ({
  variant,
  color = "primary",
  disabled = false,
}: StyleProps) => {
  const { bg, border, hover, text, coloredText } = getClasses({ color })

  const styles = classNames(
    "flex",
    "items-center",
    "rounded-[4px]",
    "gap-[4px]",
    "px-[8px]",
    "py-[2px]",
    "font-inter",
    "text-sm",
    {
      ...(variant == "outlined" ? border : bg),
      ...(variant == "filled" ? hover : null),
      ...(variant == "outlined" ? coloredText : text),
      "disabled:opacity-50": disabled == true,
      "disabled:cursor-not-allowed": disabled == true,
    }
  )

  return styles
}
