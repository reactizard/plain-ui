interface StyleProps {
  align?: "left" | "center" | "right"
  media?: boolean
  itemTypes?: ("media" | "text")[]
}

const alignMapper = {
  left: "items-start justify-start",
  center: "items-center justify-center",
  right: "items-end justify-end",
}
export const getStyles = ({ align, media, itemTypes }: StyleProps) => {
  const topItemIsMedia = itemTypes?.[0] === "media"
  const bottomItemIsMedia = itemTypes?.[itemTypes.length - 1] === "media"

  const groupContainer =
    "flex flex-row w-fit shadow-md hover:shadow-lg border rounded-lg"
  const groupDivider = "w-10 h-auto my-5"
  const groupItem = {
    first: "rounded-l-lg border-r-0 shadow-none",
    last: "border-r-lg border-l-0 shadow-none",
    middle: "rounded-none",
  }

  const contentContainer = [
    "flex",
    media ? "px-0" : "px-4",
    align && alignMapper[align],
  ]

  const cardContainer = [
    "flex flex-col gap-4  box-content mx-2 py-10 overflow-scroll",
    align && alignMapper[align],
    topItemIsMedia ? "pt-0" : "pt-10",
    bottomItemIsMedia ? "pb-0" : "pb-10",
  ]

  const cardContainerNotGrouped = [
    "border-2 rounded-lg shadow-md hover:shadow-lg",
  ]
  return {
    groupContainer,
    groupDivider,
    groupItem,

    contentContainer,

    cardContainer,
    cardContainerNotGrouped,
  }
}
