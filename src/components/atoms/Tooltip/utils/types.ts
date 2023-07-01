import { Colors, Position, Size } from "../../../../theme/constants"

export interface TooltipProps {
  children?: React.ReactNode
  text: string
  position?: Position
  color?: Colors
  size?: Size
  hideArrow?: boolean
}

export interface StyleProps {
  position: Position
  color: Colors
  size: Size
}

export interface PositionMapperType {
  tooltip: Position
  arrow: string
  margin: string
  position: string
}
