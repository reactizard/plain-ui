import { IconX } from "@tabler/icons-react"
import classNames from "classnames"
import CSSMotion from "rc-motion"
import React, { FC, forwardRef, useEffect, useState } from "react"
import useDisclosure from "../../../hooks/useDisclosure"
import { getStyles } from "./utils/styles"
import { ToastProps } from "./utils/types"

export const Toast: FC<ToastProps> = forwardRef<HTMLDivElement, ToastProps>(
  function Toast(
    {
      color = "primary",
      variant,
      sideIcon,
      title,
      description,
      footer,
      closable,
      autoClose = true,
      onClose,
    },
    ref
  ) {
    const styles = getStyles({ color, variant })
    const [opened, { close }] = useDisclosure(true)
    const [showIndicator, setShowIndicator] = useState(true)

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
      close()
      if (onClose) onClose(e)
    }

    useEffect(() => {
      if (autoClose) {
        setShowIndicator(false)
        const timeout = setTimeout(() => {
          close()
        }, 10000)
        return () => clearTimeout(timeout)
      }
    })

    const Indicator = (
      <CSSMotion
        visible={showIndicator}
        motionName="animation"
        onEnterStart={() => ({ width: "0%" })}
        onEnterActive={() => ({ width: "100%" })}
        onLeaveStart={() => ({ width: "100%" })}
        onLeaveActive={() => ({ width: "0%" })}
      >
        {({ style, className }) => (
          <div
            style={style}
            className={classNames([styles.indicator, className])}
          ></div>
        )}
      </CSSMotion>
    )

    return opened ? (
      <div ref={ref} className={classNames(styles.container)}>
        {Indicator}
        <div className={styles.body}>
          <div className={styles.rlDivider}>
            <div className={styles.leftPart}>{sideIcon}</div>
            <div className={styles.rightPart}>
              <div className={styles.headerContainer}>
                {title ? <div className={styles.title}>{title}</div> : " "}
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
    ) : null
  }
)
export default Toast
