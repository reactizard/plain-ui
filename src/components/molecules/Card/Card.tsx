import React, { FC, forwardRef } from "react"
import { getStyles } from "./utils/styles"
import { CardProps, StatShape } from "./utils/types"

export const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  function Card(
    {
      color = "primary",
      variant = "card",
      title,
      subtitle,
      tags,
      users,
      orientation = "vertical",
      actions,
      stats,
    },
    ref
  ) {
    const styles = getStyles({ color, variant, orientation })
    const head = (
      <div className={styles.headContainer}>
        <img
          className="rounded-[8px]"
          src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="image"
        />
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
      </div>
    )

    const actionButtons =
      actions && actions.length ? (
        <div className={styles.actionsContainer}>
          {stats && stats.length ? (
            <div className={styles.statsContainer}>
              {stats.map((item: StatShape, index) => {
                return (
                  <div
                    className={styles.statItemContainer}
                    key={`stat-${index}`}
                  >
                    {item.icon}
                    {item.number}
                  </div>
                )
              })}
            </div>
          ) : null}
          <div className={styles.actionButtonsContainer}>
            {actions.map((item) => item)}
          </div>
        </div>
      ) : null

    return (
      <div ref={ref} className={styles.container}>
        {head}
        {body}
        <p className="text-mdRegular">{subtitle}</p>
        {actionButtons}
      </div>
    )
  }
)
export default Card
