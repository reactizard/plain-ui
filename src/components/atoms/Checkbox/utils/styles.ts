import classNames from "classnames"
import { Colors, Size } from "../../../../theme/constants"
import { bg } from "../../../../theme/mapper"
import { StyleProps } from "./types"
export const getStyles = ({
  color = "primary",
  disabled,
  checked,
  size = "sm",
}: Partial<StyleProps>) => {
  const sizeMapper: Record<Size, string> = {
    sm: "w-[16px] h-[16px]",
    md: "w-[20px] h-[20px]",
    lg: "w-[25px] h-[25px]",
  }

  const focusShadowMapper: Record<Colors, string> = {
    primary: "focus:shadow-primary-500/50",
    gray: "focus:shadow-gray-500/50",
    success: "focus:shadow-success-500/50",
    warning: "focus:shadow-warning-500/50",
    danger: "focus:shadow-danger-500/50",
    yellow: "focus:shadow-yellow-500/50",
    orange: "focus:shadow-orange-500/50",
    melon: "focus:shadow-melon-500/50",
    pink: "focus:shadow-pink-500/50",
    purple: "focus:shadow-purple-500/50",
    azure: "focus:shadow-azure-500/50",
    aloha: "focus:shadow-aloha-500/50",
    lime: "focus:shadow-lime-500/50",
    warm: "focus:shadow-warm-500/50",
  }

  const parentContainer = classNames([
    "flex",
    "items-center",
    "justify-start",
    "max-w-fit",
  ])

  const container = classNames([
    "flex",
    "items-center",
    "justify-center",
    "border-[1px]",
    "border-gray-300",
    "rounded",
    "cursor-pointer",
    "focus:shadow-[0_0_0_2px] focus:border-none",
    disabled ? "bg-gray-300 pointer-events-none" : "",
    checked && !disabled ? bg[color][500] : "bg-gray-100",
    checked ? "" : "hover:bg-primary-100 hover:border-primary-500",
    sizeMapper[size],
    focusShadowMapper[color],
  ])

  const label = classNames(["m-1", "cursor-pointer"])

  return { container, parentContainer, label }
}
