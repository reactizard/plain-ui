import { Colors, ProgressVariant, Size } from "../../../../theme/constants"

export interface ProgressProps {
  variant?: ProgressVariant
  size?: Size
  color?: Colors
  label?: string
  progress: number
}

export interface BarProps {
  progress: number
  size: Size
  color: Colors
}

export interface CircleProps {
  progress: number
  size: Size
  label: string
  color: Colors
  half?: boolean
}
