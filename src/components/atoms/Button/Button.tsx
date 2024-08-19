import React, { Ref, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { ButtonProps } from "./utils/types"
import { twMerge } from "tailwind-merge"

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
    style: customStyle,
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
      {...rest}
      ref={ref}
      onClick={handleClick}
      className={twMerge(styles, rest.className)}
      style={customStyle}
      disabled={disabled}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
})

export default Button
