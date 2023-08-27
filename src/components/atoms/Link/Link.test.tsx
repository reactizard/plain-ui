import "@testing-library/jest-dom/extend-expect"
import { createEvent, fireEvent, render } from "@testing-library/react"
import React from "react"
import Link from "./Link"

describe("Link component", () => {
  test("renders properly", () => {
    const { getByText } = render(
      <Link href="http://www.google.com" text="google" />
    )
    const linkText = getByText("google")
    expect(linkText).toBeInTheDocument()
  })

  test("shows underline on hover if underline props is truthy", () => {
    const { getByText } = render(
      <Link href="http://www.google.com" text="google" underline={true} />
    )
    const linkItem = getByText("google")
    fireEvent.mouseEnter(linkItem)
    expect(linkItem).toHaveClass("hover:underline")
  })

  test("can not be clicked when disabled", () => {
    const { getByText } = render(
      <Link href="http://www.google.com" text="google" disabled />
    )
    const linkItem = getByText("google")
    const myEvent = createEvent.click(linkItem)

    fireEvent(linkItem, myEvent)
    expect(myEvent.defaultPrevented).toBeTruthy()
  })
})
