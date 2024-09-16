import React from "react"
import { CardContext } from "./utils/cardContext"
import Divider from "../../atoms/Divider"
import { getStyles } from "./utils/styles"
export const CardGroup = ({ children }: { children: React.ReactNode }) => {
  const cardContext = React.useContext(CardContext)
  const childrenArray = React.Children.toArray(children)
  const styles = getStyles({})
  return (
    <div className={styles.groupContainer}>
      {childrenArray.map((item, index) => {
        return (
          <CardContext.Provider
            value={{
              ...cardContext,
              group: { current: index, total: childrenArray.length },
            }}
            key={`card-group-${index}`}
          >
            {item}
            {index < childrenArray.length - 1 && (
              <div className={styles.groupDivider}>
                <Divider orientation="vertical" />
              </div>
            )}
          </CardContext.Provider>
        )
      })}
    </div>
  )
}
