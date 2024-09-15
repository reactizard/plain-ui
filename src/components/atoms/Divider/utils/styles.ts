import { border, text } from "../../../../theme/mapper"
import { DividerProps, StyleProps } from "./types"
import { twMerge } from "tailwind-merge"

const weightMapper = {
  lg: { vertical: "border-l-4", horizontal: "border-b-4" },
  md: { vertical: "border-l-2", horizontal: "border-b-2" },
  sm: { vertical: "border-l", horizontal: "border-b" },
}

const labelPositionMapper = {
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
}

export const getStyles = ({
  labelPosition = "center",
  color,
  weight = "sm",
  orientation = "horizontal",
}: StyleProps) => {
  const parentContainerCls = twMerge([
    "relative",
    orientation === "vertical"
      ? "h-full flex justify-center items-center"
      : "w-full",
  ])

  const lineContainerCls = twMerge([
    "absolute",
    "inset-0",
    "flex",
    "items-center",
    orientation === "vertical" ? "flex-col" : "items-center",
  ])

  const lineCls = twMerge([
    "line",
    "w-full",
    "rounded",

    color ? border[color][300] : "",
    orientation === "vertical"
      ? `h-full w-[1px] ${weightMapper[weight].vertical}`
      : `w-full ${weightMapper[weight].horizontal}`,
  ])

  const itemContainerCls = twMerge([
    "relative",
    "flex",
    labelPosition ? labelPositionMapper[labelPosition] : "",
    orientation === "vertical" ? "flex-col  h-full" : "",
  ])

  const itemCls = twMerge(["bg-white", "px-4", text["gray"][500]])

  return {
    parentContainerCls,
    lineContainerCls,
    lineCls,
    itemContainerCls,
    itemCls,
  }
}
