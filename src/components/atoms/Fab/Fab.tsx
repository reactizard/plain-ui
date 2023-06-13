import { IconPlus } from "@tabler/icons-react"
import React, { forwardRef } from "react"
import { Colors } from "../../../theme/constants"
import { getStyles } from "./utils/styles"

export interface FabProps {
  text?: string
  color?: Colors
  icon?: JSX.Element | (() => JSX.Element)
  disabled?: boolean
}
export const Fab: React.FC<FabProps> = forwardRef<HTMLDivElement, FabProps>(
  function Fab({
    color = "primary",
    icon = <IconPlus />,
    text = null,
    disabled = false,
  }) {
    const classes = getStyles({
      color: color,
      disabled: disabled,
    })

    const iconComponent = typeof icon === "function" ? icon() : icon

    return (
      <div className={classes}>
        {iconComponent}
        {text}
      </div>
    )
  }
)

export default Fab
