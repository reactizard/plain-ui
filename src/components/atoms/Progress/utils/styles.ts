import classNames from "classnames"
import { Size } from "../../../../theme/constants"

const sizeMapper: Record<Size, { size: number; stroke: number }> = {
  lg: { size: 160, stroke: 9 },
  md: { size: 80, stroke: 6 },
  sm: { size: 24, stroke: 2 },
}
const titleClass: Record<Size, string> = {
  lg: "text-lgSemiBold",
  md: "text-smSemiBold",
  sm: "text-xsSemiBold",
}
const labelClass: Record<Size, string> = {
  lg: "text-mdRegular",
  md: "text-xsRegular",
  sm: "hidden",
}

const circleContainer = classNames([
  "absolute",
  "top-1/2",
  "left-1/2",
  "transform",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "text-center",
])

const BarProgressText: Record<Size, string> = {
  lg: "text-lgRegular",
  md: "text-mdRegular",
  sm: "text-smRegular",
}
const BarHeight: Record<Size, string> = {
  lg: "h-3",
  md: "h-2",
  sm: "h-1",
}
export {
  BarHeight,
  BarProgressText,
  circleContainer,
  labelClass,
  sizeMapper,
  titleClass,
}
