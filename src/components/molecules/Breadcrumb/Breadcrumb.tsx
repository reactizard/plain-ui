import React, { forwardRef } from "react"
import BreadcrumbGroup from "./Group/BreadcrumbGroup"
import { getStyles } from "./utils/styles"
import { BreadcrumbComponent, BreadcrumbProps } from "./utils/types"

export const Breadcrumb: BreadcrumbComponent = forwardRef<
  HTMLAnchorElement,
  BreadcrumbProps
>(function Breadcrumb(
  { color = "primary", href, children, className, ...rest },
  ref
) {
  const styles = getStyles({ color })
  return (
    <a
      ref={ref}
      href={href}
      className={`${
        className ? className : ""
      } text-smRegular px-[8px] hover:bg-gray-200 rounded-sm`}
      {...rest}
    >
      {children}
    </a>
  )
})
Breadcrumb.Group = BreadcrumbGroup
export default Breadcrumb
