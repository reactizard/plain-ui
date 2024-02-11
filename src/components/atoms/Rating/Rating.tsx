import React, { forwardRef, useState } from "react"
import { Shapes, maxStar, minStar } from "./utils/constants"
import { container, sizeMapper, svgItem } from "./utils/styles"
import { RatingProps } from "./utils/types"

export const Rating: React.FC<RatingProps> = forwardRef<
  HTMLDivElement,
  RatingProps
>(function Rating(
  { color = "yellow", size = "sm", variant = "heart", count = 5 },
  ref
) {
  const [rating, setRating] = useState(0)

  count = Math.round(Math.min(maxStar, Math.max(minStar, count)))

  return (
    <div className={container} ref={ref}>
      {[...Array(count)].map((_, index) => {
        const starValue = index + 1

        return (
          <svg
            viewBox="0 0 16 14"
            key={index}
            width={sizeMapper[size]}
            height={sizeMapper[size]}
            className={svgItem({ color })}
            onClick={() => {
              setRating(starValue == rating ? index : starValue)
            }}
          >
            <path
              d={
                starValue <= rating
                  ? Shapes[variant].filled
                  : Shapes[variant].outlined
              }
            />
          </svg>
        )
      })}
    </div>
  )
})
export default Rating
