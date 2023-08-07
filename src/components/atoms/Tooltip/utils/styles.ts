import classNames from "classnames"
import { Size } from "../../../../theme/constants"
import { bg, border } from "../../../../theme/mapper"
import { PositionMapperType, StyleProps } from "./types"

export const getStyles = ({ position, color, size }: StyleProps) => {
  const positionMapper: Record<
    NonNullable<StyleProps["position"]>,
    PositionMapperType
  > = {
    bottom: {
      tooltip: "top",
      arrow: "top-[-6px]",
      margin: "mt-5",
      position: "top-full",
    },
    top: {
      tooltip: "bottom",
      arrow: "bottom-[-6px]",
      margin: "mb-5",
      position: "bottom-full",
    },
    left: {
      tooltip: "right",
      arrow: "right-[-6px]",
      margin: "mr-5",
      position: "right-full",
    },
    right: {
      tooltip: "left",
      arrow: "left-[-6px]",
      margin: "ml-5",
      position: "left-full",
    },
  }

  const sizeMapper: Record<Size, string> = {
    lg: "min-h-[46px]",
    md: "min-h-[35px]",
    sm: "min-h-[14px]",
  }

  const parent = classNames(
    "relative",
    "flex",
    "items-center",
    "justify-center",
    "max-w-fit"
  )

  const container = classNames(
    "absolute",
    "text-white",
    "px-4",
    "rounded",
    "flex",
    "items-center",
    "justify-center",
    "w-max",
    "opacity-0",
    color ? bg[color][500] : "",
    color ? border[color][300] : "",
    "border-2",
    position ? positionMapper[position].margin : "",
    position ? positionMapper[position].position : "",
    size ? sizeMapper[size] : "",
    "max-w-[300px]",
    "break-words"
  )

  const arrow = classNames(
    color ? bg[color][500] : "",
    "h-3",
    "w-3",
    "absolute",
    "rotate-45",
    position ? positionMapper[position].arrow : ""
  )

  return { parent, container, arrow }
}
