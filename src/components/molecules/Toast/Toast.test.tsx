import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import React from "react"
import Toast from "./Toast"

jest.setTimeout(15000)

describe("Toast component", () => {
  test("renders properly", () => {
    const { getByText } = render(<Toast color="aloha" title="Success" />)
    const component = getByText("Success")
    expect(component).toBeInTheDocument()
  })

  test("unmount after 10s by default or if autoClose=true", async () => {
    const { getByText } = render(<Toast color="aloha" title="Success" />)
    const component = getByText("Success")
    await waitFor(
      () => {
        expect(component).not.toBeInTheDocument()
      },
      { timeout: 11000 }
    )
  })
})
