import { FC, forwardRef } from "react"

import React from "react"
import { getStyles } from "./utils/styles"
import { LinkProps } from "./utils/types"

export const Link: FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(
    {
      href,
      text,
      color = "primary",
      size = "md",
      underline = true,
      disabled,
      ...rest
    },
    ref
  ) {
    const { linkCls } = getStyles({ color, size, underline, disabled })

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault()
      }
    }

    return (
      <a
        href={href}
        ref={ref}
        className={linkCls}
        onClick={handleClick}
        {...rest}
      >
        {text}
      </a>
    )
  }
)

export default Link
