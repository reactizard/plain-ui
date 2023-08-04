import classNames from "classnames"
import { Size } from "../../../../theme/constants"
import { border, text } from "../../../../theme/mapper"
import { DividerProps, StyleProps } from "./types"

export const getStyles = ({ labelPosition, color, weight }: StyleProps) => {
  const labelPositionMapper: Record<DividerProps["labelPosition"], string> = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end",
  }

  const weightMapper: Record<Size, string> = {
    lg: "border-b-4",
    md: "border-b-2",
    sm: "border-b",
  }

  const parentContainerCls = classNames(["relative"])

  const lineContainerCls = classNames([
    "absolute",
    "inset-0",
    "flex",
    "items-center",
  ])

  const lineCls = classNames([
    color ? border[color][300] : "",
    "w-full",
    weight ? weightMapper[weight] : "",
    "rounded",
  ])

  const itemContainerCls = classNames([
    "relative",
    "flex",
    labelPositionMapper[labelPosition],
  ])

  const itemCls = classNames(["bg-white", "px-4", text["gray"][500]])

  return {
    parentContainerCls,
    lineContainerCls,
    lineCls,
    itemContainerCls,
    itemCls,
  }
}
