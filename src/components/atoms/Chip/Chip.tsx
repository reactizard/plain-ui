import React, { Ref, forwardRef } from "react"
import useDisclosure from "../../../hooks/useDisclosure"
import { getStyles } from "./utils/styles"
import { Props } from "./utils/types"
import { IconX } from "@tabler/icons-react"
import { customTwMerge } from "../../../theme/utils"

export const Chip = forwardRef(function Chip(
  {
    text,
    variant = "filled",
    color = "primary",
    closable = false,
    rounded,
    disabled,
    ...rest
  }: Props,
  ref: Ref<HTMLButtonElement>
) {
  const [opened, { toggle }] = useDisclosure(true)
  const classes = getStyles({ variant, color, disabled, rounded })

  return opened ? (
    <button
      className={customTwMerge(classes.chip)}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {text}
      {closable ? (
        <IconX size={15} onClick={() => (!disabled ? toggle() : null)} />
      ) : null}
    </button>
  ) : (
    <></>
  )
})

export default Chip
