import classNames from "classnames"
import { StyleProps } from "./types"

export const getStyles = ({ color, disable, labelPosition }: StyleProps) => {
  const inputCls = classNames(["h-0", "w-0", "appearance-none"])
  const labelCls = classNames([
    "cursor-pointer",
    "-indent-[9999px]",
    "w-[50px]",
    "h-[25px]",
    "block",
    "rounded-[20px]",
    "bg-gray-500",
    "relative",
    "after:content-['']",
    "after:absolute",
    "after:bg-red-500",
    "after:w-[18px]",
    "after:h-[18px]",
    "after:top-[3px]",
    "after:left-[3px]",
    "after:rounded-[10px]",
  ])
  return { inputCls, labelCls }
}
