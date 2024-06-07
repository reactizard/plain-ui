
import React, { FC, forwardRef, useEffect, useRef } from "react"
import { DropdownProps } from "./utils/types"
import { getStyles } from "./utils/styles"

export const Dropdown: FC<DropdownProps> = forwardRef<HTMLDivElement, DropdownProps>(
  function Dropdown({ color = "primary" },ref) {
    const styles = getStyles({ color })
    return (<div ref={ref}>Dropdown</div>)
})
export default Dropdown
