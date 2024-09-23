import { HTMLAttributes, PropsWithChildren } from "react"

export type Props = Omit<HTMLAttributes<HTMLDivElement>, keyof CardProps> &
  PropsWithChildren<CardProps>
export interface CardProps {
  width?: number
  height?: number
  children?: React.ReactNode
  align?: "center" | "left" | "right"
}

export interface CardContentProps {
  align?: "left" | "center" | "right"
  media?: boolean
}
