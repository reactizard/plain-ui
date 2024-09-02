import React from "react"
import { getStyles } from "./utils/style"
import { LabelProps, LabelRef } from "./utils/types"
import { twMerge } from "tailwind-merge"

type TextComponent = <C extends React.ElementType = "span">(
  props: LabelProps<C>
) => React.ReactNode | null

export const Label: TextComponent = React.forwardRef(function Label<
  C extends React.ElementType = "span"
>({ as, children, ...rest }: LabelProps<C>, ref: LabelRef<C>) {
  const Component = as || "span"
  const classes = getStyles({ color: rest.color })
  console.log("rest", rest.className)
  return (
    <Component
      {...rest}
      ref={ref}
      className={twMerge(classes.label, rest.className)}
    >
      {children}
    </Component>
  )
})

export default Label
