import { Meta, StoryObj } from "@storybook/react"
import Avatar from "./Avatar"
const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Avatar>

export const primary: Story = {
  args: {
    children: "Adam smith",
    imgURL: "https://avatars.githubusercontent.com/u/16508504?v=4",
  },
}

export default meta
