import { ReactNode } from "react"
import { Colors, Size } from "../../../../theme/constants"

export interface AccordionDataShape {
  label?: string
  children?: ReactNode
  disabled?: boolean
}
export interface AccordionProps {
  data: any
  color?: Colors
  collapseIcon?: JSX.Element
  size?: Size
  multiActive?: boolean
}
export type StyleProps = Pick<AccordionProps, "color" | "size">
