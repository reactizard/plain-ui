import { ReactNode } from "react"
import { Colors, Direction, Size } from "../../../../theme/constants"

export interface DividerProps {
  label?: string | ReactNode
  labelPosition?: "start" | "center" | "end"
  color?: Colors
  weight?: Size
  orientation?: Direction
}

export type StyleProps = Pick<
  DividerProps,
  "color" | "labelPosition" | "weight" | "orientation"
>
