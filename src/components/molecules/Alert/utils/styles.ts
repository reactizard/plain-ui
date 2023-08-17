import classNames from "classnames"
import { StyleProps } from "./types"

export const getStyles = ({ color }: StyleProps) => {
  const container = classNames([
    "container",
    "h-[154px]",
    "w-[500px]",
    "rounded-[5px]",
    "border-l-[4px]",
    "border-l-indigo-800",
    "bg-blue-300",
  ])
  const body = classNames([
    "body",
    "flex",
    "flex-col",
    "items-start",
    "gap-[8px]",
    "px-[5px]",
    "py-[8px]",
  ])
  const rlDivider = classNames(["rl-divider", "flex", "flex-row"])
  const leftPart = classNames(["left", "px-[5px]"])
  const rightPart = classNames(["right", "flex", "flex-col", "gap-[5px]"])
  const header = classNames(["header", "flex", "w-full", "justify-between"])
  const title = classNames([])
  const closer = classNames([
    "closer",
    "rounded-full",
    "font-bold",
    "text-white",
  ])
  const content = classNames(["content", "text-mdRegular"])
  const footer = classNames([])
  return {
    container,
    body,
    rlDivider,
    leftPart,
    rightPart,
    header,
    title,
    closer,
    content,
    footer,
  }
}
