import React, { FC, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import "./utils/styles.css"
import { SwitchProps } from "./utils/types"

const Switch: FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    { color = "primary", disable, label, labelPosition, onChange },
    ref
  ) {
    const { inputCls, labelCls } = getStyles({ color, disable, labelPosition })
    return (
      <>
        <input type="checkbox" id="switch" className={inputCls} ref={ref} />
        <label htmlFor="switch" className={labelCls}>
          Toggle
        </label>
      </>
    )
  }
)

export default Switch
