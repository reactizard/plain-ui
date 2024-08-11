import React, { forwardRef, useRef, useId } from "react"
import { InputProps } from "./utils/types"
import { getStyles } from "./utils/styles"
import "./utils/styles.css"
import Label from "../Label"
import { IconCircleX } from "@tabler/icons-react"
import { hoverStroke } from "../../../theme/mapper"
export const Input = forwardRef<HTMLDivElement, InputProps>(function Input(
  {
    color = "primary",
    label,
    placeholder,
    leftIcon,
    rightIcon,
    value,
    type = "text",
    required = false,
    disabled = false,
    cleanable = false,
    onChange,
    error,
    errorText,
    ...props
  },
  ref
) {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()
  const styles = getStyles({
    color,
    disabled,
    leftIcon,
    rightIcon,
    error,
    cleanable,
  })

  const cleanValue = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
      inputRef.current.focus()
    }
  }

  const labelElement = label ? (
    <>
      <Label text={label} variant="subtitle" labelFor={inputId} />
      {required ? <span className="text-danger-500"> * </span> : null}
    </>
  ) : null

  const leftElement = leftIcon ? (
    <div className={styles.lIcon}>{leftIcon}</div>
  ) : null

  const rightElement = cleanable ? (
    <IconCircleX
      size={18}
      onClick={cleanValue}
      className={hoverStroke[color]}
    />
  ) : rightIcon ? (
    rightIcon
  ) : null

  return (
    <>
      {labelElement}
      <div className={styles.container} ref={ref}>
        {leftElement}
        <input
          id={inputId}
          ref={inputRef}
          type={type}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          required={required}
          className={styles.input}
          onChange={(e) => {
            onChange && onChange(e)
          }}
          {...props}
        />
        <div className={styles.rIcon}>{rightElement}</div>
      </div>
      {errorText ? (
        <Label text={errorText} color="danger" variant="hint" />
      ) : null}
    </>
  )
})
export default Input
