import { IconCheck } from "@tabler/icons-react"
import React, { forwardRef, useState } from "react"
import { getStyles } from "./utils/styles"
import { CheckboxProps } from "./utils/types"

export const Checkbox: React.FC<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function Checkbox(
  {
    color = "primary",
    disabled = false,
    label,
    labelPosition = "right",
    size = "sm",
  },
  ref
) {
  const [checked, setChecked] = useState(false)

  const styles = getStyles({ color, disabled, checked, size })

  const toggleCheck = () => {
    setChecked((prev) => !prev)
  }

  const labelComponent = (
    <label htmlFor="" className={styles.label}>
      {label}
    </label>
  )

  return (
    <div className={styles.parentContainer} onClick={toggleCheck}>
      {labelPosition == "left" ? labelComponent : null}
      <div ref={ref} className={styles.container}>
        {checked ? <IconCheck color={"white"} strokeWidth={2.8} /> : null}
      </div>
      {labelPosition == "right" ? labelComponent : null}
    </div>
  )
})

export default Checkbox
