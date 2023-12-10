import { IconChevronDown } from "@tabler/icons-react"
import React, { useState } from "react"
import { AccordionProps } from "./utils/types"

const Accordion = ({ data, collapseIcon }: AccordionProps) => {
  const [activePanel, setActivePanel] = useState(null)

  const togglePanel = (key: any) => {
    setActivePanel(activePanel === key ? null : key)
  }

  return (
    <div className="max-w-md mx-auto">
      {data.map((item: any) => (
        <div
          key={item.key}
          className={`mb-0 ${
            item.disabled ? "cursor-not-allowed opacity-50 " : "cursor-pointer"
          } group`}
        >
          <div
            className={`bg-gray-200 p-3  flex items-center justify-between ${
              activePanel === item.key ? "rounded-t" : "rounded"
            }`}
            onClick={() => {
              if (!item.disabled) togglePanel(item.key)
            }}
          >
            <span className="font-bold">{item.label}</span>
            {collapseIcon ? (
              React.isValidElement<HTMLElement>(collapseIcon) &&
              React.cloneElement(collapseIcon, {
                className:
                  collapseIcon.props.className +
                  ` ${
                    activePanel === item.key ? "rotate-180" : ""
                  } transition-transform ease-in-out duration-300 transform`,
              })
            ) : (
              <IconChevronDown
                className={`${
                  activePanel === item.key ? "rotate-180" : ""
                } transition-transform ease-in-out duration-300 transform group-hover:translate-y-1`}
              />
            )}
          </div>
          <div
            className={` bg-white p-[1px] rounded-b overflow-hidden transition-max-height ease-in-out duration-500 ${
              activePanel === item.key ? "max-h-screen" : "max-h-0"
            }`}
          >
            {item.children}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
