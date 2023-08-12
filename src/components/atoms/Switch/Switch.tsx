import React, { FC, forwardRef, useState } from "react"
import { getStyles } from "./utils/styles"
import "./utils/styles.css"
import { SwitchProps } from "./utils/types"

const Switch: FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    {
      color = "success",
      size = "md",
      label,
      subtitle,
      labelPosition = "left",
      onChange,
    },
    ref
  ) {
    const [checked, setChecked] = useState(false)
    const styles = getStyles({ color, size, labelPosition, checked })
    const toggleCheck = () => {
      setChecked((prev) => !prev)
    }
    return (
      <div className={styles.containerCls}>
        <input
          type="checkbox"
          id="switch"
          className={styles.inputCls}
          ref={ref}
          onChange={onChange}
          onClick={toggleCheck}
        />
        <label htmlFor="switch" className={styles.labelCls} />

        <div className={styles.textContainerCls}>
          <p className={styles.textCls}>{label}</p>
          <p className={styles.subTextCls}>{subtitle}</p>
        </div>
      </div>
    )
  }
)

export default Switch
