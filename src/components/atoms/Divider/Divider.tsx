import { FC, forwardRef } from "react"

import React from "react"
import { getStyles } from "./utils/styles"
import { DividerProps } from "./utils/types"

export const Divider: FC<DividerProps> = forwardRef<
  HTMLDivElement,
  DividerProps
>(function Divider(
  { labelPosition = "center", label, color = "gray", weight = "sm" },
  ref
) {
  const {
    itemCls,
    itemContainerCls,
    lineCls,
    lineContainerCls,
    parentContainerCls,
  } = getStyles({ labelPosition, color, weight })

  return (
    <div className={parentContainerCls}>
      <div className={lineContainerCls}>
        <div className={lineCls} ref={ref}></div>
      </div>
      <div className={itemContainerCls}>
        <span className={itemCls}>{label}</span>
      </div>
    </div>
  )
})
export default Divider
