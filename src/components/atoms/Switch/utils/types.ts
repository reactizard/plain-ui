import { Colors, Position, Size } from "../../../../theme/constants"

export interface SwitchProps {
  color?: Colors
  size?: Size
  label?: string
  subtitle?: string
  labelPosition?: Extract<Position, "left" | "right">
  onChange?: React.ChangeEventHandler
}

export type StyleProps = Pick<
  SwitchProps,
  "color" | "size" | "labelPosition"
> & { checked?: boolean }
