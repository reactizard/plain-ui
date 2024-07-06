import React, { FC, forwardRef, RefObject, useRef, useState } from "react"
import { DropdownProps } from "./utils/types"
import { getStyles } from "./utils/styles"

import FadeMotion from "../hoc/motion/FadeMotion"
import { useAccessibility } from "./utils/useAccessibility"
import { twMerge } from "tailwind-merge"
import { useDropdownSafeArea } from "./utils/useSafePosition"

export const Dropdown: FC<DropdownProps> = forwardRef<
  HTMLDivElement,
  DropdownProps
>(function Dropdown(
  { width = 250, items = [], opener, onItemClick = null },
  ref
) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number>(-1)
  const styles = getStyles()
  const newRef = useRef(null)
  const containerRef = ref ? ref : newRef
  const openerRef = useRef(null)

  useAccessibility({
    isOpen,
    setIsOpen,
    ref: containerRef as React.MutableRefObject<null>,
    openerRef,
  })

  const { safeArea } = useDropdownSafeArea({
    dropdownRef: containerRef as React.MutableRefObject<HTMLDivElement>,
    triggerRef: openerRef,
    isOpen,
  })

  return (
    <div className={styles.container}>
      {opener && opener({ isOpen, setIsOpen, ref: openerRef })}

      <FadeMotion shouldFade={isOpen}>
        <ul
          ref={containerRef as RefObject<HTMLUListElement>}
          className={styles.itemsContainer}
          style={{ width: width, ...safeArea }}
          role="menu"
          aria-haspopup="true"
          tabIndex={-1}
        >
          {items.map((item, index) => (
            <li
              key={item.key}
              className={twMerge(
                styles.item,
                index == selectedItem &&
                  "focus:outline-none  focus:bg-gray-200",
                item.label && "hover:bg-gray-200"
              )}
              onClick={(e) => {
                if (item.label) {
                  setSelectedItem(index)
                  if (onItemClick) onItemClick(e)
                }
              }}
              role="menuitem"
              tabIndex={0}
            >
              {item.extraElement}
              {item.label}
            </li>
          ))}
        </ul>
      </FadeMotion>
    </div>
  )
})
export default Dropdown
