import React, { FC, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { SwitchProps } from "./utils/types"

const Switch: FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
  function Switch({ color, disable, label, labelPosition, onChange }) {
    const { inputCls, labelCls } = getStyles({ color, disable, labelPosition })
    return (
      <>
        <input type="checkbox" id="switch" className={inputCls} />
        <label htmlFor="switch" className={labelCls}>
          Toggle
        </label>
      </>
    )
  }
)

export default Switch
