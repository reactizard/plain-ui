import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
} from "@tabler/icons-react"

import { PaginationProps } from "./utils/types"

import React from "react"
import { usePagination } from "./utils/usePagination"

import { getStyles } from "./utils/styles"
import { twMerge } from "tailwind-merge"

const DEFAULT_PER_PAGE = 10
export const Pagination = ({
  currentPage = 1,
  onPageChange,
  totalCount,
  perPage = DEFAULT_PER_PAGE,
  color = "primary",
  variant = "filled",
}: PaginationProps) => {
  perPage = perPage < 1 ? DEFAULT_PER_PAGE : perPage
  const lastPage = Math.ceil(totalCount / perPage)

  const pages = usePagination({
    currentPage: currentPage,
    pageSize: perPage,
    siblingCount: 2,
    totalCount,
  })

  const onItemClick = (item: number | string) => {
    if (typeof item == "number") onPageChange(item)
  }

  const styles = getStyles({ currentPage, lastPage, color, variant })
  return (
    <nav className={styles.container}>
      <li className={styles.listWrapper}>
        <ul
          className={styles.prevButton}
          onClick={() => {
            currentPage > 1 ? onItemClick(currentPage - 1) : null
          }}
        >
          <IconChevronLeft size={15} />
        </ul>
        {pages &&
          pages.map((item: any, i: number) => (
            <ul
              key={i}
              onClick={() => onItemClick(item)}
              className={twMerge(
                styles.pages,
                item == currentPage ? styles.active : ""
              )}
            >
              {item === "..." ? <IconDots size={15} /> : item}
            </ul>
          ))}
        <ul
          className={styles.nextButton}
          onClick={() => {
            currentPage < lastPage ? onItemClick(currentPage + 1) : null
          }}
        >
          <IconChevronRight size={15} data-testid="pg-right" />
        </ul>
      </li>
    </nav>
  )
}

export default Pagination
