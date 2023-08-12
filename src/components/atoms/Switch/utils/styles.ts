import classNames from "classnames"
import { Size } from "../../../../theme/constants"
import { bg, border, hover } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({
  color,
  size,
  checked,
  labelPosition,
}: StyleProps) => {
  const sizeMapper: Record<Size, string> = {
    lg: "w-[60px] h-[34px] after:w-[30px] after:h-[30px]",
    md: "w-[40px] h-[24px] after:w-[20px] after:h-[20px]",
    sm: "w-[30px] h-[14px] after:w-[10px] after:h-[10px]",
  }

  const containerCls = classNames([
    "max-w-fit",
    "items-center",
    "flex",
    labelPosition == "left" ? "flex-row-reverse" : "flex-row",
  ])
  const inputCls = classNames(["pUISwitch", "h-0", "w-0", "appearance-none"])
  const labelCls = classNames([
    "cursor-pointer",
    "-indent-[9999px]",
    size ? sizeMapper[size] : "",
    "block",
    "rounded-full",
    color && checked ? bg[color][300] : bg["gray"][300],
    color && checked ? hover[color][400] : bg["gray"][400],
    "relative",
    "after:content-['']",
    "after:absolute",
    "after:bg-gray-100",
    "after:top-[1px]",
    "after:left-[1px]",
    "after:rounded-full",
    "border-[1px]",
    color && checked ? border[color][200] : border["gray"][200],
    "after:transition-all",
    "after:duration-300",
  ])
  const textContainerCls = classNames(["mx-2", "flex", "flex-col", ""])
  const textCls = classNames(["text-mdSemiBold"])
  const subTextCls = classNames(["text-smRegular"])

  return {
    containerCls,
    inputCls,
    labelCls,
    textContainerCls,
    textCls,
    subTextCls,
  }
}
