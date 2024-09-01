import React, { forwardRef } from "react"
import { CardContext } from "./utils/cardContext"

interface CardProps {
  width?: number
  height?: number
  children?: React.ReactElement[]
  align?: "center" | "left" | "right"
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, width = 0, height = 0, align = "left" },
  ref
) {
  return (
    <CardContext.Provider value={{ width, height }}>
      <div
        className="card bg-slate-200 border-2 border-purple-600 flex flex-col gap-2 justify-center box-content p-1"
        style={{ width, height, textAlign: align }}
        ref={ref}
      >
        {children}
      </div>
    </CardContext.Provider>
  )
})
export default Card
