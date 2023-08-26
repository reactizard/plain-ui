import { IconChevronRight } from "@tabler/icons-react"
import React, { FC, forwardRef, useState } from "react"
import { text } from "../../../../theme/mapper"
import Breadcrumb from "../Breadcrumb"
import { BreadcrumbGroupProps } from "../utils/types"

const BreadcrumbGroup: FC<BreadcrumbGroupProps> = forwardRef<
  HTMLDivElement,
  BreadcrumbGroupProps
>(({ children, separator, color = "gray" }, ref) => {
  const numberOfItems = React.Children.count(children)

  const [allVisible, setAllVisible] = useState(false)
  separator = !separator ? (
    <IconChevronRight className={`${text[color][300]}`} />
  ) : (
    separator
  )
  return (
    <div ref={ref}>
      <nav className="text-gray-300">
        <ol className="list-none p-0 inline-flex">
          {React.Children.map(children, (child, index) => {
            const showSeparator = index + 1 < numberOfItems
            const initialVisible =
              index == 0 || index == 1 || index == numberOfItems - 1

            const showDot = numberOfItems > 3 && index == 2

            if (React.isValidElement<HTMLDivElement>(child)) {
              const breadcrumbElement = React.cloneElement(child, {
                ...child.props,
                className: `${text[color][400]}`,
                key: index,
                style: { ...child.props.style },
              })

              const expander = (
                <li className="flex items-center" key={"hello"}>
                  <Breadcrumb onClick={() => setAllVisible(true)}>
                    ...
                  </Breadcrumb>
                  {separator}
                </li>
              )

              return (
                <>
                  <li
                    className={`flex items-center ${
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
            //return child
          })}
        </ol>
      </nav>
    </div>
  )
})
BreadcrumbGroup.displayName = "Breadcrumb.Group"
export default BreadcrumbGroup
