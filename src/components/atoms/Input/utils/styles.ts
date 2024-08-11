import { StyleProps } from "./types"
import { twMerge } from "tailwind-merge"
import { border, focusBorder, text } from "../../../../theme/mapper"

export const getStyles = ({
  color = "primary",
  error,
  disabled,
  leftIcon,
  rightIcon,
  cleanable,
}: StyleProps) => {
  const container = twMerge("relative w-fit my-1", disabled ? "opacity-80" : "")

  const input = twMerge([
    "pUIInput",
    "appearance-none",
    "rounded",
    "focus:outline-none",
    "p-1",
    "border",
    "text-mdRegular",
    "transition-all-0.2s ease",
    "resize-none",
    !leftIcon ? "pl-2" : "",
    error ? border["danger"][500] : border["gray"][300],
    error ? "" : focusBorder[color],
    leftIcon ? "pl-8" : "",
    rightIcon ? "pr-8" : "",
    disabled ? "cursor-not-allowed bg-gray-200" : "",
    "shadow-sm",
  ])

  const commonIconClass =
    "absolute inset-y-0 flex items-center pointer-events-none opacity-50"
  const lIcon = twMerge(commonIconClass, "pl-2")
  const rIcon = twMerge([
    commonIconClass,
    "pr-2",
    "right-0",
    cleanable ? "pointer-events-auto cursor-pointer" : "",
  ])

  return { container, input, lIcon, rIcon }
}
