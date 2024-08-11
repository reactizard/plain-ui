import classNames from "classnames"
import { Position } from "../../../../theme/constants"
import { StyleProps } from "./types"

export const getStyles = ({ size, positionX, positionY }: StyleProps) => {
  const sizeMapper: Record<NonNullable<StyleProps["size"]>, string> = {
    sm: "w-[300px]",
    md: "w-[400px]",
    lg: "w-[600px]",
  }
  const positionMapper: Record<Position, string> = {
    bottom: "bottom-5",
    top: "top-5",
    left: "left-5",
    right: "right-5",
    center: "center-5",
  }
  const isOppositePositions =
    (positionX == "top" && positionY == "bottom") ||
    (positionX == "bottom" && positionY == "top")

  const motionContainer = classNames([
    "flex items-center justify-center fixed inset-0 z-[9999] bg-black bg-opacity-20",
  ])
  const container = classNames([
    size ? sizeMapper[size] : "",
    "absolute",
    !isOppositePositions ? positionMapper[positionX ?? "center"] : "",
    positionMapper[positionY ?? "center"],
    "p-5",
    "bg-white",
    "rounded-lg",
    "shadow border",
    "border-gray-200",
    "flex-col",
    "justify-start",
    "items-start",
    "gap-4",
    "inline-flex",
  ])
  const actionContainer = classNames([
    //"w-[352px]",
    //"h-10",
    "w-full",
    "justify-start",
    "items-center",
    "gap-4",
    "inline-flex",
  ])
  const iconContainer = classNames([
    "icons",
    "flex",
    "flex-row",
    "justify-between",
    "w-full",
  ])
  const closeIcon = classNames([
    "cursor-pointer",
    "stroke-slate-600",
    "w-5",
    "h-5",
  ])
  const title = classNames([
    "text-gray-900",
    "text-sm",
    "font-semibold",
    "leading-snug",
  ])
  const content = classNames([
    "text-gray-500",
    "text-smRegular",
    "leading-snug",
  ])
  return {
    container,
    motionContainer,
    actionContainer,
    iconContainer,
    closeIcon,
    title,
    content,
  }
}
