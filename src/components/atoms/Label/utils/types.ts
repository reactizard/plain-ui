import { Colors } from "../../../../theme/constants"
import React, { ElementType } from "react"

export type LabelRef<C extends ElementType> = React.ComponentPropsWithRef<C>

export type PolymorphicProps<
  C extends ElementType,
  Props = Record<string, never>
> = React.PropsWithChildren<Props & AsProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type AsProps<C extends ElementType> = {
  as?: C
}

type PropsToOmit<C extends ElementType, P> = keyof (AsProps<C> & P)

export type LabelProps<C extends ElementType> = PolymorphicProps<
  C,
  { color?: Colors }
> & { ref?: LabelRef<C> }

export type StyleProps = {
  color?: Colors
  weight?: "regular" | "semibold"
}
