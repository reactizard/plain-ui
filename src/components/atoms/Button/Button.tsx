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
    onClick,
    variant = "filled",
    styles: customStyles,
    ...rest
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const styles = getStyles({
    children,
    color,
    round,
    size,
    variant,
    onClick,
    disabled,
  })

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled) {
      event.preventDefault()
    } else {
      onClick && onClick(event)
    }
  }

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={styles}
      style={customStyles}
      disabled={disabled}
      {...rest}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
})

export default Button
