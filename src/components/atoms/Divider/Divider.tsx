import { forwardRef } from "react"

import React from "react"
import { getStyles } from "./utils/styles"
import { DividerProps } from "./utils/types"

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  function Divider(
    { labelPosition = "center", label = "", color = "gray", weight = "sm" },
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
        {label ? (
          <div className={itemContainerCls}>
            <span className={itemCls}>{label}</span>
          </div>
        ) : null}
      </div>
    )
  }
)
export default Divider
