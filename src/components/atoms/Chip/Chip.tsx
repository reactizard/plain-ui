import classNames from "classnames"
import React, { ButtonHTMLAttributes } from "react"
import useDisclosure from "../../../hooks/useDisclosure"
import Times from "../../../icons/Times"
import { ButtonVariant, Colors } from "../../../theme/constants"
import { getClasses } from "../../../theme/functions/getClasses"
import { getStyles } from "./utils/styles"

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: Extract<ButtonVariant, "filled" | "outlined">
  color?: Colors
  disabled?: boolean
}

export const Chip: React.FC<ChipProps> = React.forwardRef<
  HTMLButtonElement,
  ChipProps
>(function Chip(
  { text, variant = "filled", color = "primary", disabled, ...rest }: ChipProps,
  ref
) {
  const [opened, { toggle }] = useDisclosure(true)
  const classes = getStyles({
    variant: variant,
    color: color,
    disabled: disabled,
  })

  const { fill } = getClasses({ color })

  return opened ? (
    <button className={classes} disabled={disabled} ref={ref} {...rest}>
      {text}
      <Times
        customfill={{ color: classNames(fill), variant }}
        onClick={() => (!disabled ? toggle() : null)}
      />
    </button>
  ) : null
})

export default Chip
