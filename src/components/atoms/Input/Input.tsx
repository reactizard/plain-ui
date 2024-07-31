import React, { forwardRef } from "react"
import { InputProps } from "./utils/types"
import { getStyles } from "./utils/styles"
import "./utils/styles.css"
export const Input = forwardRef<HTMLDivElement, InputProps>(function Input(
  { label, placeholder, leftIcon, rightIcon, value, type = "text", ...props },
  ref
) {
  const styles = getStyles({})

  return (
    <div className="relative w-fit" ref={ref}>
      <div className="absolute inset-y-0 flex items-center pl-2 pointer-events-none text-gray-500">
        {leftIcon}
      </div>
      <input
        type={type}
        id={label}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-gray-500">
        {rightIcon}
      </div>
    </div>
  )
})
export default Input
//shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
