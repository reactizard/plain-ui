import classNames from "classnames"
import { bg } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, size }: StyleProps) => {
  const sizeMapper: Record<NonNullable<StyleProps["size"]>, string> = {
    lg: "w-[800px]",
    md: "w-[600px]",
    sm: "w-[400px]",
  }
  const container = classNames([size ? sizeMapper[size] : "", "mx-auto"])
  const itemContainer = classNames(["mb-0", "group"])
  const itemHeader = classNames([
    "bg-gray-200",
    "p-3",
    "flex",
    "items-center",
    "justify-between",
    color ? bg[color][200] : "",
  ])

  const haderLabel = classNames(["font-bold"])
  const toggleIcon = classNames([
    "transition-transform",
    "ease-in-out",
    "duration-300 transform",
    "group-hover:translate-y-1",
  ])

  const contentContainer = classNames([
    "p-[5px]",
    "rounded-b",
    "overflow-hidden",
    "transition-max-height",
    "ease-in-out",
    "duration-500",
    ,
  ])
  const activeClasses = {
    itemHeader: classNames(["rounded-t"]),
    toggleIcon: classNames(["rotate-180"]),
    contentContainer: classNames(["shadow-lg max-h-screen"]),
  }
  const inactiveClasses = {
    itemHeader: classNames(["rounded"]),
    toggleIcon: classNames([""]),
    contentContainer: classNames(["max-h-0"]),
  }
  const disabled = classNames(["cursor-not-allowed", "opacity-50"])
  const enabled = classNames(["cursor-pointer"])
  return {
    container,
    itemContainer,
    itemHeader,
    haderLabel,
    toggleIcon,
    contentContainer,
    disabled,
    enabled,
    activeClasses,
    inactiveClasses,
  }
}
