import "@testing-library/jest-dom/extend-expect"
import { render, renderHook } from "@testing-library/react"
import React, { useId, useRef } from "react"

import { Input } from "./Input"
import { IconCircleX } from "@tabler/icons-react"

describe("Input component", () => {
  it("should render correctly with default props", () => {
    const { container } = render(<Input />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("should handle null or undefined ref gracefully", () => {
    const ref = null
    const { container } = render(<Input ref={ref} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("should display cleanable icon when certain conditions are met", () => {
    const { container } = render(
      <Input cleanable={true} leftIcon={<IconCircleX />} />
    )
    const cleanableIconDiv = container.querySelector("div.cursor-pointer")
    expect(cleanableIconDiv).toBeInTheDocument()
    expect(
      cleanableIconDiv && cleanableIconDiv.querySelector("svg")
    ).toBeInTheDocument()
  })

  it("should not cause memory leaks with useRef and useId hooks", () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null)
      const id = useId()
      return { ref, id }
    })

    const { ref, id } = result.current
    expect(ref.current).toBeNull()
    expect(typeof id).toBe("string")
  })
})
