import { Colors, Direction, Position, Size } from "../../../../theme/constants"

export interface RadioProps {
  color?: Colors
  disabled?: boolean
  label?: string
  labelPosition?: Extract<Position, "left" | "right">
  size?: Size
  checked?: boolean
  value?: string | number
  name?: string
  onChange?: React.ChangeEventHandler
}

export interface RadioComponent extends React.FC<RadioProps> {
  Group?: any
}

export interface RadioGroupProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  direction?: Direction
  name: string
  children: React.ReactElement
  size?: Size
}

export interface StyleProps {
  color?: Colors
  disabled?: boolean
  labelPosition?: Extract<Position, "left" | "right">
  size?: Size
  direction?: Direction
}
