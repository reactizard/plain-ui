
import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Pagination from "./Pagination"
const meta: Meta<typeof Pagination> = {
  title: "molecules/Pagination",
  component: Pagination,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Pagination>

export const primary: Story = {
  args: {
    color:"primary"
  },
}

export default meta
