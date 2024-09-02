import React from "react"
import { getStyles } from "./utils/style"
import { LabelProps, LabelRef } from "./utils/types"
import { FontWeights } from "../../../theme/constants/font"
import { customTwMerge } from "../../../theme/utils/"

type TextComponent = <C extends React.ElementType = "span">(
  props: LabelProps<C>
) => React.ReactNode | null

export const Label: TextComponent = React.forwardRef(function Label<
  C extends React.ElementType = "span"
>({ as, color, weight, children, ...rest }: LabelProps<C>, ref: LabelRef<C>) {
  const Component = as || "span"

  const headerTags = ["h1", "h2", "h3", "h4"]
  const setHeadersDefaultWeight = !weight && headerTags.includes(as as string)
  if (setHeadersDefaultWeight) {
    weight = as as FontWeights
  }

  const classes = getStyles({ color, weight })

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
