import classNames from "classnames"
import React, { SVGProps } from "react"
import { ButtonVariant } from "../theme/constants"

interface TimesProps extends SVGProps<SVGSVGElement> {
  customfill: {
    variant?: ButtonVariant
    color?: string
  }
}

const Times: React.FC<TimesProps> = ({ customfill, ...rest }) => {
  const { color = "fill-primary-100", variant = "filled" } = customfill
  const colorClass = variant == "outlined" ? classNames(color) : "fill-white"
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={colorClass}
      {...rest}
    >
      <path d="M6.04688 4.5L8.39062 2.15625C8.69531 1.875 8.69531 1.40625 8.39062 1.125L7.875 0.609375C7.59375 0.304688 7.125 0.304688 6.84375 0.609375L4.5 2.95312L2.13281 0.609375C1.85156 0.304688 1.38281 0.304688 1.10156 0.609375L0.585938 1.125C0.28125 1.40625 0.28125 1.875 0.585938 2.15625L2.92969 4.5L0.585938 6.86719C0.28125 7.14844 0.28125 7.61719 0.585938 7.89844L1.10156 8.41406C1.38281 8.71875 1.85156 8.71875 2.13281 8.41406L4.5 6.07031L6.84375 8.41406C7.125 8.71875 7.59375 8.71875 7.875 8.41406L8.39062 7.89844C8.69531 7.61719 8.69531 7.14844 8.39062 6.86719L6.04688 4.5Z" />
    </svg>
  )
}

export default Times
