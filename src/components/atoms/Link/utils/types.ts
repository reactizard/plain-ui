import { Colors, Size } from "../../../../theme/constants"

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  text: string
  color?: Colors
  size?: Size
  underline?: boolean
}

export type StyleProps = Pick<LinkProps, "color" | "underline" | "size">
