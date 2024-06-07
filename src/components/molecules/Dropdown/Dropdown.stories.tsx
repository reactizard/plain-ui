
import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Dropdown from "./Dropdown"
const meta: Meta<typeof Dropdown> = {
  title: "molecules/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Dropdown>

export const primary: Story = {
  args: {
    color:"primary"
  },
}

export default meta
