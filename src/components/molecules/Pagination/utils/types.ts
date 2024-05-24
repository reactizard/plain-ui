import { ButtonVariant, Colors } from "../../../../theme/constants"

export interface PaginationHookProps {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}

export interface PaginationProps {
  currentPage: number
  totalCount: number
  perPage?: number
  onPageChange: (page: number) => void
  color?: Colors
  variant?: Extract<ButtonVariant, "outlined" | "filled" | "plain">
}

export type StyleProps = Pick<
  PaginationProps & { lastPage?: number },
  "color" | "variant" | "currentPage" | "lastPage"
>
