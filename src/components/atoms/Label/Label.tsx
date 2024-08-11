import React, { forwardRef } from "react"
import { getStyles } from "./utils/style"
import { LabelProps } from "./utils/types"

const Label: React.FC<LabelProps> = forwardRef<HTMLLabelElement, LabelProps>(
  function Label(
    { color = undefined, text, variant = "title", labelFor = "", ...props },
    ref
  ) {
    const classes = getStyles({ color, variant })

    return (
      <label ref={ref} className={classes} htmlFor={labelFor} {...props}>
        {text}
      </label>
    )
  }
)

export default Label
