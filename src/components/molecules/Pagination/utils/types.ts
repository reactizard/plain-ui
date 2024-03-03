

import { Colors } from "../../../../theme/constants"

export interface PaginationProps {
  color?: Colors
}
export type StyleProps = Pick<PaginationProps, "color">
