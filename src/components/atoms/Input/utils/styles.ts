import classNames from "classnames"
import { StyleProps } from "./types"
import { twMerge } from "tailwind-merge"
import { border } from "../../../../theme/mapper"

export const getStyles = ({ color }: StyleProps) => {
  const container = classNames([""])
  const input = twMerge([
    "pUIInput",
    "appearance-none",
    "rounded",
    "border",
    border["gray"][300],
    "focus:outline-none",
    "focus:border-gray-500",
    "p-1",
    "pl-9",
    "pr-9",
  ])
  return { container, input }
}
