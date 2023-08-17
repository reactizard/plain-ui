import { ButtonVariant, Colors, CommonProps } from "../../../../theme/constants"

export interface AlertProps extends CommonProps {
  title: string
  description: React.ReactNode
  variant: ButtonVariant
  color: Colors
  closable?: boolean
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}

export type StyleProps = Pick<AlertProps, "color">
