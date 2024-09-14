import { bg, border, hover, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({
  variant,
  color = "primary",
  disabled = false,
  rounded,
}: StyleProps) => {
  const filledStyle = `${bg[color][500]} ${hover[color][600]} ${text["gray"][100]}`
  const outlinedStyle = `border ${border[color][600]} ${bg["gray"][100]} ${hover[color][100]} ${text[color][600]}`

  const chip = [
    "w-fit",
    "flex",
    "items-center",
    "rounded-[4px]",
    "gap-[4px]",
    "px-[8px]",
    "py-[2px]",
    "text-smSemiBold",
    disabled ? "disabled:opacity-50 disabled:cursor-not-allowed" : "",
    rounded ? "rounded-xl" : "",
    variant == "filled" ? filledStyle : outlinedStyle,
  ]

  return { chip }
}
