import { ReactNode } from "react"
import { Colors, Size } from "../../../../theme/constants"

export interface AccordionDataShape {
  label?: string
  children?: ReactNode
  disabled?: boolean
}

export interface CollapseIconProps {
  className?: string
  isOpen?: boolean
  onChange?: any
}
export interface AccordionProps {
  data: AccordionDataShape[]
  color?: Colors
  collapseIcon?: any //(props: CollapseIconProps) => React.ReactElement<any>
  size?: Size
  multiActive?: boolean
  controlByCollapseIndicator?: boolean
}
export type StyleProps = Pick<AccordionProps, "color" | "size">
