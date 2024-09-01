import { HTMLProps } from "react"
import { Colors } from "../../../../theme/constants"
import { FontWeights } from "../../../../theme/constants/font"

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  color?: Colors | undefined
  text: string
  labelFor?: string
  weight?: FontWeights
}

export type StyleProps = Pick<LabelProps, "color" | "weight">
