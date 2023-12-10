import { Colors } from "../../../../theme/constants"

export interface AccordionProps {
  data: any
  color?: Colors
  collapseIcon?: JSX.Element
}
export type StyleProps = Pick<AccordionProps, "color">
