import { HTMLProps } from "react"
import { Colors, LabelVariant } from "../../../../theme/constants"
import { FontWeights } from "../../../../theme/constants/font"

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  color?: Colors | undefined
  text: string
  variant?: LabelVariant
  labelFor?: string
  weight?: FontWeights
}

export type StyleProps = Pick<LabelProps, "color" | "variant" | "weight">
