import { StyleProps } from "./types"
import { text } from "../../../../theme/mapper"
import { FontWeights } from "../../../../theme/constants/font"

export const getStyles = ({ color = "gray", weight = "md" }: StyleProps) => {
  const SizeMapper: Record<FontWeights, string> = {
    xs: "text-xsRegular",
    sm: "text-smRegular",
    md: "text-mdRegular",
    lg: "text-lgRegular",
    "xs-med": "text-xsSemiBold",
    "sm-med": "text-smSemiBold",
    "md-med": "text-mdSemiBold",
    "lg-med": "text-lgSemiBold",
    h4: "text-h4Bold",
    h3: "text-h3Bold",
    h2: "text-h2Bold",
    h1: "text-h1Bold",
  }

  const label = [color ? text[color][500] : "", SizeMapper[weight]]
  return { label }
}
