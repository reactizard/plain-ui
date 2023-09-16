import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import React from "react"
import Banner from "./Banner"
import { BannerProps } from "./utils/types"

describe("Banner component", () => {
  test("should render with simple title and subtitle and icon", () => {
    const title = "Banner"
    const subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing"
    const { getByText, container } = render(
      <Banner title={title} subtitle={subtitle} />
    )

    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(subtitle)).toBeInTheDocument()
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("should render a banner without icon", () => {
    const props: BannerProps = {
      title: "No Icon",
      icon: null,
    }
    render(<Banner {...props} />)

    expect(screen.getByText("No Icon")).toBeInTheDocument()
    expect(screen.queryByTestId("default-icon")).toBeNull()
  })
})
