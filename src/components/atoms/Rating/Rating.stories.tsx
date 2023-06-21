import { Meta, StoryObj } from "@storybook/react"
import Rating from "./Rating"

const meta: Meta<typeof Rating> = {
  title: "Atoms/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    count: {
      description: "from 1 to 20",
    },
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Primary: Story = {
  args: {
    color: "yellow",
    size: "sm",
    variant: "star",
  },
}
