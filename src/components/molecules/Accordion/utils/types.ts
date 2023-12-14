import { Colors, Size } from "../../../../theme/constants"

export interface AccordionProps {
  data: any
  color?: Colors
  collapseIcon?: JSX.Element
  size?: Size
}
export type StyleProps = Pick<AccordionProps, "color" | "size">
