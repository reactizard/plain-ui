import React, { forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { TooltipProps } from "./utils/types"

export const Tooltip: React.FC<TooltipProps> = forwardRef<
  HTMLDivElement,
  TooltipProps
>(function Tooltip(
  {
    children,
    text,
    position = "top",
    color = "primary",
    size = "md",
    hideArrow,
  },
  ref
) {
  const { arrow, container, parent } = getStyles({ position, color, size })
  const tipRef: React.RefObject<HTMLDivElement> = React.createRef()

  const handleMouseEnter = () => {
    if (tipRef.current) tipRef.current.style.opacity = "1"
  }
  const handleMouseLeave = () => {
    if (tipRef.current) tipRef.current.style.opacity = "0"
  }

  return (
    <div ref={ref} className={parent}>
      <div className={container} ref={tipRef}>
        {!hideArrow ? <div className={arrow} /> : null}
        {text}
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  )
})
export default Tooltip
