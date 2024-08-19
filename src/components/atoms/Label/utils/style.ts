import { StyleProps } from "./types"
import { text } from "../../../../theme/mapper"
import { FontNames } from "../../../../theme/constants/font"

export const getStyles = ({ weight = "md", color }: StyleProps) => {
  const SizeMapper = Object.entries(FontNames).reduce(
    (acc: any, [key, value]) => {
      Object.entries(value).forEach(([subKey]) => {
        acc[key] = `text-${subKey}`
      })
      return acc
    },
    {} as Record<string, any[]>
  )

  const label = [color ? text[color][500] : "", SizeMapper[weight]]
  return { label }
}
