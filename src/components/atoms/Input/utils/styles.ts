import { StyleProps } from "./types"
import { twMerge } from "tailwind-merge"
import { border, text } from "../../../../theme/mapper"
import { Colors } from "../../../../theme/constants"

export const getStyles = ({
  color = "primary",
  disabled,
  leftIcon,
  rightIcon,
}: StyleProps) => {
  const focusBorderMapper: Record<Colors, string> = {
    primary: "focus:border-primary-500",
    gray: "focus:border-gray-500",
    success: "focus:border-success-500",
    warning: "focus:border-warning-500",
    danger: "focus:border-danger-500",
    yellow: "focus:border-yellow-500",
    orange: "focus:border-orange-500",
    melon: "focus:border-melon-500",
    pink: "focus:border-pink-500",
    purple: "focus:border-purple-500",
    azure: "focus:border-azure-500",
    aloha: "focus:border-aloha-500",
    lime: "focus:border-lime-500",
    warm: "focus:border-warm-500",
  }
  const container = "relative w-fit"
  const input = twMerge([
    "pUIInput",
    "appearance-none",
    "rounded",
    "focus:outline-none",
    "p-1",

    !leftIcon ? "pl-2" : "",
    "border",
    "text-mdRegular",
    border["gray"][300],
    focusBorderMapper[color],
    leftIcon ? "pl-8" : "",
    rightIcon ? "pr-8" : "",
    disabled
      ? "disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200"
      : "",
  ])
  const lIcon = twMerge(
    "absolute inset-y-0 flex items-center pointer-events-none",
    "pl-2",
    text[color][500]
  )
  const rIcon = twMerge(
    "absolute inset-y-0 right-0  flex items-center pointer-events-none text-gray-500",
    "pr-2"
  )

  return { container, input, lIcon, rIcon }
}
