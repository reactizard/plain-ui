import { ReactNode } from "react"
import { Colors, Position, Size } from "../../../../theme/constants"

export interface DividerProps {
  label: string | ReactNode
  labelPosition: Exclude<Position, "top" | "bottom">
  color?: Colors
  weight?: Size
}

export type StyleProps = Pick<
  DividerProps,
  "color" | "labelPosition" | "weight"
>
