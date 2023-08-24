import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Avatar from "./Avatar"
const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Avatar>

export const primary: Story = {
  args: {
    size: "md",
    children: "Adam smith",
    imgURL: "https://avatars.githubusercontent.com/u/16508504?v=4",
  },
}

const GroupTemplate: Story = {
  argTypes: {},
  render: () => {
    return (
      <Avatar.Group more="10">
        <Avatar>Hello</Avatar>
        <Avatar
          onlineStatus="online"
          imgURL="https://avatars.githubusercontent.com/u/16508504?v=4"
        />
        <Avatar>Adam Smith</Avatar>
        <Avatar>Hello</Avatar>
      </Avatar.Group>
    )
  },
}

export const GroupAvatar = {
  ...GroupTemplate,
}

export default meta
