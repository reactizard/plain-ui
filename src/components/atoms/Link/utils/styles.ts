import classNames from "classnames"
import { text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, underline }: StyleProps) => {
  const linkCls = classNames([
    text[color][500],
    underline ? "underline" : "no-underline",
  ])

  return { linkCls }
}
