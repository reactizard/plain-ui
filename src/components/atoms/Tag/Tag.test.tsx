import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import React from "react"

import Tag from "./Tag"
import { TagProps } from "./utils/types"

describe("Tag component", () => {
  const testProps: TagProps = {
    text: "Test Tag",
    variant: "filled",
    color: "primary",
  }

  test("renders tag text correctly", () => {
    render(<Tag {...testProps} />)
    const tagElement = screen.getByText(testProps.text)
    expect(tagElement).toBeInTheDocument()
  })

  test("applies the correct variant class", () => {
    render(<Tag {...testProps} />)
    const tagElement = screen.getByText(testProps.text)
    expect(tagElement).toHaveClass("bg-primary-500", "text-white")
  })

  test("applies the correct color class", () => {
    render(<Tag {...testProps} />)
    const tagElement = screen.getByText(testProps.text)
    expect(tagElement).toHaveClass("bg-primary-500")
  })
})
