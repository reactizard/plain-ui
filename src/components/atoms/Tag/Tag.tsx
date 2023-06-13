import React from "react"
import { ButtonVariant, Colors } from "../../../theme/constants"
import { getStyles } from "./utils/styles"

export interface TagProps {
  text: string
  variant: Extract<ButtonVariant, "filled" | "plain">
  color: Colors
}

export const Tag: React.FC<TagProps> = React.forwardRef<
  HTMLDivElement,
  TagProps
>(({ color = "primary", text, variant = "filled" }, ref) => {
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
