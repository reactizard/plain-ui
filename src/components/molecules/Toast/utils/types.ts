import { ButtonVariant, Colors } from "../../../../theme/constants"

export interface ToastProps {
  title?: string
  description?: string
  sideIcon?: React.ReactNode
  footer?: React.ReactNode
  variant?: Exclude<ButtonVariant, "plain">
  color: Colors
  closable?: boolean
  autoClose?: boolean
  onClose?: React.MouseEventHandler<HTMLDivElement>
}
export type StyleProps = Pick<ToastProps, "color" | "variant" | "sideIcon">
