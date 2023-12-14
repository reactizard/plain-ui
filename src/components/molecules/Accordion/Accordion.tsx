import { IconChevronDown } from "@tabler/icons-react"
import React, { useState } from "react"
import { getStyles } from "./utils/styles"
import { AccordionProps } from "./utils/types"

const Accordion = ({
  data,
  collapseIcon,
  color = "warm",
  size = "md",
}: AccordionProps) => {
  const [activePanel, setActivePanel] = useState(null)
  const styles = getStyles({ color, size })
  const togglePanel = (key: any) => {
    setActivePanel(activePanel === key ? null : key)
  }

  return (
    <div className={styles.container}>
      {data.map((item: any) => (
        <div
          key={item.key}
          className={`${styles.itemContainer} ${
            item.disabled ? styles.disabled : styles.enabled
          }`}
        >
          <div
            className={`${styles.itemHeader} ${
              activePanel === item.key
                ? styles.activeClasses.itemHeader
                : styles.inactiveClasses.itemHeader
            }`}
            onClick={() => {
              if (!item.disabled) togglePanel(item.key)
            }}
          >
            <span className={styles.haderLabel}>{item.label}</span>
            {collapseIcon ? (
              (React.cloneElement(collapseIcon, {
                className:
                  collapseIcon.props.className +
                  ` ${
                    activePanel === item.key
                      ? styles.activeClasses.toggleIcon
                      : styles.inactiveClasses.toggleIcon
                  } ${styles.toggleIcon}`,
              }) as React.ReactElement<{ className: string }>)
            ) : (
              <IconChevronDown
                className={`${
                  activePanel === item.key
                    ? styles.activeClasses.toggleIcon
                    : styles.inactiveClasses.toggleIcon
                } ${styles.toggleIcon}`}
              />
            )}
          </div>
          <div
            className={`${
              activePanel === item.key
                ? styles.activeClasses.contentContainer
                : styles.inactiveClasses.contentContainer
            }  ${styles.contentContainer}`}
          >
            {item.children}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
