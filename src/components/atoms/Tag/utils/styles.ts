import classNames from "classnames"
import { bg, text } from "../../../../theme/mapper"

import { Size } from "../../../../theme/constants"
import { StyleProps } from "./types"

export const getStyles = ({ variant, color, size }: StyleProps) => {
  const sizeMapper: Record<Size, string> = {
    sm: "h-[16px] py-[1px] px-[6px] text-xsRegular",
    md: "h-[24px] py-[2px] px-[8px]",
    lg: "h-[32px] py-[3px] px-[10px]",
  }

  const colorMapper: Record<NonNullable<StyleProps["variant"]>, string[]> = {
    filled: [color ? bg[color][500] : "", "text-white"],
    plain: [color ? bg[color][100] : "", color ? text[color][700] : ""],
  }
  const ownClasses = [
    "flex",
    "items-center",
    "rounded-[999px]",
    "gap-[4px]",
    "max-w-fit",
    "text-smSemiBold",
    size ? sizeMapper[size] : "",
    variant ? colorMapper[variant] : "",
  ]
  const styles = classNames(ownClasses)

  return styles
}
