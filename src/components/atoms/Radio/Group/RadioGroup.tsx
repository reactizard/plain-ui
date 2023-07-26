import React from "react"
import { getStyles } from "../utils/styles"
import { RadioGroupProps, RadioProps } from "../utils/types"

export const RadioGroup: React.FC<RadioGroupProps> = ({
  onChange,
  children,
  direction,
  name,
  size,
}) => {
  const { groupCls } = getStyles({ direction })
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className={groupCls}>
      {React.Children.map(children, (child, key) => {
        if (React.isValidElement<RadioProps>(child)) {
          const radioElement = React.cloneElement(child, {
            onChange: handleRadioChange,
            key: key,
            name,
            size,
          })

          return radioElement
        }
        return child
      })}
    </div>
  )
}

RadioGroup.displayName = "Radio.Group"
export default RadioGroup
