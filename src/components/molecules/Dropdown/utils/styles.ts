import classNames from "classnames"
import { hover } from "../../../../theme/mapper"

export const getStyles = () => {
  const container = classNames(["relative inline-block"])
  const itemsContainer = classNames([
    "absolute rounded-md overflow-scroll p-1 z-10 shadow-md bg-white mt-1",
  ])
  const item = classNames([
    "cursor-pointer items-center rounded-md flex gap-1 p-1 text-smRegular h-auto",
  ])
  const selectedItem = ["focus:outline-none", "focus:bg-gray-200"]
  const itemHover = [hover["gray"][200]]
  return { container, itemsContainer, item, selectedItem, itemHover }
}
