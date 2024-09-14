import { ButtonHTMLAttributes } from "react"
import { ButtonVariant, Colors } from "../../../../theme/constants"

export type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ChipProps
> &
  ChipProps

export interface ChipProps {
  text: string
  variant?: Extract<ButtonVariant, "filled" | "outlined">
  color?: Colors
  disabled?: boolean
  closable?: boolean
  rounded?: boolean
}

export type StyleProps = Pick<
  ChipProps,
  "variant" | "color" | "rounded" | "disabled"
>
