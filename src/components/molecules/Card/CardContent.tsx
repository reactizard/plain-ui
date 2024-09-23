import React, { HTMLAttributes, PropsWithChildren, useContext } from "react"
import { CardContext } from "./utils/cardContext"
import { twMerge } from "tailwind-merge"
import { getStyles } from "./utils/styles"
import { CardContentProps } from "./utils/types"

type Props = HTMLAttributes<HTMLDivElement> & CardContentProps

export const CardContent = ({
  children,
  align = "left",
  media,
  ...props
}: PropsWithChildren<Props>) => {
  const { width } = useContext(CardContext)
  const styles = getStyles({ align, media })
  return (
    <div
      className={twMerge(styles.contentContainer, props.className)}
      style={{ width: width || "fit-content", ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
}

export default CardContent
