import { Colors, LabelVariant } from "../../../../theme/constants"

export interface LabelProps {
  color?: Colors | undefined
  text: string
  variant?: LabelVariant
  labelFor?: string
}
