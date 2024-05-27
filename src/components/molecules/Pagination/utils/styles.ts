import classNames from "classnames"
import { StyleProps } from "./types"
import { bg, border, hover, text } from "../../../../theme/mapper"

export const getStyles = ({
  color = "primary",
  currentPage,
  lastPage,
  variant,
}: StyleProps) => {
  type variantColorType = Record<
    NonNullable<StyleProps["variant"]>,
    Array<string>
  >
  const container = classNames(["flex", "justify-center", "mt-4"])
  const listWrapper = classNames(["flex", "gap-[2px]"])

  const outlined = [
    "border",
    border[color][700],
    text[color][700],
    hover["gray"][200],
  ]
  const filled = [
    bg[color][500],
    hover[color][600],
    "text-white",
    "0opacity-50",
  ]
  const plain = [hover["gray"][200]]
  const variantColor: variantColorType = { filled, outlined, plain }

  const prevButton = classNames([
    "px-1",
    "rounded",
    variant && variantColor[variant],
    "flex",
    "items-center",
    currentPage == 1 ? "disabled cursor-not-allowed" : "cursor-pointer",
  ])
  const nextButton = classNames([
    "px-1",
    "rounded",
    variant && variantColor[variant],
    "flex",
    "items-center",
    currentPage == lastPage ? "disabled cursor-not-allowed" : "cursor-pointer",
  ])
  const pages = classNames([
    "px-1",
    "rounded",
    variant && variantColor[variant],
    "flex",
    "items-center",
    "cursor-pointer",
    "min-w-[30px]",
    "justify-center",
  ])

  const activeCls: variantColorType = {
    filled: [
      bg[color][500],
      "text-white",
      border[color][300],
      "border-2",
      "brightness-125",
    ],
    outlined: [
      bg[color][500],
      "text-white",
      "border-2",
      border[color][300],
      hover[color][500],
    ],
    plain: [
      bg[color][200],
      text["gray"][700],
      "border-2",
      border[color][100],
      hover[color][200],
    ],
  }
  const active = variant && activeCls[variant]
  return { container, listWrapper, prevButton, nextButton, pages, active }
}
