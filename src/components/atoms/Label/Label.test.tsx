import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"

import Label from "./Label"

describe("Label", () => {
  test("should render a label with the correct text", () => {
    const label = <Label>This is a label</Label>
    const { getByText } = render(label)
    const renderedLabel = getByText("This is a label")
    expect(renderedLabel).toBeInTheDocument()
  })

  test("should render a label with the correct color", () => {
    const label = <Label color="primary">This is a label</Label>
    const { getByText } = render(label)
    const renderedLabel = getByText("This is a label")
    expect(renderedLabel).toBeInTheDocument()
    expect(renderedLabel).toHaveClass("text-primary-500")
  })

  test("should render a label with the correct variant", () => {
    const label = <Label weight="md">This is a label</Label>
    const { getByText } = render(label)
    const renderedLabel = getByText("This is a label")
    expect(renderedLabel).toBeInTheDocument()
    expect(renderedLabel).toHaveClass("text-mdRegular")
    expect(renderedLabel).not.toHaveClass("text-mdSemiBold")
  })
})
