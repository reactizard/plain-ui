import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Button from "../Button/Button"
import Tooltip from "./Tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  args: {
    text: "Hello there youtube",
    children: <Button color="primary">Button</Button>,
    position: "top",
  },
  argTypes: {
    children: {
      type: "function",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-32">
        <Story />
      </div>
    ),
  ],
}
