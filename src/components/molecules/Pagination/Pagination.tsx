
import React, { FC, forwardRef, useEffect, useRef } from "react"
import { PaginationProps } from "./utils/types"
import { getStyles } from "./utils/styles"

export const Pagination: FC<PaginationProps> = forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination({ color = "primary" },ref) {
    const styles = getStyles({ color })
    return (<div ref={ref}>Pagination</div>)
})
export default Pagination
