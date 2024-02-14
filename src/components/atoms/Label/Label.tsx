import React, { forwardRef } from "react"
import { Colors, LabelVariant } from "../../../theme/constants"
import { getStyles } from "./utils/style"

export interface LabelProps {
  color?: Colors | undefined
  text: string
  variant?: LabelVariant
}

const Label: React.FC<LabelProps> = forwardRef<HTMLDivElement, LabelProps>(
  function Label({ color = undefined, text, variant = "title" }, ref) {
    const classes = getStyles({ color, variant })

    return (
      <div ref={ref} className={classes}>
        {text}
      </div>
    )
  }
)

export default Label
