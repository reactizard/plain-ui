import { ButtonVariant, Colors } from "../../../../theme/constants"

export interface BannerProps {
  color?: Colors
  variant: Extract<ButtonVariant, "outlined" | "plain">
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  dismissable?: React.ReactNode
}
export type StyleProps = Pick<BannerProps, "color" | "variant">
