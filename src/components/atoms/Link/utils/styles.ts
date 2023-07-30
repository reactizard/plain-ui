import classNames from "classnames"
import { Size } from "../../../../theme/constants"
import { text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, size, underline, disabled }: StyleProps) => {
  const sizeMapper: Record<Size, string> = {
    sm: "text-smRegular",
    md: "text-mdRegular",
    lg: "text-lgRegular",
  }

  const linkCls = classNames([
    color ? text[color][500] : "",
    underline ? "hover:underline" : "hover:no-underline",
    size ? sizeMapper[size] : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ])

  return { linkCls }
}
