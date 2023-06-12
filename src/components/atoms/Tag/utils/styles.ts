import classNames from "classnames"
import { bg, text } from "../../../../theme/mapper"
import { TagProps } from "../Tag"

interface StyleProps {
  variant: TagProps["variant"]
  color: TagProps["color"]
}

type variantColorType = Record<StyleProps["variant"], Array<string>>

export const getStyles = ({ variant, color }: StyleProps) => {
  const filled = [bg[color][500], "text-white"]
  const plain = [bg[color][100], text[color][700]]
  const variantColor: variantColorType = { filled, plain }

  const ownClasses = [
    "flex",
    "items-center",
    "rounded-[999px]",
    "gap-[4px]",
    "px-[8px]",
    "py-[2px]",
    "max-w-fit",
    "font-inter",
    "text-smSemiBold",
  ]
  const styles = classNames(ownClasses, variantColor[variant])

  return styles
}
