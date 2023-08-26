import classNames from "classnames"
import { hover, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color }: StyleProps) => {
  const link = classNames([
    "text-smRegular",
    "px-[8px]",
    color ? text[color][300] : "",
    color ? hover[color][100] : "",
    "duration-[100ms]",
    "transition-all",
    "ease-in",
    "rounded-sm",
  ])

  const groupNav = classNames(["text-gray-300"])
  const groupOrderList = classNames(["list-none", "p-0", "inline-flex"])
  const groupList = classNames(["flex", "items-center"])
  const groupItem = classNames([
    color ? text[color][400] : "",
    color ? hover[color][100] : "",
  ])
  return { link, groupNav, groupOrderList, groupItem, groupList }
}
