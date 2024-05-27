import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"
import { screen, fireEvent } from "@testing-library/react"
import { Pagination } from "./Pagination"

describe("Pagination component", () => {
  it("should navigate to the next page when next button is clicked on a middle page", () => {
    const handlePageChange = jest.fn()
    render(
      <Pagination
        currentPage={2}
        onPageChange={handlePageChange}
        totalCount={100}
        perPage={10}
        color="primary"
        variant="filled"
      />
    )
    const nextButton = screen.getByTestId("pg-right")
    fireEvent.click(nextButton)
    expect(handlePageChange).toHaveBeenCalledWith(3)
  })
})
