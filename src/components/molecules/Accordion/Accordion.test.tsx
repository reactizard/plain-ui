import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"

import { IconChevronDown } from "@tabler/icons-react"
import { Accordion } from "."

describe("Accordion component", () => {
  it("should render the accordion container with the correct styles and classes", () => {
    // Arrange
    const data = [
      { label: "Item 1", children: "Content 1" },
      { label: "Item 2", children: "Content 2" },
    ]
    const collapseIcon = <IconChevronDown />
    const color = "warm"
    const size = "md"
    const multiActive = false

    // Act
    const { getByTestId } = render(
      <Accordion
        data={data}
        collapseIcon={collapseIcon}
        color={color}
        size={size}
        multiActive={multiActive}
      />
    )

    // Assert
    const container = getByTestId("accordion-container")
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass("mx-auto", "flex", "flex-col", "gap-2")
    expect(container).toHaveClass("w-[600px]")
  })

  it("should render each item in the data array with the correct styles and classes", () => {
    const data = [
      { label: "Item 1", children: "Content 1" },
      { label: "Item 2", children: "Content 2" },
    ]
    const collapseIcon = <IconChevronDown />
    const color = "warm"
    const size = "md"
    const multiActive = false

    const { getAllByTestId } = render(
      <Accordion
        data={data}
        collapseIcon={collapseIcon}
        color={color}
        size={size}
        multiActive={multiActive}
      />
    )

    const itemHeaders = getAllByTestId("accordion-item-header")
    expect(itemHeaders).toHaveLength(2)
    expect(itemHeaders[0]).toHaveClass(
      "p-3",
      "flex",
      "items-center",
      "justify-between"
    )
    expect(itemHeaders[1]).toHaveClass(
      "p-3",
      "flex",
      "items-center",
      "justify-between"
    )
  })

  it("should handle an empty data array", () => {
    const data: any[] = []
    const collapseIcon = <IconChevronDown />
    const color = "warm"
    const size = "md"
    const multiActive = false

    const { queryByTestId } = render(
      <Accordion
        data={data}
        collapseIcon={collapseIcon}
        color={color}
        size={size}
        multiActive={multiActive}
      />
    )

    expect(queryByTestId("accordion-item-header")).not.toBeInTheDocument()
  })
})
