import { Colors, Position, Size } from "../../../../theme/constants"

export interface CheckboxProps {
  color?: Colors
  disabled?: boolean
  label?: string
  labelPosition?: Extract<Position, "left" | "right">
  size?: Size
}
export interface StyleProps extends CheckboxProps {
  color?: Colors
  checked?: boolean
  disabled?: boolean
  size?: Size
}
