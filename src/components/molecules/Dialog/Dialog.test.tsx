import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import React from "react"

import { Dialog } from "./Dialog"

describe("Dialog component", () => {
  it("should render a dialog with custom props when passed valid props", () => {
    const customTitle = "Custom Title"
    const customContent = "Custom Content"
    const customAction = "Custom Action"

    render(
      <Dialog
        open={true}
        title={customTitle}
        content={customContent}
        actions={[customAction]}
      />
    )

    expect(screen.getByText(customTitle)).toBeInTheDocument()
    expect(screen.getByText(customContent)).toBeInTheDocument()
    expect(screen.getByText(customAction)).toBeInTheDocument()
  })
})
