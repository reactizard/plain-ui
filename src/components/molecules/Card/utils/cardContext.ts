import { createContext } from "react"

interface CardShape {
  width: number
  height: number
  align: "left" | "center" | "right"
  group?: { current: number; total: number }
}

export const CardContext = createContext<CardShape>({
  width: 0,
  height: 0,
  align: "left",
  group: { current: 0, total: 0 },
})
