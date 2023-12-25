import classNames from "classnames"
import { bg } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, size }: StyleProps) => {
  const sizeMapper: Record<
    NonNullable<StyleProps["size"]>,
    { head: string; body: string }
  > = {
    lg: { body: "w-[700px]", head: "p-4" },
    md: { body: "w-[600px]", head: "p-3" },
    sm: { body: "w-[400px]", head: "p-1" },
  }
  const container = classNames([
    size ? sizeMapper[size].body : "",
    "mx-auto",
    "flex",
    "flex-col",
    "gap-2",
  ])
  const itemContainer = classNames(["mb-0", "group"])
  const itemHeader = classNames([
    size ? sizeMapper[size].head : "",
    "flex",
    "items-center",
    "justify-between",
    color ? bg[color][200] : "",
  ])

  const haderLabel = classNames(["text-lgSemiBold"])
  const toggleIcon = classNames([
    "transition-transform",
    "ease-in-out",
    "duration-500",
    "transform",
    "group-hover:translate-y-1",
  ])

  const contentContainer = classNames([
    "rounded-b",
    "overflow-hidden",
    "transition-max-height",
    "ease-in-out",
    "duration-500",
  ])
  const activeClasses = {
    itemHeader: classNames(["rounded-t"]),
    toggleIcon: classNames(["rotate-180"]),
    contentContainer: classNames(["shadow-lg", "max-h-screen", "p-3"]),
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
