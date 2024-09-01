import React, { ReactElement, useContext } from "react"
import { CardContext } from "./utils/cardContext"

interface CardCoverProps extends React.ComponentProps<"div"> {
  children?: React.ReactElement
}
const CardCover = ({ children }: CardCoverProps) => {
  const { height, width } = useContext(CardContext)
  return (
    <div className="cardCover border-2 border-red-500" style={{ width }}>
      {children}
    </div>
  )
}

export default CardCover
