import React, { forwardRef } from "react"
import { InputProps } from "./utils/types"
import { getStyles } from "./utils/styles"
import "./utils/styles.css"
import Label from "../Label"
export const Input = forwardRef<HTMLDivElement, InputProps>(function Input(
  {
    color,
    label,
    placeholder,
    leftIcon,
    rightIcon,
    value,
    type = "text",
    disabled = false,
    error,
    errorText,
    ...props
  },
  ref
) {
  const styles = getStyles({ color, disabled, leftIcon, rightIcon, error })

  return (
    <div>
      <div className={styles.container} ref={ref}>
        {leftIcon ? <div className={styles.lIcon}>{leftIcon}</div> : null}
        <input
          type={type}
          id={label}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          className={styles.input}
          {...props}
        />
        {rightIcon && <div className={styles.rIcon}>{rightIcon}</div>}
      </div>
      {errorText ? (
        <Label text={errorText} color="danger" variant="hint" />
      ) : null}
    </div>
  )
})
export default Input
