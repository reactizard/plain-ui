import classNames from "classnames"
import React, { ButtonHTMLAttributes, Ref, forwardRef } from "react"
import useDisclosure from "../../../hooks/useDisclosure"
import Times from "../../../icons/Times"
import { ButtonVariant, Colors } from "../../../theme/constants"
import { getStyles } from "./utils/styles"

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: Extract<ButtonVariant, "filled" | "outlined">
  color?: Colors
  disabled?: boolean
}

export const Chip = forwardRef(function Chip(
  { text, variant = "filled", color = "primary", disabled, ...rest }: ChipProps,
  ref: Ref<HTMLButtonElement>
) {
  const [opened, { toggle }] = useDisclosure(true)
  const classes = getStyles({
    variant: variant,
    color: color,
    disabled: disabled,
  })

  const fill = {
    //[`fill-${color}-500`]: true,
    "fill-primary-500": color == "primary",
    "fill-warning-500": color == "warning",
    "fill-success-500": color == "success",
    "fill-danger-500": color == "danger",
    "fill-yellow-500": color == "yellow",
    "fill-orange-500": color == "orange",
    "fill-melon-500": color == "melon",
    "fill-pink-500": color == "pink",
    "fill-purple-500": color == "purple",
    "fill-azure-500": color == "azure",
    "fill-aloha-500": color == "aloha",
    "fill-lime-500": color == "lime",
    "fill-warm-500": color == "warm",
    "fill-gray-300": color == "gray",
  }

  return opened ? (
    <button className={classes} disabled={disabled} ref={ref} {...rest}>
      {text}
      <Times
        customfill={{ color: classNames(fill), variant }}
        onClick={() => (!disabled ? toggle() : null)}
      />
    </button>
  ) : (
    <></>
  )
})

export default Chip
