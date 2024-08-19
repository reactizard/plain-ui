import React, { forwardRef } from "react"
import { getStyles } from "./utils/style"
import { LabelProps } from "./utils/types"
import { twMerge } from "tailwind-merge"
import classNames from "classnames"

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { color = undefined, text, labelFor = undefined, weight, ...rest },
  ref
) {
  const classes = getStyles({ color, weight })

  return (
    <label
      {...rest}
      ref={ref}
      className={classNames(classes.label, rest.className)}
      htmlFor={labelFor}
    >
      {text}
    </label>
  )
})

export default Label
