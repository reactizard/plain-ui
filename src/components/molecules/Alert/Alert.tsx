import { IconX } from "@tabler/icons-react"
import { AnimatePresence, motion } from "framer-motion"
import React, { FC, forwardRef } from "react"
import useDisclosure from "../../../hooks/useDisclosure"
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
    const [opened, { close }] = useDisclosure(true)
    const styles = getStyles({ color, sideIcon })
    return (
      <AnimatePresence>
        {opened ? (
          <motion.div
            className={styles.container}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className={styles.body}>
              <div className={styles.rlDivider}>
                <div className={styles.leftPart}>{sideIcon}</div>
                <div className={styles.rightPart}>
                  <div className={styles.headerContainer}>
                    {title ? <div className={styles.title}>{title}</div> : null}
                    {closable ? (
                      <div className={styles.closer} onClick={close}>
                        <IconX />
                      </div>
                    ) : null}
                  </div>
                  <p className={styles.description}>{description}</p>
                  {footer ? (
                    <div className={styles.footer}>{footer}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    )
  }
)

export default Alert
