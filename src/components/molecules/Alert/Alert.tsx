import { IconX } from "@tabler/icons-react"
import React, { FC, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { AlertProps } from "./utils/types"

export const Alert: FC<AlertProps> = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(
    {
      color = "success",
      closable = true,
      title,
      description,
      sideIcon,
      footer,
    },
    ref
  ) {
    const styles = getStyles({ color })
    return (
      <div className={styles.container} ref={ref}>
        <div className={styles.body}>
          <div className={styles.rlDivider}>
            <div className={styles.leftPart}>{sideIcon}</div>
            <div className={styles.rightPart}>
              <div className={styles.headerContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.closer}>
                  {closable ? <IconX /> : null}
                </div>
              </div>
              <p className={styles.description}>{description}</p>
              <div className={styles.footer}>{footer}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

export default Alert
