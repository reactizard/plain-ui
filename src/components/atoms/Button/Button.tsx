import React, { PropsWithChildren, Ref, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { Props } from "./utils/types"
import { customTwMerge } from "../../../theme/utils"

export const Button = forwardRef(function Button(
  {
    children,
    color,
    size,
    leftIcon,
    rightIcon,
    disabled,
    round,
    onClick,
    variant,
    fullWidth,
    style: customStyle,
    ...rest
  }: PropsWithChildren<Props>,
  ref: Ref<HTMLButtonElement>
) {
  const styles = getStyles({
    color,
    round,
    size,
    variant,
    disabled,
    fullWidth,
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
      className={customTwMerge(styles.button, rest.className)}
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
