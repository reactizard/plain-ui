import React, { FC, forwardRef, useEffect, useRef } from "react"
import { InputProps } from "./utils/types"
import { getStyles } from "./utils/styles"
import { IconAlertCircle, IconMessage } from "@tabler/icons-react"
import "./utils/styles.css"
export const Input = forwardRef(function Input({
  label,
  placeholder,
  type = "text",
  ...props
}: InputProps) {
  const styles = getStyles({})
  return (
    <div className="relative w-fit">
      <div className="absolute inset-y-0 flex items-center pl-2 pointer-events-none text-gray-500">
        <IconMessage />
      </div>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-gray-500">
        <IconAlertCircle />
      </div>
    </div>
  )
})
export default Input
//shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
