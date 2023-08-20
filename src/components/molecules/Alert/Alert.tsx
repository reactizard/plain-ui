import { IconX } from "@tabler/icons-react"
import React, { FC, forwardRef } from "react"
import useDisclosure from "../../../hooks/useDisclosure"
import FadeMotion from "../hoc/motion/FadeMotion"
import { getStyles } from "./utils/styles"
import { AlertProps } from "./utils/types"

export const Alert: FC<AlertProps> = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(
    {
      color = "success",
      variant = "filled",
      closable = true,
      title,
      description,
      sideIcon,
      footer,
      onClose,
    },
    ref
  ) {
    const [opened, { close }] = useDisclosure(true)
    const styles = getStyles({ color, sideIcon, variant })

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
      close()
      if (onClose) onClose(e)
    }
    return (
      <FadeMotion shouldFade={opened}>
        <div className={styles.container} ref={ref}>
          <div className={styles.body}>
            <div className={styles.rlDivider}>
              <div className={styles.leftPart}>{sideIcon}</div>
              <div className={styles.rightPart}>
                <div className={styles.headerContainer}>
                  {title ? <div className={styles.title}>{title}</div> : null}
                  {closable ? (
                    <div className={styles.closer} onClick={handleClose}>
                      <IconX />
                    </div>
                  ) : null}
                </div>
                <p className={styles.description}>{description}</p>
                {footer ? <div className={styles.footer}>{footer}</div> : null}
              </div>
            </div>
          </div>
        </div>
      </FadeMotion>
    )
  }
)

export default Alert
