import React from "react"
import { Colors, Variant } from "../../../theme/constants"
import { getStyles } from "./utils/styles"

export interface TagProps {
  text: string
  variant: Extract<Variant, "filled" | "plain">
  color: Colors
}

export const Tag: React.FC<TagProps> = React.forwardRef<
  HTMLDivElement,
  TagProps
>(({ color, text, variant }, ref) => {
  const classes = getStyles({
    variant: variant,
    color: color,
  })

  return (
    <div className={classes} ref={ref}>
      {text}
    </div>
  )
})

export default Tag
