import { Colors, Position, Size } from "../../../../theme/constants"

export interface TooltipProps {
  children?: React.ReactNode
  text: string
  position?: Exclude<Position, "center">
  color?: Colors
  size?: Size
  hideArrow?: boolean
}

export type StyleProps = Pick<TooltipProps, "position" | "color" | "size">

export interface PositionMapperType {
  tooltip: TooltipProps["position"]
  arrow: string
  margin: string
  position: string
}
