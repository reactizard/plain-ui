import { Meta, StoryObj } from "@storybook/react"
import { Link } from "./Link"

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {
    href: "https://www.google.com",
    text: "Google",
    underline: true,
  },
}

export const TargetBlank: Story = {
  args: {
    href: "https://www.you.com",
    text: "you.com",
    underline: false,
    target: "_blank",
    color: "lime",
    size: "lg",
  },
}
