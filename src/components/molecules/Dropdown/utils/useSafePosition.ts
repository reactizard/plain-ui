import { useState, useEffect } from "react"

interface Props {
  triggerRef: React.RefObject<HTMLElement>
  dropdownRef: React.RefObject<HTMLElement>
  isOpen: boolean
}

export const useDropdownSafeArea = ({
  triggerRef,
  dropdownRef,
  isOpen,
}: Props) => {
  const [safeArea, setSafeArea] = useState<object | null>(null)
  const threshold = 5

  const calculatePosition = () => {
    if (!triggerRef.current || !dropdownRef.current) return
    const triggerRect = triggerRef.current.getBoundingClientRect()
    const dropdownRect = dropdownRef.current.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    const spaceAbove = triggerRect.top
    const spaceBelow =
      viewportHeight - triggerRect.bottom + triggerRect.height - threshold
    const spaceLeft = triggerRect.left

    const hasMoreSpaceAbove = spaceAbove > spaceBelow
    const hasLowSpaceVertically =
      dropdownRect.height > spaceAbove && dropdownRect.height > spaceBelow

    if (hasLowSpaceVertically && hasMoreSpaceAbove) {
      setSafeArea({ bottom: threshold + triggerRect.height })
    } else {
      setSafeArea({ top: threshold + triggerRect.height })
    }

    if (spaceLeft >= dropdownRect.width) {
      setSafeArea((prev) => ({ ...prev, right: 0 }))
    } else {
      setSafeArea((prev) => ({ ...prev, left: 0 }))
    }
  }

  const removeListener = () => {
    window.removeEventListener("resize", calculatePosition)
    window.removeEventListener("scroll", calculatePosition)
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        calculatePosition()
      }, 1)
    } else if (!isOpen) {
      removeListener()
    }
    window.addEventListener("resize", calculatePosition)
    window.addEventListener("scroll", calculatePosition)
    return () => {
      removeListener()
    }
  }, [isOpen])

  return { safeArea }
}
