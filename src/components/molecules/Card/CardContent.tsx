import React, { HTMLAttributes, PropsWithChildren, useContext } from "react"
import { CardContext } from "./utils/cardContext"
import { twMerge } from "tailwind-merge"
import { getStyles } from "./utils/styles"

type Props = HTMLAttributes<HTMLDivElement> & CardContentProps
interface CardContentProps {
  align?: "left" | "center" | "right"
}

const CardContent = ({
  children,
  align = "left",
  ...props
}: PropsWithChildren<Props>) => {
  const { width } = useContext(CardContext)
  const styles = getStyles({ align })
  return (
    <div
      className={twMerge(styles.contentContainer, props.className)}
      style={{ width: width || "fit-content" }}
      {...props}
    >
      {children}
    </div>
  )
}

export default CardContent
