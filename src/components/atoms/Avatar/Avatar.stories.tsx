import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Avatar from "./Avatar"
import AvatarGroup from "./Group/AvatarGroup"
import { AvatarProps } from "./utils/types"
const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Avatar>
type AvatarGroupStory = StoryObj<typeof AvatarGroup>

export const Primary: Story = {
  args: {
    size: "md",
    children: "Adam smith",
    onlineStatus: "online",
    imgURL: "https://avatars.githubusercontent.com/u/16508504?v=4",
  },
  argTypes: {
    children: {
      description: "imgURL will take precedence over children",
    },
  },
}

const GroupTemplate: AvatarGroupStory = {
  argTypes: { more: Number },
  args: { more: 9 },
  render: ({ items, ...args }: any) => {
    return (
      <Avatar.Group {...args}>
        {items.map((item: object, index: number) => {
          return <Avatar {...item} key={index} />
        })}
      </Avatar.Group>
    )
  },
}

const AvatarItemProps: AvatarProps[] = [
  { children: "Hello" },
  {
    onlineStatus: "online",
    imgURL: "https://avatars.githubusercontent.com/u/16508504?v=4",
  },
  { children: "Adam Smith" },
  { children: "Robert Bruce" },
]
export const GroupAvatar: object = {
  ...GroupTemplate,
  args: { items: AvatarItemProps },
}

export default meta
