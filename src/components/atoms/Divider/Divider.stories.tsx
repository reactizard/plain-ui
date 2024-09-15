import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Button from "../Button/Button"
import Divider from "./Divider"

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof Divider>
export const primary: Story = {
  args: {
    label: "Text",
    labelPosition: "center",
  },
  decorators: [
    (Story) => (
      <div className="h-[300px] flex items-center">
        <Story />
      </div>
    ),
  ],
}

export const button: Story = {
  args: {
    label: (
      <Button color="purple" variant="outlined">
        Button
      </Button>
    ),
    labelPosition: "center",
  },
}
