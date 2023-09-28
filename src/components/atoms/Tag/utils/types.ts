import { ButtonVariant, Colors, Size } from "../../../../theme/constants"

export interface TagProps {
  text: string
  variant?: Extract<ButtonVariant, "filled" | "plain">
  color?: Colors
  size?: Size
}

export type StyleProps = Pick<TagProps, "size" | "color" | "variant">
