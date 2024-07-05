import { RefObject } from "react"

export interface MenuItemShape {
  key: string
  label?: string
  extraElement?: React.ReactElement
}
interface OpenerProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ref: RefObject<any>
}
export interface DropdownProps {
  width?: number | string
  items?: MenuItemShape[]
  opener?: ({ isOpen, setIsOpen, ref }: OpenerProps) => React.ReactNode
  onItemClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}
export type StyleProps = Pick<DropdownProps, "items">
