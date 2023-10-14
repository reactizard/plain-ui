import React, { FC, forwardRef } from "react"
import Avatar from "../Avatar"
import { getStyles } from "../utils/styles"
import { AvatarGroupProps } from "../utils/types"

const AvatarGroup: FC<AvatarGroupProps> = forwardRef<
  HTMLDivElement,
  AvatarGroupProps
>(function AvatarGroup({ children, more, size = "md" }, ref) {
  const MaxMoreToShow = 9
  more = more && more > MaxMoreToShow ? MaxMoreToShow : more
  const { groupContainer } = getStyles({ size })
  return (
    <div className={groupContainer} ref={ref}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<HTMLDivElement & AvatarGroupProps>(child)) {
          const avatarElement = React.cloneElement(child, {
            ...child.props,
            size: size,
            style: {
              ...child.props.style,
              border: "1px solid white",
            },
          })

          return avatarElement
        }
        return child
      })}
      {more ? (
        <Avatar
          size={size}
          style={{
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
