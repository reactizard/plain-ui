import { IconChevronDown } from "@tabler/icons-react"
import classNames from "classnames"
import React, { useState } from "react"
import { getStyles } from "./utils/styles"
import { AccordionDataShape, AccordionProps } from "./utils/types"

const Accordion = ({
  data,
  collapseIcon,
  color = "warm",
  size = "md",
  multiActive = false,
}: AccordionProps) => {
  const [activePanel, setActivePanel] = useState<String[]>([])
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
    <div className={styles.container} data-testId="accordion-container">
      {data.map((item: AccordionDataShape, index: number) => {
        const itemKey = String(index)
        const showItem = activePanel.includes(itemKey)
        const activeClass = showItem
          ? styles.activeClasses
          : styles.inactiveClasses

        const iconClasses = classNames([
          collapseIcon?.props.className,
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
              onClick={() => {
                if (!item.disabled) togglePanel(itemKey)
              }}
              data-testId="accordion-item-header"
            >
              <span className={styles.haderLabel}>{item.label}</span>
              {collapseIcon ? (
                React.cloneElement(collapseIcon, {
                  className: iconClasses,
                })
              ) : (
                <IconChevronDown className={iconClasses} />
              )}
            </div>
            {!item.disabled ? (
              <div
                className={classNames([
                  activeClass.contentContainer,
                  styles.contentContainer,
                ])}
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
