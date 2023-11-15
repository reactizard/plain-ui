import classNames from "classnames"
import { Colors, Size } from "../../../../theme/constants"
import { border, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

const bgMapper: Record<Colors, string> = {
  primary: "before:bg-primary-500",
  gray: "before:bg-gray-500",
  success: "before:bg-success-500",
  warning: "before:bg-warning-500",
  danger: "before:bg-danger-500",
  yellow: "before:bg-yellow-500",
  orange: "before:bg-orange-500",
  melon: "before:bg-melon-500",
  pink: "before:bg-pink-500",
  purple: "before:bg-purple-500",
  azure: "before:bg-azure-500",
  aloha: "before:bg-aloha-500",
  lime: "before:bg-lime-500",
  warm: "before:bg-warm-500",
}

const sizeMapper: Record<Size, string> = {
  sm: "w-3 h-3 before:w-1 before:h-1",
  md: "w-5 h-5 before:w-3 before:h-3",
  lg: "w-7 h-7 before:w-5 before:h-5",
}

export const getStyles = ({
  color = "primary",
  disabled,
  labelPosition = "right",
  size = "md",
  direction,
}: StyleProps) => {
  const containerCls = classNames([
    "radio-container",
    "max-w-fit",
    "flex",
    labelPosition == "right" ? "flex-row" : "flex-row-reverse",
    "justify-content",
    "items-center",
  ])

  const radioCls = classNames([
    disabled ? "disabled:opacity-50 disabled:cursor-not-allowed" : "",
    "pUIRadio",
    "appearance-none",
    sizeMapper[size],
    "border",
    border[color][500],
    "rounded-full",
    "grid",
    "place-content-center",

    "before:rounded-full",
    "before:scale-0",
    bgMapper[color],
  ])

  const labelCls = classNames([
    disabled ? text["gray"][500] : "",
    "radio-label",
    "m-2",
  ])

  const groupCls = classNames([
    "flex",
    direction == "vertical" ? "flex-col" : "flex-row",
  ])

  return { radioCls, containerCls, labelCls, groupCls }
}
