import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"

import { Card } from "./Card"

describe("Card component", () => {
  test("renders properly", () => {
    const { getByTestId } = render(<Card />)
    expect(getByTestId("card")).toBeInTheDocument()
  })

  test("should render a card with all props", () => {
    const { getByTestId } = render(
      <Card
        variant="card"
        title="Title"
        subtitle="Subtitle"
        cover="cover.jpg"
        tags={[<div key="tag">Tag</div>]}
        users={<div>Users</div>}
        orientation="vertical"
        actions={[<button key="action">Action</button>]}
        stats={[{ icon: <div key="icon">Icon</div>, number: 5 }]}
      />
    )
    expect(getByTestId("card")).toBeInTheDocument()
  })
})
