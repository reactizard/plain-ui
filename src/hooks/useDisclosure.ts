import { useState } from "react"

export default function useDisclosure(
  initialState = false,
  callbacks?: { onOpen?(): void; onClose?(): void }
) {
  const { onOpen, onClose } = callbacks || {}
  const [opened, setOpened] = useState(initialState)

  const open = () => {
    setOpened((isOpened: any) => {
      if (!isOpened) {
        onOpen?.()
        return true
      }
      return isOpened
    })
  }
  const close = () => {
    setOpened((isOpened: any) => {
      if (isOpened) {
        onClose?.()
        return false
      }
      return isOpened
    })
  }

  const toggle = () => {
    opened ? close() : open()
  }

  return [opened, { open, close, toggle }] as const
}
