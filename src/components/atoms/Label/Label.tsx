import React, { forwardRef } from "react"
import { getStyles } from "./utils/style"
import { LabelProps } from "./utils/types"

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { color = undefined, text, labelFor = undefined, weight, ...rest },
  ref
) {
  const classes = getStyles({ color, weight })

  return (
    <label
      {...rest}
      ref={ref}
      className={`${rest.className ?? ""} ${classes.label.join(" ")}`}
      htmlFor={labelFor}
    >
      {text}
    </label>
  )
})

export default Label
