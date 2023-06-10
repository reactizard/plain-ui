import { Meta, StoryObj } from "@storybook/react"
import { Chip } from "./Chip"

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Chip>

export const Primary: Story = {
  args: {
    text: "Chip",
    color: "primary",
    variant: "filled",
  },
}
