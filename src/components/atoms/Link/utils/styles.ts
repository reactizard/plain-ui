import classNames from "classnames"
import { Size } from "../../../../theme/constants"
import { text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({
  color,
  size = "md",
  underline = true,
}: StyleProps) => {
  const sizeMapper: Record<Size, string> = {
    sm: "text-smRegular",
    md: "text-mdRegular",
    lg: "text-lgRegular",
  }

  const linkCls = classNames([
    color ? text[color][500] : "",
    underline ? "underline" : "no-underline",
    sizeMapper[size],
  ])

  return { linkCls }
}
