import React from "react"
import { getStyles } from "./utils/style"
import { LabelProps, LabelRef } from "./utils/types"
import { customTwMerge } from "../../../theme/utils/"

export const Label = React.forwardRef(function Label<
  C extends React.ElementType = "span"
>({ as, color, weight, children, ...rest }: LabelProps<C>, ref: LabelRef<C>) {
  const Component = as || "span"

  const classes = getStyles({ color, weight, as: as as string })

  return (
    <Component
      {...rest}
      ref={ref}
      className={customTwMerge(classes.label, rest.className)}
    >
      {children}
    </Component>
  )
})

export default Label
