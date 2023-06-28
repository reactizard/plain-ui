import React, { ButtonHTMLAttributes } from "react"
import { ButtonVariant, Colors, Size } from "../../../theme/constants"
import { getStyles } from "./utils/styles"

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

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "melon",
  size = "sm",
  leftIcon,
  rightIcon,
  disabled,
  round,
  variant = "filled",
  ...rest
}) => {
  const styles = getStyles({ children, color, round, size, variant, disabled })

  return (
    <button className={styles} disabled={disabled} {...rest}>
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
}

export default Button
