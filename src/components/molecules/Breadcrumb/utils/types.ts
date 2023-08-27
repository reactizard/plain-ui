import { HTMLAttributes } from "react"
import { Colors } from "../../../../theme/constants"

export interface BreadcrumbProps extends HTMLAttributes<HTMLAnchorElement> {
  color?: Colors | ""
  href?: string
  children?: React.ReactNode
  className?: string
}
export interface BreadcrumbComponent extends React.FC<BreadcrumbProps> {
  Group?: any
}
export type StyleProps = Pick<BreadcrumbProps, "color">

export interface BreadcrumbGroupProps {
  children?: React.ReactNode[]
  separator?: React.ReactNode
  color?: Colors
}
