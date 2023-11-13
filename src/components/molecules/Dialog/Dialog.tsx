import { IconX } from "@tabler/icons-react"
import React, { FC, forwardRef, useEffect } from "react"
import FadeMotion from "../hoc/motion/FadeMotion"
import { getStyles } from "./utils/styles"
import { DialogProps } from "./utils/types"

export const Dialog: FC<DialogProps> = forwardRef<HTMLDivElement, DialogProps>(
  function Dialog(
    {
      onClose,
      open = false,
      actions,
      content,
      title,
      positionX,
      positionY,
      icon,
      size = "md",
    },
    ref
  ) {
    const styles = getStyles({ positionX, positionY, size })
    useEffect(() => {
      const handleEsc = (event: any) => {
        if (event.key === "Escape" && onClose) {
          onClose()
        }
      }

      window.addEventListener("keydown", handleEsc)
      return () => {
        window.removeEventListener("keydown", handleEsc)
      }
    }, [onClose])

    const actionBtns = <div className={styles.actionContainer}>{actions}</div>
    return (
      <FadeMotion shouldFade={open} classes={styles.motionContainer}>
        <div ref={ref} className={styles.container}>
          <div className={styles.iconContainer}>
            <div className="icon">{icon}</div>
            <IconX className={styles.closeIcon} onClick={onClose} />
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{content}</div>

          {actionBtns}
        </div>
      </FadeMotion>
    )
  }
)

export default Dialog
