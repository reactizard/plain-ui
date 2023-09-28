import { ReactNode } from "react"
import { Colors, Direction } from "../../../../theme/constants"

export type CardVariant = "card" | "user" | "button"

export interface StatShape {
  icon?: ReactNode
  number?: number
}

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
  stats?: StatShape[]
  tags?: ReactNode[]
}
export type StyleProps = Pick<CardProps, "color" | "variant" | "orientation">
