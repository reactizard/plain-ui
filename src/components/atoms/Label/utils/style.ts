import { StyleProps } from "./types"
import { text } from "../../../../theme/mapper"
import { FontWeights } from "../../../../theme/constants/font"

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

export const getStyles = ({ color, weight, as }: StyleProps) => {
  const headerTags = ["h1", "h2", "h3", "h4"]
  const setHeadersDefaultWeight = !weight && as && headerTags.includes(as)
  if (setHeadersDefaultWeight) {
    weight = as as FontWeights
  }

  if (as == "a") {
    color = "primary"
  }

  const label = [
    color ? text[color][500] : text["gray"][900],
    weight ? SizeMapper[weight] : SizeMapper["md"],
    as == "a" ? "underline" : "",
  ]
  return { label }
}
