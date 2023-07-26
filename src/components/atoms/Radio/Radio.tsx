import React, { forwardRef } from "react"
import RadioGroup from "./Group/RadioGroup"
import { getStyles } from "./utils/styles"
import "./utils/styles.css"
import { RadioComponent, RadioProps } from "./utils/types"

export const Radio: RadioComponent = forwardRef<HTMLInputElement, RadioProps>(
  function Radio(
    { color, disabled, label, labelPosition, size, value, name, onChange },
    ref
  ) {
    const { containerCls, labelCls, radioCls } = getStyles({
      color,
      disabled,
      size,
      labelPosition,
    })

    return (
      <label className={containerCls}>
        <input
          ref={ref}
          className={radioCls}
          type="radio"
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
        <span className={labelCls}>{label}</span>
      </label>
    )
  }
)

Radio.Group = RadioGroup

export default Radio
