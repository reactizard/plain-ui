import { Colors, Position, Size } from "../../../../theme/constants"

export interface SwitchProps {
  color?: Colors
  size?: Size
  label?: string
  subtitle?: string
  labelPosition?: Extract<Position, "left" | "right">
  onChange?: any
  isOn?: boolean
  disabled?: boolean
}

export type StyleProps = Pick<
  SwitchProps,
  "color" | "size" | "labelPosition" | "disabled"
> & { checked?: boolean }
