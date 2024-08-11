import { Colors } from "../../../../theme/constants"

export interface InputProps {
  color?: Colors
  placeholder?: string
  label?: string
  value?: string | number
  type?: "text" | "number" | "email" | "password"
  required?: boolean
  disabled?: boolean
  cleanable?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  error?: boolean
  errorText?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}
export type StyleProps = Pick<
  InputProps,
  "color" | "disabled" | "leftIcon" | "rightIcon" | "error" | "cleanable"
>
