import "@testing-library/jest-dom/extend-expect"
import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
  renderHook,
} from "@testing-library/react"
import React from "react"

import { Dropdown } from "./Dropdown"
import { MenuItemShape } from "./utils/types"
import { useDropdownSafeArea } from "./utils/useSafePosition"

const items: MenuItemShape[] = [
  { key: "item1", label: "Item 1" },
  { key: "item2", label: "Item 2" },
  { key: "item3", label: "Item 3" },
]

describe("Dropdown Accessibility", () => {
  test("opens and closes with Enter and Escape keys", () => {
    const { getByText } = render(
      <Dropdown
        items={items}
        opener={({ ref, setIsOpen }) => (
          <button
            ref={ref}
            onClick={() => {
              setIsOpen(true)
            }}
          >
            Open Dropdown
          </button>
        )}
      />
    )
    const opener = getByText("Open Dropdown")
    fireEvent.click(opener)
    const menu = screen.queryByRole("menu")
    expect(menu).toBeInTheDocument()

    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    })
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()

    fireEvent.click(opener)
    expect(screen.queryByRole("menu")).toBeInTheDocument()
    fireEvent.keyDown(document, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    })

    expect(menu).not.toBeInTheDocument()
  })
})

describe("useDropdownSafeArea", () => {
  const triggerRef: any = { current: null }
  const dropdownRef: any = { current: null }
  const threshold = 5
  beforeEach(() => {
    triggerRef.current = document.createElement("div")
    dropdownRef.current = document.createElement("div")
  })

  it("should calculate position correctly when there's enough space above", () => {
    triggerRef.current.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      bottom: 200,
      height: 50,
      left: 100,
    }))
    dropdownRef.current.getBoundingClientRect = jest.fn(() => ({
      height: 200,
    }))
    window.innerHeight = 500

    const { result } = renderHook(() =>
      useDropdownSafeArea({ triggerRef, dropdownRef, isOpen: true })
    )

    act(() => {
      window.dispatchEvent(new Event("resize"))
    })

    expect(result.current.safeArea).toEqual({ top: 60 - threshold, left: 0 })
  })
})
