import React, { FC, forwardRef } from "react"
import { Void } from "../../../icons"
import { getStyles } from "./utils/styles"
import { BannerProps } from "./utils/types"
export const Banner: FC<BannerProps> = forwardRef<HTMLDivElement, BannerProps>(
  function Banner({ color, variant, dismissable, icon, subtitle, title }, ref) {
    const styles = getStyles({ color, variant })
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.icon}>{icon ? icon : <Void />}</div>
        <div className={styles.body}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.dismissable}>{dismissable}</div>
      </div>
    )
  }
)
export default Banner
