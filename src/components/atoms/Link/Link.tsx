import { FC, forwardRef } from "react"

import React from "react"
import { getStyles } from "./utils/styles"
import { LinkProps } from "./utils/types"

export const Link: FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const { href, text, color, size, underline, ...rest } = props
    const { linkCls } = getStyles({ color, size, underline })
    return (
      <a href={href} ref={ref} className={linkCls} {...rest}>
        {text}
      </a>
    )
  }
)

export default Link
