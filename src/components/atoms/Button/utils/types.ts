import { ButtonHTMLAttributes } from "react"
import { ButtonVariant, Colors, Size } from "../../../../theme/constants"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: Size
  variant?: Extract<ButtonVariant, "outlined" | "filled">
  children?: React.ReactNode
  round?: boolean
}

export interface StyleProps extends ButtonProps {
  color: Colors
  size: Size
}
