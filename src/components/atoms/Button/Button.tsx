import React from "react"
import { getStyles } from "./utils/styles"
import { ButtonProps } from "./utils/types"

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
