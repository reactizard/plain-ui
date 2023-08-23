import { IconUserCircle } from "@tabler/icons-react"
import React, { FC, forwardRef, useEffect, useRef } from "react"
import { getAbbr } from "../../../theme/functions"
import { getStyles } from "./utils/styles"
import { AvatarProps } from "./utils/types"
export const Avatar: FC<AvatarProps> = forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(
    { imgURL, children, onlineStatus, color = "primary", size = "md" },
    ref
  ) {
    const childRef = useRef<HTMLDivElement>(null)
    const styles = getStyles({
      color,
      onlineStatus,
      size,
    })

    useEffect(() => {
      const textContent = childRef.current?.innerText ?? ""
      if (childRef.current && children) {
        const abbreviation = getAbbr({ showChars: 2, text: textContent })
        childRef.current.innerHTML = abbreviation
      }
    }, [children, imgURL])

    return (
      <div ref={ref} className={styles.container}>
        {!imgURL ? (
          <div ref={childRef} className={styles.childContainer}>
            {children || <IconUserCircle className="" />}
          </div>
        ) : (
          <img src={imgURL} className={styles.avatarImage} />
        )}
        {onlineStatus ? <div className={styles.online}></div> : null}
      </div>
    )
  }
)

export default Avatar
