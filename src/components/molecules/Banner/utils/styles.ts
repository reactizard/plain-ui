import classNames from "classnames"
import { bg, border, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color }: StyleProps) => {
  const whiteBgStyles = classNames([
    bg["gray"][100],
    "border",
    border["gray"][200],
  ])
  const container = classNames([
    "container",
    "flex",
    "flex-col",
    "sm:flex-row",
    "w-[300px]",
    "sm:w-[600px]",
    "items-start",
    "sm:items-center",
    "gap-[12px]",
    color ? bg[color][500] : whiteBgStyles,
    "p-[16px]",
    "rounded-[8px]",
    "shadow-md",
    "shadow-gray-500/50",
  ])
  const icon = classNames(["icon"])
  const body = classNames([
    "body",
    "flex",
    "flex-col",
    "items-start",
    "gap-[4px]",
    "flex-1",
  ])
  const title = classNames([
    "title",
    color ? text["gray"][100] : text["gray"][900],
  ])
  const subtitle = classNames([
    "subtitle",
    color ? text["gray"][300] : text["gray"][500],
  ])
  const dismissable = classNames([
    "dismissable",
    "flex",
    "justify-center",
    "items-center",
    "gap-[8px]",
    "text-white",
  ])
  return { container, body, title, subtitle, dismissable, icon }
}
