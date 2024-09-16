import React, { forwardRef } from "react"
import { CardContext } from "./utils/cardContext"
import { twMerge } from "tailwind-merge"
import { getStyles } from "./utils/styles"

interface CardProps {
  width?: number
  height?: number
  children?: React.ReactNode
  align?: "center" | "left" | "right"
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, width = 0, height = 0, align = "left" },
  ref
) {
  const cardContext = React.useContext(CardContext)
  const { group } = cardContext
  const styles = getStyles({ align })

  const groupStyle =
    group && group.total
      ? twMerge([
          group.current == 0 ? styles.groupItem.first : "",
          group.current == group.total - 1
            ? styles.groupItem.last
            : styles.groupItem.middle,
        ])
      : null

  return (
    <CardContext.Provider value={{ ...cardContext, width, height, align }}>
      <div
        className={twMerge(
          groupStyle,
          !groupStyle
            ? "card border-2 rounded-lg shadow-md hover:shadow-lg"
            : "",
          styles.cardContainer
        )}
        style={{
          width: width || "40vw",
          height: height || "inherit",
        }}
        ref={ref}
      >
        {children}
      </div>
    </CardContext.Provider>
  )
})
export default Card
