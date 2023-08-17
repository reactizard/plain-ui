import React, { FC, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { AlertProps } from "./utils/types"

const Alert: FC<AlertProps> = forwardRef<HTMLDivElement, AlertProps>(
  function Alert({ color }, ref) {
    const styles = getStyles({ color })
    return (
      <div className={styles.container} ref={ref}>
        <div className={styles.body}>
          <div className={styles.rlDivider}>
            <div className={styles.leftPart}>😀</div>
            <div className={styles.rightPart}>
              <div className={styles.header}>
                <div className={styles.title}>Alert</div>
                <button className={styles.closer}>✖</button>
              </div>
              <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                faucibus sit sit facilisis dictumst bibendum. Lorem ipsum dolor
                sit amet dictumst ipsum consectetur adipiscing.
              </div>
              <div className={styles.footer}>
                <a href="www.google.com" className="text-blue-500">
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

export default Alert
