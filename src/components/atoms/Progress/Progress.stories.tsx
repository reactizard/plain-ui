import { Meta, StoryObj } from "@storybook/react"
import Progress from "./Progress"

const meta: Meta<typeof Progress> = {
  title: "Atoms/Progress",
  component: Progress,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Primary: Story = {
  args: {
    color: "primary",
    label: "hello",
    progress: 30,
    size: "md",
    variant: "circle",
  },
}
