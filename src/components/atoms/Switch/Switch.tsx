import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  forwardRef,
  useEffect,
  useState,
} from "react"
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
      isOn = false,
    },
    ref
  ) {
    const [checked, setChecked] = useState(isOn)

    const styles = getStyles({ color, size, labelPosition, checked })
    const toggleCheck = () => {
      setChecked((prev) => !prev)
    }

    const handleOnChange = () => {
      if (onChange) {
        onChange(!checked)
      }
    }

    function generateUniqueId(prefix = "") {
      const randomNumber = Math.floor(Math.random() * 1000000)
      const id = `${prefix}-${randomNumber}`
      return id
    }
    const id = generateUniqueId("switch")

    return (
      <div className={styles.containerCls}>
        <input
          type="checkbox"
          id={id}
          className={styles.inputCls}
          ref={ref}
          onChange={handleOnChange}
          onClick={toggleCheck}
          checked={checked}
        />
        <label htmlFor={id} className={styles.labelCls} />

        <div className={styles.textContainerCls}>
          <p className={styles.textCls}>{label}</p>
          <p className={styles.subTextCls}>{subtitle}</p>
        </div>
      </div>
    )
  }
)

export default Switch
