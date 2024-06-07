

import { Colors } from "../../../../theme/constants"

export interface DropdownProps {
  color?: Colors
}
export type StyleProps = Pick<DropdownProps, "color">
