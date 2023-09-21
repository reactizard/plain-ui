import classNames from "classnames"
import { border } from "../../../../theme/mapper"
import { StyleProps } from "./types"

interface dimension {
  width: string
  height: string
}

type dimenstionMapperType = Record<
  NonNullable<StyleProps["variant"]>,
  Record<NonNullable<StyleProps["orientation"]>, dimension>
>
export const getStyles = ({ color, variant, orientation }: StyleProps) => {
  const dimenstionMapper: dimenstionMapperType = {
    card: {
      vertical: { height: "", width: "w-[370px]" },
      horizontal: { height: "", width: "w-[808px]" },
    },
    user: {
      vertical: { height: "", width: "w-[240px]" },
      horizontal: { height: "", width: "w-[400px]" },
    },
    button: {
      vertical: { height: "", width: "w-[400px]" },
      horizontal: { height: "", width: "w-[400px]" },
    },
  }

  console.log(dimenstionMapper)

  const container = classNames([
    "container",
    variant && orientation ? dimenstionMapper[variant][orientation].width : "",
    "rounded-[8px]",
    "border",
    border["gray"][200],
    "shadow-md",
    "shadow-gray-500/50",
  ])

  return { container }
}
