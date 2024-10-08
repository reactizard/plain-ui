import React, { forwardRef, Ref } from "react"
import { CardContext } from "./utils/cardContext"
import { twMerge } from "tailwind-merge"
import { getStyles } from "./utils/styles"
import { Props } from "./utils/types"

export const Card = forwardRef(function Card(
  { children, width = 0, height = 0, align = "left", ...props }: Props,
  ref: Ref<HTMLDivElement>
) {
  const cardContext = React.useContext(CardContext)
  const { group } = cardContext

  const childrenArray = React.Children.toArray(children)
  const itemTypes = childrenArray.map((child) => {
    if (React.isValidElement(child)) {
      return child.props.media ? "media" : "text"
    }
    return "text"
  })

  const styles = getStyles({ align, itemTypes })

  const groupFirstItem = group?.current ?? null
  const groupLastItem = (group && group?.total - 1) ?? null
  const groupStyle =
    group && group.total
      ? [
          groupFirstItem ? styles.groupItem.first : "",
          groupLastItem ? styles.groupItem.last : styles.groupItem.middle,
        ]
      : null

  return (
    <CardContext.Provider value={{ ...cardContext, width, height, align }}>
      <div
        className={twMerge(
          groupStyle,
          !groupStyle ? styles.cardContainerNotGrouped : "",
          styles.cardContainer,
          props.className
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
