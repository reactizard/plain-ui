import classNames from "classnames"
import { text } from "../../../../theme/mapper"
import { LabelProps } from "../Label"

interface StyleProps {
  color?: LabelProps["color"]
  variant: NonNullable<LabelProps["variant"]>
}
type variantColorType = Record<StyleProps["variant"], Array<string>>

export const getStyles = ({ color, variant }: StyleProps) => {
  const title = ["text-mdSemiBold"]
  const subtitle = ["text-mdRegular"]
  const hint = ["text-smRegular"]
  const icon = ["text-mdRegular"]

  const variantColor: variantColorType = { title, subtitle, hint, icon }
  const ownClasses = [color ? text[color][500] : ""]

  const styles = classNames(ownClasses, variantColor[variant])

  return styles
}
