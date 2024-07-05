import classNames from "classnames"

export const getStyles = () => {
  const container = classNames(["relative inline-block"])
  const itemsContainer = classNames([
    "absolute rounded-md overflow-scroll p-1 z-10 shadow-md bg-white mt-1",
  ])
  const item = classNames([
    "cursor-pointer items-center rounded-md flex gap-1 p-1 font-inter text-smRegular h-auto",
  ])
  return { container, itemsContainer, item }
}
