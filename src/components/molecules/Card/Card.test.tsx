import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"

import { Card } from "./Card"

describe("Card component", () => {
  test("renders properly", () => {
    const { getByTestId } = render(<Card data-testid="card" />)
    expect(getByTestId("card")).toBeInTheDocument()
  })
})
