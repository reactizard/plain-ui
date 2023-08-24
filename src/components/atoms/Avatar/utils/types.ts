import { HTMLAttributes } from "react"
import { Colors, OnlineStatus, Size } from "../../../../theme/constants"

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  onlineStatus?: OnlineStatus
  imgURL?: string
  size?: Size
  color?: Colors
  children?: React.ReactNode
}
export interface AvatarComponent extends React.FC<AvatarProps> {
  Group?: any
}

export type StyleProps = Pick<AvatarProps, "color" | "onlineStatus" | "size">

export interface AvatarGroupProps {
  children?: React.ReactNode[]
  more?: number
}
