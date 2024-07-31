import { Colors } from "../../../../theme/constants"

export interface InputProps {
  color?: Colors
  placeholder?: string
  label?: string
  value?: string | number
  type?: "text" | "number" | "email" | "password"
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}
export type StyleProps = Pick<InputProps, "color">
