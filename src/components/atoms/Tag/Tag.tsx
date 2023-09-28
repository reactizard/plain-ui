import React from "react"
import { getStyles } from "./utils/styles"
import { TagProps } from "./utils/types"

export const Tag: React.FC<TagProps> = React.forwardRef<
  HTMLDivElement,
  TagProps
>(function Tag(
  { color = "primary", text, variant = "filled", size = "md" },
  ref
) {
  const classes = getStyles({
    variant: variant,
    color: color,
    size,
  })

  return (
    <div className={classes} ref={ref}>
      {text}
    </div>
  )
})

export default Tag
