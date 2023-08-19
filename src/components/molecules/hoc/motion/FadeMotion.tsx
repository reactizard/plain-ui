import { AnimatePresence, motion } from "framer-motion"
import React, { FC } from "react"

interface FadeMotionProps {
  shouldFade: boolean
  children?: React.ReactNode
}

export const FadeMotion: FC<FadeMotionProps> = ({ shouldFade, children }) => {
  return (
    <AnimatePresence>
      {shouldFade ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default FadeMotion
