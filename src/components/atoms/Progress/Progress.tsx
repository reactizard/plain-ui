import React from "react"
import { ProgressVariant } from "../../../theme/constants"
import Bar from "./components/Bar"
import Circle from "./components/Circle"
import { ProgressProps } from "./utils/types"

const Progress: React.FC<ProgressProps> = ({
  color = "primary",
  label = "",
  progress,
  size = "md",
  variant = "bar",
}) => {
  const progressComponent: Record<ProgressVariant, JSX.Element> = {
    bar: <Bar progress={progress} size={size} color={color} />,
    circle: (
      <Circle color={color} progress={progress} size={size} label={label} />
    ),
    "half-circle": (
      <Circle
        half
        color={color}
        progress={progress}
        size={size}
        label={label}
      />
    ),
  }

  return progressComponent[variant] || null
}

export default Progress
