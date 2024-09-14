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
  },
}

export const rounded: Story = {
  args: {
    text: "Chip",
    color: "azure",
    variant: "filled",
    rounded: true,
  },
}
