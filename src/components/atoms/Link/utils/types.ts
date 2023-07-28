import { Colors } from "../../../../theme/constants"

export interface LinkProps {
  href: string
  text: string
  color: Colors
  underline?: boolean
}

export type StyleProps = Pick<LinkProps, "color" | "underline">
