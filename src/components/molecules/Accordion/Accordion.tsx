import { IconChevronDown } from "@tabler/icons-react"
import classNames from "classnames"
import React, { useState } from "react"
import { getStyles } from "./utils/styles"
import { AccordionDataShape, AccordionProps } from "./utils/types"

const Accordion = function Accordion({
  data,
  collapseIcon, //= ({ className }) => <IconChevronDown className={className} />,
  color = "warm",
  size = "md",
  multiActive = false,
  controlByCollapseIndicator = false,
}: AccordionProps) {
  const [activePanel, setActivePanel] = useState<string[]>([])
  const styles = getStyles({ color, size })

  const togglePanel = (key: string) => {
    const addItem = () => {
      setActivePanel((prev) => (multiActive ? [...prev, key] : [key]))
    }
    const removeItem = () => {
      setActivePanel((prev) => prev.filter((item) => item !== key))
    }
    activePanel.includes(key) ? removeItem() : addItem()
  }

  return (
    <div className={styles.container} data-testid="accordion-container">
      {data.map((item: AccordionDataShape, index: number) => {
        const itemKey = String(index)
        const showItem = activePanel.includes(itemKey)
        const activeClass = showItem
          ? styles.activeClasses
          : styles.inactiveClasses

        const iconClasses = classNames([
          //collapseIcon?.props.className,
          !item.disabled ? styles.toggleIcon : "",
          activeClass.toggleIcon,
        ])

        return (
          <div
            key={itemKey}
            className={`${styles.itemContainer} ${
              item.disabled ? styles.disabled : styles.enabled
            }`}
          >
            <div
              className={`${styles.itemHeader} ${activeClass.itemHeader}`}
              data-testid="accordion-item-header"
              onClick={() => {
                if (!item.disabled && !controlByCollapseIndicator) {
                  togglePanel(itemKey)
                }
              }}
            >
              <span className={styles.haderLabel}>{item.label}</span>

              {collapseIcon ? (
                collapseIcon({
                  className: iconClasses,
                  isOpen: showItem,
                  onChange: () => {
                    if (!item.disabled && controlByCollapseIndicator)
                      togglePanel(itemKey)
                  },
                })
              ) : (
                <IconChevronDown
                  className={iconClasses}
                  onClick={() => {
                    if (!item.disabled && controlByCollapseIndicator)
                      togglePanel(itemKey)
                  }}
                />
              )}
            </div>
            {!item.disabled ? (
              <div
                className={classNames([
                  activeClass.contentContainer,
                  styles.contentContainer,
                ])}
                data-testid="accordion-item-content"
              >
                {item.children}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
