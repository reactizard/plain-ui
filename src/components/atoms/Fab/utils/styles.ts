import classNames from "classnames"
import { Colors } from "../../../../theme/constants"
import { bg, hover } from "../../../../theme/mapper"

interface StyleProps {
  color: NonNullable<Colors>
  disabled?: boolean
}

export const getStyles = ({ color, disabled }: StyleProps) => {
  const ownClasses = [
    "flex",
    "items-center",
    "fixed",
    "bottom-5",
    "right-6",
    "rounded-full",
    "p-2",
    "z-[100]",
    "text-white",
    "shadow-lg",
    bg[color][500],
    hover[color][600],
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ]

  const styles = classNames(ownClasses)

  return styles
}
