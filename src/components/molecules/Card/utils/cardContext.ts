import { createContext } from "react"

interface CardShape {
  width: number
  height: number
}

export const CardContext = createContext<CardShape>({ width: 0, height: 0 })
