import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"

import { Breadcrumb } from "./Breadcrumb"

describe("Breadcrumb component", () => {
  test("renders properly", () => {
    const { getByText } = render(<Breadcrumb>Home</Breadcrumb>)
    const breadCrumbText = getByText("Home")
    expect(breadCrumbText).toBeInTheDocument()
  })

  test("group renders properly", () => {
    const { getByText } = render(
      <Breadcrumb.Group>
        <Breadcrumb>Home</Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
      </Breadcrumb.Group>
    )

    expect(getByText("Home")).toBeInTheDocument()
    expect(getByText("Profile")).toBeInTheDocument()
  })

  test("group component contains correct number of children", () => {
    const { container } = render(
      <Breadcrumb.Group color="primary">
        <Breadcrumb color="aloha" data-testid="test1" id="hello">
          Homex
        </Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
      </Breadcrumb.Group>
    )
    expect(container.querySelectorAll(".pUI-Breadcrumb")).toHaveLength(2)
  })

  test("group component that contains more than 3 children will have a expander", () => {
    const { getByText } = render(
      <Breadcrumb.Group color="primary">
        <Breadcrumb>Home</Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
      </Breadcrumb.Group>
    )
    expect(getByText("...")).toBeInTheDocument()
  })
})
