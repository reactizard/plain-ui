import React, { FC, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { CardProps, StatShape } from "./utils/types"

export const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  function Card(
    {
      variant = "card",
      title,
      subtitle,
      cover,
      tags,
      users,
      orientation = "vertical",
      actions,
      stats,
    },
    ref
  ) {
    const styles = getStyles({ variant, orientation })
    const head = cover ? (
      <div className={styles.headContainer}>
        <img className="rounded-[8px]" src={cover} alt="image" />
      </div>
    ) : null

    const actionButtons = (
      <div className={styles.actionsContainer}>
        {stats && stats.length ? (
          <div className={styles.statsContainer}>
            {stats.map((item: StatShape, index) => {
              return (
                <div className={styles.statItemContainer} key={`stat-${index}`}>
                  {item.icon}
                  {item.number}
                </div>
              )
            })}
          </div>
        ) : null}
        {actions ? (
          <div className={styles.actionButtonsContainer}>
            {actions.map((item) => item)}
          </div>
        ) : null}
      </div>
    )

    const body = (
      <div className={styles.bodyContainer}>
        {tags ? (
          <div className={styles.tagsContainer}>{tags.map((item) => item)}</div>
        ) : null}
        <div className={styles.bodyHeading}>
          {title && <div className={styles.title}>{title}</div>}
          {users && <div>{users}</div>}
        </div>
        <p className="text-mdRegular">{subtitle}</p>
        {actionButtons}
      </div>
    )

    return (
      <div ref={ref} className={styles.container}>
        {head}
        {body}
      </div>
    )
  }
)
export default Card
