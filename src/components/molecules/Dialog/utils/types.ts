import { ReactNode } from "react"
import { Position, Size } from "../../../../theme/constants"

export interface DialogProps {
  children?: ReactNode
  open?: boolean
  onClose?: () => void
  size?: Size
  actions?: ReactNode[]
  content?: ReactNode
  title?: string
  positionX?: Position
  positionY?: Position
  icon: ReactNode
}
export type StyleProps = Pick<DialogProps, "size" | "positionX" | "positionY">
