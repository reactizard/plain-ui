import { Colors, OnlineStatus, Size } from "../../../../theme/constants"

export interface AvatarProps {
  onlineStatus?: OnlineStatus
  imgURL: string
  size?: Size
  color?: Colors
  children?: React.ReactNode
}

export type StyleProps = Pick<AvatarProps, "color" | "onlineStatus" | "size">
