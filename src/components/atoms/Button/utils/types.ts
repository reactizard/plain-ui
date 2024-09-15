import { ButtonHTMLAttributes } from "react"
import { ButtonVariant, Colors, Size } from "../../../../theme/constants"

export type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonProps
> &
  ButtonProps
export interface ButtonProps {
  color?: Colors
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: Size
  variant?: Extract<ButtonVariant, "outlined" | "filled">
  children?: React.ReactNode
  round?: boolean
  fullWidth?: boolean
  style?: object
}

export type StyleProps = Pick<
  ButtonProps,
  "variant" | "size" | "round" | "color" | "fullWidth" | "disabled"
>
