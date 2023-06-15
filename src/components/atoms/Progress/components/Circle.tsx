import React from "react"
import { stroke } from "../../../../theme/mapper"
import {
  circleContainer,
  labelClass,
  sizeMapper,
  titleClass,
} from "../utils/styles"
import { CircleProps } from "../utils/types"

const Circle = ({ progress, size, label, color, half }: CircleProps) => {
  const radius = sizeMapper[size].size / 2
  const circumference = half ? Math.PI * radius : 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference
  const width = sizeMapper[size].size
  const height = half ? sizeMapper[size].size / 2 : sizeMapper[size].size
  const rotation = half ? "-180" : "-90"
  const progressText = `${progress}${size !== "sm" ? "%" : ""}`

  return (
    <div style={{ width, height, position: "relative" }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${sizeMapper[size].size} ${height}`}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - sizeMapper[size].stroke / 2}
          strokeWidth={sizeMapper[size].stroke}
          fill="none"
          className={stroke["gray"][200]}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - sizeMapper[size].stroke / 2}
          strokeWidth={sizeMapper[size].stroke}
          fill="none"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          transform={`rotate(${rotation} ${radius} ${radius})`}
          style={{ strokeLinecap: "round" }}
          className={stroke[color][500]}
        />
      </svg>
      <div className={circleContainer}>
        <div className={titleClass[size]}>{progressText}</div>
        <div className={labelClass[size]}>{label}</div>
      </div>
    </div>
  )
}
export default Circle
