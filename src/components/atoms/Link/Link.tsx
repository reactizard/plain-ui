import { forwardRef } from "react"

import React from "react"
import { getStyles } from "./utils/styles"
import { LinkProps } from "./utils/types"

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, text, color, underline },
  ref
) {
  const { linkCls } = getStyles({ color, underline })
  return (
    <a href={href} ref={ref} className={linkCls}>
      {text}
    </a>
  )
})

export default Link
