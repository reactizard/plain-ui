import { ReactNode } from "react"
import { Colors, Position } from "../../../../theme/constants"

export interface SwitchProps {
  color: Colors
  disable: boolean
  label: ReactNode | string
  labelPosition?: Extract<Position, "left" | "right">
  onChange?: React.ChangeEventHandler
}

export type StyleProps = Pick<
  SwitchProps,
  "color" | "disable" | "labelPosition"
>
