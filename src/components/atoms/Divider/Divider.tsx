import { forwardRef } from "react"

import React from "react"
import { getStyles } from "./utils/styles"
import { DividerProps } from "./utils/types"

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  function Divider(
    {
      labelPosition = "center",
      label = "",
      color = "gray",
      weight = "sm",
      orientation = "horizontal",
    },
    ref
  ) {
    const styles = getStyles({ labelPosition, color, weight, orientation })

    return (
      <div className={styles.parentContainerCls}>
        <div className={styles.lineContainerCls}>
          <div className={styles.lineCls} ref={ref}></div>
        </div>
        {label ? (
          <div className={styles.itemContainerCls}>
            <span className={styles.itemCls}>{label}</span>
          </div>
        ) : null}
      </div>
    )
  }
)
export default Divider
