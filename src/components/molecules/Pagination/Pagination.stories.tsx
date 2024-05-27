import { Meta, StoryObj } from "@storybook/react"
import { useArgs } from "@storybook/preview-api"

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
    color: "primary",
    totalCount: 110,
    currentPage: 5,
    perPage: 10,
    variant: "filled",
    onPageChange: (page) => {
      console.log(page)
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs()

    return (
      <Pagination
        {...args}
        onPageChange={(page) => updateArgs({ currentPage: page })}
      />
    )
  },
}

export default meta
