import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
} from "@tabler/icons-react"

import { PaginationProps } from "./utils/types"

import React from "react"
import { usePagination } from "./utils/usePagination"

import { getStyles } from "./utils/styles"
import classNames from "classnames"
import { bg } from "../../../theme/mapper"

const Pagination = ({
  currentPage = 1,
  onPageChange,
  totalCount,
  perPage = 10,
  color = "primary",
  variant = "filled",
}: PaginationProps) => {
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
              className={classNames(
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
          <IconChevronRight size={15} />
        </ul>
      </li>
    </nav>
  )
}

export default Pagination
