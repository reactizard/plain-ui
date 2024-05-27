import { IconChevronRight } from "@tabler/icons-react"
import React, { FC, forwardRef, useState } from "react"
import { text } from "../../../../theme/mapper"
import Breadcrumb from "../Breadcrumb"
import { getStyles } from "../utils/styles"
import { BreadcrumbGroupProps } from "../utils/types"

const BreadcrumbGroup: FC<BreadcrumbGroupProps> = forwardRef<
  HTMLDivElement,
  BreadcrumbGroupProps
>(({ children, separator, color = "gray" }, ref) => {
  const styles = getStyles({ color })
  const numberOfItems = React.Children.count(children)

  const [allVisible, setAllVisible] = useState(false)
  separator = !separator ? (
    <IconChevronRight className={`${text[color][300]}`} />
  ) : (
    separator
  )
  return (
    <div ref={ref}>
      <nav className={styles.groupNav}>
        <ol className={styles.groupOrderList}>
          {React.Children.map(children, (child, index) => {
            const showSeparator = index + 1 < numberOfItems
            const initialVisible = index <= 1 || index == numberOfItems - 1
            const showDot = numberOfItems > 3 && index == 2

            if (React.isValidElement<HTMLDivElement>(child)) {
              const breadcrumbElement = React.cloneElement(child, {
                ...child.props,
                className: styles.groupItem,
                key: index,
                style: { ...child.props.style },
              })

              const expander = (
                <li className={styles.groupList} key={"bread"}>
                  <Breadcrumb
                    className={styles.groupItem}
                    onClick={() => setAllVisible(true)}
                  >
                    ...
                  </Breadcrumb>
                  {separator}
                </li>
              )

              return (
                <>
                  <li
                    className={`${styles.groupList} ${
                      allVisible || initialVisible ? "" : "hidden"
                    }`}
                  >
                    {breadcrumbElement}
                    {showSeparator ? separator : null}
                  </li>
                  {showDot && !allVisible ? expander : null}
                </>
              )
            }
          })}
        </ol>
      </nav>
    </div>
  )
})
BreadcrumbGroup.displayName = "Breadcrumb.Group"
export default BreadcrumbGroup
