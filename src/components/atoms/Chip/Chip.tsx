import React, { ButtonHTMLAttributes } from "react"
import useDisclosure from "../../../hooks/useDisclosure"
import Times from "../../../icons/Times"
import { Colors, Variant } from "../../../theme/constants"
import { getClasses } from "../../../theme/functions/getClasses"
import { getStyles } from "./utils/styles"

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: Exclude<Variant, "light">
  color?: Colors
  disabled?: boolean
}

export const Chip: React.FC<ChipProps> = React.forwardRef<
  HTMLButtonElement,
  ChipProps
>(
  (
    {
      text,
      variant = "filled",
      color = "primary",
      disabled,
      ...rest
    }: ChipProps,
    ref
  ) => {
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
          customfill={{ color: fill, variant }}
          onClick={() => (!disabled ? toggle() : null)}
        />
      </button>
    ) : null
  }
) as any

export default Chip
