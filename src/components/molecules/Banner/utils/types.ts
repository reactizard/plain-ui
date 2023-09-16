import { Colors } from "../../../../theme/constants"

export interface BannerProps {
  color?: Colors
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  dismissable?: React.ReactNode
}
export type StyleProps = Pick<BannerProps, "color">
