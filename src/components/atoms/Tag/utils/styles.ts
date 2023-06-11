import classNames from "classnames"
import { getClasses } from "../../../../theme/functions/getClasses"
import { TagProps } from "../Tag"

interface StyleProps {
  variant: TagProps["variant"]
  color?: TagProps["color"]
}

export const getStyles = ({ variant, color = "primary" }: StyleProps) => {
  const { bg, bgLight, hover, text, coloredText } = getClasses({ color })

  const styles = classNames(
    "flex",
    "items-center",
    "rounded-[999px]",
    "gap-[4px]",
    "px-[8px]",
    "py-[2px]",
    "max-w-fit",
    "font-inter",
    "text-sm",
    {
      ...(variant == "plain" ? { ...bgLight, ...coloredText } : null),
      ...(variant == "filled" ? { ...bg, ...text } : null),
    }
  )

  return styles
}
