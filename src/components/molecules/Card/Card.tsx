import React, { FC, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { CardProps } from "./utils/types"

export const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  function Card(
    {
      color = "primary",
      variant = "card",
      title,
      users,
      orientation = "vertical",
      actions,
      stats,
    },
    ref
  ) {
    const styles = getStyles({ color, variant, orientation })
    const head = <div></div>

    const body = (
      <div className="flex items-center justify-between gap-[12px]">
        {title && <div className="flex-[1 0 0] text-lgSemiBold">{title}</div>}
        {users && <div>{users}</div>}
      </div>
    )

    const actionButtons =
      actions && actions.length ? (
        <div className="flex items-center justify-between">
          {stats && stats.length ? (
            <div className="flex items-center gap-[12px]">
              {stats.map((item) => item)}
            </div>
          ) : null}
          <div className="flex flex-row gap-1">
            {actions.map((item) => item)}
          </div>
        </div>
      ) : null

    return (
      <div ref={ref} className={styles.container}>
        Card
        {body}
        {actionButtons}
      </div>
    )
  }
)
export default Card
