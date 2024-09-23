import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render, screen } from "@testing-library/react"
import { Card } from "./Card"

describe("Card", () => {
  // ... existing imports and setup ...

  it("renders children correctly", () => {
    render(<Card>Test Content</Card>)
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("applies custom width and height", () => {
    render(
      <Card width={200} height={100}>
        Test Content
      </Card>
    )
    const cardContainer = screen.getByText("Test Content").closest("div")
    expect(cardContainer).toHaveStyle({ width: "200px", height: "100px" })
  })

  it("applies default width and height when not provided", () => {
    render(<Card>Test Content</Card>)
    const cardContainer = screen.getByText("Test Content").closest("div")
    expect(cardContainer).toHaveStyle({ width: "40vw", height: "inherit" })
  })

  it("applies alignment class correctly", () => {
    render(<Card align="center">Test Content</Card>)
    const cardContainer = screen.getByText("Test Content").closest("div")
    expect(cardContainer).toHaveClass("items-center")
  })

  it("applies custom className", () => {
    render(<Card className="custom-class">Test Content</Card>)
    const cardContainer = screen.getByText("Test Content").closest("div")
    expect(cardContainer).toHaveClass("custom-class")
  })
})
