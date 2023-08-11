import classNames from "classnames"
import { bg, border, hover } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, disable, labelPosition }: StyleProps) => {
  const inputCls = classNames(["pUISwitch", "h-0", "w-0", "appearance-none"])
  const labelCls = classNames([
    "cursor-pointer",
    "-indent-[9999px]",
    "w-[40px]",
    "h-[24px]",
    "block",
    "rounded-[20px]",
    bg[color][300],
    hover[color][400],
    "relative",
    "after:content-['']",
    "after:absolute",
    "after:bg-gray-100",
    "after:w-[20px]",
    "after:h-[20px]",
    "after:top-[1px]",
    "after:left-[1px]",
    "after:rounded-[10px]",
    "checked:bg-blue-500",
    "border-[1px]",
    border[color][200],
    "after:transition-all",
    "after:duration-300",
  ])
  return { inputCls, labelCls }
}
