interface StyleProps {
  align?: "left" | "center" | "right"
}

const alignMapper = {
  left: "items-start justify-start",
  center: "items-center justify-center",
  right: "items-end justify-end",
}
export const getStyles = ({ align }: StyleProps) => {
  const groupContainer =
    "flex flex-row w-fit shadow-md hover:shadow-lg border rounded-lg"
  const groupDivider = "w-10 h-auto my-5"
  const groupItem = {
    first: "rounded-l-lg border-r-0 shadow-none",
    last: "border-r-lg border-l-0 shadow-none",
    middle: "rounded-none",
  }

  const contentContainer = ["flex", align && alignMapper[align]]

  const cardContainer = [
    "flex flex-col gap-4  box-content  px-4 py-10 overflow-scroll",
    align && alignMapper[align],
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
