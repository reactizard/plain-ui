import { ButtonVariant, Colors } from "../../../../theme/constants"

export interface AlertProps {
  title: string
  description: string
  sideIcon?: React.ReactNode
  footer?: React.ReactNode
  variant: ButtonVariant
  color: Colors
  closable?: boolean
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}

export type StyleProps = Pick<AlertProps, "color">
