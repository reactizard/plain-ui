import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"

import Label from "./Label"

describe("Label", () => {
  test("should render a label with the correct text", () => {
    const label = <Label text="This is a label" />
    const { getByText } = render(label)
    const renderedLabel = getByText("This is a label")
    expect(renderedLabel).toBeInTheDocument()
  })

  test("should render a label with the correct color", () => {
    const label = <Label text="This is a label" color="primary" />
    const { getByText } = render(label)
    const renderedLabel = getByText("This is a label")
    expect(renderedLabel).toBeInTheDocument()
    expect(renderedLabel).toHaveClass("text-primary-500")
  })

  test("should render a label with the correct variant", () => {
    const label = <Label text="This is a label" weight="md" />
    const { getByText } = render(label)
    const renderedLabel = getByText("This is a label")
    expect(renderedLabel).toBeInTheDocument()
    expect(renderedLabel).toHaveClass("text-mdRegular")
    expect(renderedLabel).not.toHaveClass("text-mdSemiBold")
  })
})
