import { Meta, StoryObj } from "@storybook/react"
import Label from "./Label"

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Label>

export const Primary: Story = {
  args: {
    color: undefined,
    text: "Hello There",
  },
}
