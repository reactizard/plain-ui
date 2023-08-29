import classNames from "classnames"
import { Colors } from "../../../../theme/constants"
import { bg, border, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, variant, sideIcon }: StyleProps) => {
  const borderColorMapper: Record<Colors, string> = {
    aloha: "border-t-aloha-500",
    azure: "border-t-azure-500",
    danger: "border-t-danger-500",
    gray: "border-t-gray-500",
    lime: "border-t-lime-500",
    melon: "border-t-melon-500",
    orange: "border-t-orange-500",
    pink: "border-t-pink-500",
    primary: "border-t-primary-500",
    purple: "border-t-purple-500",
    success: "border-t-success-500",
    warm: "border-t-warm-500",
    warning: "border-t-warning-500",
    yellow: "border-t-yellow-500",
  }

  const variantMapper: Record<NonNullable<StyleProps["variant"]>, string[]> = {
    filled: [bg[color][100]],
    light: [bg["gray"][100]],
    outlined: [border[color][200], "border"],
  }
  const container = classNames([
    "container",
    "max-h-[154px]",
    "w-[300px]",
    "sm:w-[400px]",
    "rounded-[5px]",
    "border-t-[0px]",
    borderColorMapper[color],
    variant ? variantMapper[variant] : "",
  ])
  const body = classNames(["body", "flex", "flex-col", "gap-[8px]", "p-[16px]"])
  const indicator = classNames([
    "indicator",
    "border-t-[4px]",
    borderColorMapper[color],
    "h-[8px]",
    "rounded-full",
    "w-full",
    "transition-[width]",
    "duration-[10000ms]",
  ])
  const rlDivider = classNames([
    "rl-divider",
    "flex",
    "flex-col",
    "sm:flex-row",
  ])
  const leftPart = classNames(["left", "mr-[5px]"])
  const rightPart = classNames(["right", "flex", "flex-col", "gap-[5px]"])
  const headerContainer = classNames([
    "headerContainer",
    "flex",
    "w-full",
    "justify-between",
  ])
  const title = classNames(["max-w-[350px]", "truncate"])
  const closer = classNames([
    "closer",
    "cursor-pointer",
    "flex",
    "w-[24px]",
    "h-[24px]",
    "p-[6px]",
    "justify-center",
    "items-center",
    "text-smRegular",
    text["gray"][600],
    "hover:text-gray-800",
    sideIcon ? "-translate-y-[22px]" : "",
    sideIcon ? "md:-translate-y-[0px]" : "",
  ])
  const description = classNames([
    "max-h-[50px]",
    "sm:max-h-[70px]",
    "min-w-[240px]",
    "sm:min-w-[340px]",
    "max-w-[280px]",
    "sm:max-w-[340px]",
    "description",
    "text-mdRegular",
    "text-ellipsis overflow-auto",
  ])
  const footer = title
  return {
    container,
    body,
    indicator,
    rlDivider,
    leftPart,
    rightPart,
    headerContainer,
    title,
    closer,
    description,
    footer,
  }
}
