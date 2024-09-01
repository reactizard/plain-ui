import React from "react"

interface CardFooterProps {
  children?: React.ReactElement
}

const CardFooter = ({ children }: CardFooterProps) => {
  return <div className="w-full">{children}</div>
}

export default CardFooter
