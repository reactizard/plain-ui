import classNames from "classnames"
import { bg, text } from "../../../../theme/mapper"

import { Size } from "../../../../theme/constants"
import { StyleProps } from "./types"

type variantColorType = Record<StyleProps["variant"], Array<string>>

export const getStyles = ({ variant, color, size }: StyleProps) => {
  const filled = [bg[color][500], "text-white"]
  const plain = [bg[color][100], text[color][700]]
  const variantColor: variantColorType = { filled, plain }

  const sizeMapper: Record<Size, string> = {
    sm: "h-[16px] py-[1px] px-[6px] text-xsRegular",
    md: "h-[24px] py-[2px] px-[8px]",
    lg: "h-[32px] py-[3px] px-[10px]",
  }

  const ownClasses = [
    "flex",
    "items-center",
    "rounded-[999px]",
    "gap-[4px]",
    "max-w-fit",
    "font-inter",
    "text-smSemiBold",
    size ? sizeMapper[size] : "",
  ]
  const styles = classNames(ownClasses, variantColor[variant])

  return styles
}
