import { HTMLAttributes } from "react"
import { Colors, OnlineStatus, Size } from "../../../../theme/constants"

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  onlineStatus?: OnlineStatus
  imgURL?: string
  size?: Size
  color?: Colors
  children?: React.ReactNode
}
export interface AvatarComponent
  extends React.FC<AvatarProps & React.RefAttributes<HTMLDivElement>> {
  Group?: any
}

export type StyleProps = Pick<AvatarProps, "color" | "onlineStatus" | "size">

export interface AvatarGroupProps {
  size?: AvatarProps["size"]
  children?: React.ReactNode[]
  more?: number
}
