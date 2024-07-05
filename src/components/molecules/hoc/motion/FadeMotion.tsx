import CSSMotion from "rc-motion"
import React, { FC } from "react"
import { twMerge } from "tailwind-merge"
interface FadeMotionProps {
  shouldFade: boolean
  children?: React.ReactNode
  classes?: string
}

export const FadeMotion: FC<FadeMotionProps> = ({
  shouldFade,
  children,
  classes,
}) => {
  return (
    <CSSMotion
      visible={shouldFade}
      motionName="animation"
      onEnterStart={() => ({ opacity: 0 })}
      onEnterActive={() => ({ opacity: 1 })}
      onLeaveStart={() => ({ opacity: 1 })}
      onLeaveActive={() => ({ opacity: 0 })}
    >
      {({ className, style }, ref) => (
        <div
          ref={ref}
          style={style}
          className={twMerge(
            className,
            `duration-500 transition-all ${classes}`
          )}
        >
          {children}
        </div>
      )}
    </CSSMotion>
  )
}

export default FadeMotion
