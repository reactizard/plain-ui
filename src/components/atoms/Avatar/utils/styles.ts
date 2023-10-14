import classNames from "classnames"
import { Size } from "../../../../theme/constants"
import { bg, text } from "../../../../theme/mapper"
import { StyleProps } from "./types"

export const getStyles = ({ color, onlineStatus, size }: StyleProps) => {
  const sizeMapper: Record<
    Size,
    { child: string[]; online: string[]; onlineSpacing: string }
  > = {
    lg: {
      child: ["w-[40px]", "h-[40px]"],
      online: ["w-[12px]", "h-[12px]", "border-[2px]"],
      onlineSpacing: "space-x-[-11px]",
    },
    md: {
      child: ["w-[32px]", "h-[32px]"],
      online: ["w-[8px]", "h-[8px]", "border-[2px]"],
      onlineSpacing: "space-x-[-8px]",
    },
    sm: {
      child: ["w-[24px]", "h-[24px]"],
      online: ["w-[5px]", "h-[5px]", "border-[1px]"],
      onlineSpacing: "space-x-[-5px]",
    },
  }

  const container = classNames([
    "container",
    "max-w-fit",
    "flex",
    "items-end",
    "rounded-full",
    size ? sizeMapper[size].onlineSpacing : "",
  ])
  const childContainer = classNames([
    "childContainer",
    size ? sizeMapper[size].child : "",
    color ? bg[color][100] : "",
    color ? text[color][500] : "",
    "rounded-full",
    "flex",
    "text-center",
    "items-center",
    "justify-center",
    "text-smRegular",
  ])
  const avatarImage = classNames([
    "avatarImage",
    size ? sizeMapper[size].child : "",
    "rounded-full",
  ])
  const online = classNames([
    "online",
    size ? sizeMapper[size].online : "",
    onlineStatus == "online" ? bg["success"][500] : bg["gray"][300],
    "rounded-full",
    "border-white",
  ])

  const groupContainer = classNames([
    "GroupContainer",
    "flex",
    size ? sizeMapper[size].onlineSpacing : "",
    "hover:space-x-[0px]",
  ])

  return { container, childContainer, avatarImage, online, groupContainer }
}
