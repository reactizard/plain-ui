import React, { FC, forwardRef } from "react"
import Avatar from "../Avatar"
import { getStyles } from "../utils/styles"
import { AvatarGroupProps } from "../utils/types"

const AvatarGroup: FC<AvatarGroupProps> = forwardRef<
  HTMLDivElement,
  AvatarGroupProps
>(function AvatarGroup({ children, more }, ref) {
  const MaxMoreToShow = 9
  const TranslateMultiplier = 12
  more = more && more > MaxMoreToShow ? MaxMoreToShow : more
  const { groupContainer } = getStyles({})

  return (
    <div className={groupContainer} ref={ref}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<HTMLDivElement>(child)) {
          const avatarElement = React.cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              transform: `translateX(-${index * TranslateMultiplier}px)`,
              border: "1px solid white",
            },
          })

          return avatarElement
        }
        return child
      })}
      {more ? (
        <Avatar
          style={{
            transform: `translateX(-${
              React.Children.count(children) * TranslateMultiplier
            }px)`,
            border: "1px solid white",
          }}
        >
          <span>{more}+</span>
        </Avatar>
      ) : null}
    </div>
  )
})

AvatarGroup.displayName = "Avatar.Group"
export default AvatarGroup
