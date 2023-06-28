import classNames from "classnames"
import { Colors, Size } from "../../../../theme/constants"
import { fill, hoverFill } from "../../../../theme/mapper"

const sizeMapper: Record<Size, number> = {
  lg: 32,
  md: 24,
  sm: 16,
}

const container = classNames(["flex", "items-center", "gap-2"])
const svgItem = ({ color }: { color: Colors }) => {
  return classNames(
    [fill[color][500], hoverFill[color][400]],
    "hover:-translate-y-[0.08rem]"
  )
}

export { container, sizeMapper, svgItem }
