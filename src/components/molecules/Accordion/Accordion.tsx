import { IconChevronDown } from "@tabler/icons-react"
import React, { useState } from "react"

const Accordion = ({ data }: any) => {
  const [activePanel, setActivePanel] = useState(null)

  const togglePanel = (key: any) => {
    setActivePanel(activePanel === key ? null : key)
  }

  return (
    <div className="max-w-md mx-auto">
      {data.map((item: any) => (
        <div key={item.key} className="mb-2">
          <div
            className={`bg-gray-200 p-3 cursor-pointer flex items-center justify-between ${
              activePanel === item.key ? "rounded-t" : "rounded"
            }`}
            onClick={() => togglePanel(item.key)}
          >
            <span className="font-bold">{item.label}</span>
            <IconChevronDown
              className={`${
                activePanel === item.key ? "rotate-180" : ""
              } transition-transform ease duration-300 transform`}
            />
          </div>
          <div
            className={` bg-white p-1 rounded-b overflow-hidden transition-max-height ease-in-out duration-300 ${
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
