

import classNames from "classnames"
import { StyleProps } from "./types"

export const getStyles = ({ color }: StyleProps) => {
  const container = classNames([""])
  return { container }
}
