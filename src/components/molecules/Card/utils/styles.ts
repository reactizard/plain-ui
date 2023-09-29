import classNames from "classnames"
import { border } from "../../../../theme/mapper"
import { StyleProps } from "./types"

interface dimension {
  width: string
  height: string
}

type dimenstionMapperType = Record<
  NonNullable<StyleProps["variant"]>,
  Record<NonNullable<StyleProps["orientation"]>, dimension>
>
export const getStyles = ({ variant, orientation }: StyleProps) => {
  const dimenstionMapper: dimenstionMapperType = {
    card: {
      vertical: { height: "", width: "w-[370px]" },
      horizontal: { height: "", width: "w-[808px]" },
    },
    user: {
      vertical: { height: "", width: "w-[240px]" },
      horizontal: { height: "", width: "w-[400px]" },
    },
    button: {
      vertical: { height: "", width: "w-[400px]" },
      horizontal: { height: "", width: "w-[400px]" },
    },
  }

  const container = classNames([
    "container",
    "flex",
    orientation == "vertical" ? "flex-col" : "flex-row",
    "items-start",
    "gap-2",
    "p-[12px]",
    variant && orientation ? dimenstionMapper[variant][orientation].width : "",
    "rounded-[8px]",
    "border",
    border["gray"][200],
    "shadow-md",
    "shadow-gray-500/50",
  ])

  const headContainer = classNames([
    "flex",
    "w-full",
    "justify-center",
    "items-start",
    "self-stretch",
    "border-b-[1px]",
    "border-b-gray-200",
    "pb-[12px]",
  ])
  const actionsContainer = classNames([
    "flex",
    "items-center",
    "justify-between",
    "w-full",
  ])

  const statsContainer = classNames(["flex", "items-center", "gap-[12px]"])
  const statItemContainer = classNames([
    "flex",
    "flex-row",
    "gap-[1px]",
    "items-center",
    "justify-center",
    "text-smRegular",
  ])

  const bodyContainer = classNames([
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "gap-[8px]",
    "flex-start",
    "justify-between",
  ])
  const bodyHeading = classNames([
    "flex items-center",

    "justify-between",
    "gap-[12px]",
    "w-full",
  ])
  const tagsContainer = classNames(["flex", "flex-row", "gap-1"])
  const title = classNames(["flex-[1 0 0]", "text-lgSemiBold"])
  const actionButtonsContainer = classNames(["flex", "flex-row", "gap-1"])
  return {
    container,
    actionsContainer,
    statsContainer,
    headContainer,
    statItemContainer,
    actionButtonsContainer,
    bodyContainer,
    tagsContainer,
    bodyHeading,
    title,
  }
}
