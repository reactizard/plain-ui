import React, { Ref, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { ButtonProps } from "./utils/types"

export const Button = forwardRef(function Button(
  {
    children,
    color = "melon",
    size = "sm",
    leftIcon,
    rightIcon,
    disabled,
    round,
    variant = "filled",
    styles: customStyles,
    ...rest
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const styles = getStyles({ children, color, round, size, variant, disabled })

  return (
    <button
      className={styles}
      style={customStyles}
      disabled={disabled}
      {...rest}
      ref={ref}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
})

export default Button
