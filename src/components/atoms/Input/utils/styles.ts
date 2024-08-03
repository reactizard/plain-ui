import { StyleProps } from "./types"
import { twMerge } from "tailwind-merge"
import { border, focusBorder, text } from "../../../../theme/mapper"

export const getStyles = ({
  color = "primary",
  disabled,
  leftIcon,
  rightIcon,
}: StyleProps) => {
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
    focusBorder[color],
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
