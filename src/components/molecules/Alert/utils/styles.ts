import classNames from "classnames"
import { Colors } from "../../../../theme/constants"
import { bg, border, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, sideIcon, variant }: StyleProps) => {
  const borderColorMapper: Record<Colors, string> = {
    aloha: "border-l-aloha-500",
    azure: "border-l-azure-500",
    danger: "border-l-danger-500",
    gray: "border-l-gray-500",
    lime: "border-l-lime-500",
    melon: "border-l-melon-500",
    orange: "border-l-orange-500",
    pink: "border-l-pink-500",
    primary: "border-l-primary-500",
    purple: "border-l-purple-500",
    success: "border-l-success-500",
    warm: "border-l-warm-500",
    warning: "border-l-warning-500",
    yellow: "border-l-yellow-500",
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
    "sm:w-[500px]",
    "rounded-[5px]",
    "border-l-[4px]",
    borderColorMapper[color],
    variant ? variantMapper[variant] : "",
  ])
  const body = classNames(["body", "flex", "flex-col", "gap-[8px]", "p-[16px]"])
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
    "sm:min-w-[440px]",
    "max-w-[280px]",
    "sm:max-w-[440px]",
    "description",
    "text-mdRegular",
    "text-ellipsis overflow-auto",
  ])
  const footer = title
  return {
    container,
    body,
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
