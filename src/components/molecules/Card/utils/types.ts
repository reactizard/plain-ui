import { ReactNode } from "react"
import { Colors, Direction } from "../../../../theme/constants"

export type CardVariant = "card" | "user" | "button"

export interface CardProps {
  color?: Colors
  cover?: string
  avatar?: string
  variant?: CardVariant
  orientation?: Direction
  title?: string
  subtitle?: string
  users?: ReactNode
  actions?: ReactNode[]
  stats?: ReactNode[]
  tag?: ReactNode
}
export type StyleProps = Pick<CardProps, "color" | "variant" | "orientation">
