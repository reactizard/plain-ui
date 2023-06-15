import classNames from "classnames"
import React from "react"
import { bg } from "../../../../theme/mapper"
import { BarHeight, BarProgressText } from "../utils/styles"
import { BarProps } from "../utils/types"

const Bar: React.FC<BarProps> = ({ progress, size, color }) => {
  const BarContainer = classNames([
    "flex",
    "items-center",
    "w-[200px]",
    BarHeight[size],
    "bg-gray-300",
    "rounded-full",
    "mr-1",
  ])
  const BarClasses = classNames(["h-full", "rounded-full", bg[color][500]])
  return (
    <div className="flex items-center">
      <div className={BarContainer}>
        <div className={BarClasses} style={{ flexBasis: `${progress}%` }}></div>
      </div>
      <div className={BarProgressText[size]}>{`${progress}%`}</div>
    </div>
  )
}

export default Bar
