import React, { FC, forwardRef, useMemo } from "react"
import { Void } from "../../../icons"
import { getStyles } from "./utils/styles"
import { BannerProps } from "./utils/types"

const DefaultIcon = <Void />

export const Banner: FC<BannerProps> = forwardRef<HTMLDivElement, BannerProps>(
  function Banner(
    { color, dismissable, icon = DefaultIcon, subtitle, title },
    ref
  ) {
    const styles = useMemo(() => getStyles({ color }), [color])
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.body}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {dismissable ? (
          <div className={styles.dismissable}>{dismissable}</div>
        ) : null}
      </div>
    )
  }
)
export default Banner
