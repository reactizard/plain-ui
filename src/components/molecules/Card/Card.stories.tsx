import { Meta, StoryObj } from "@storybook/react"
import { IconHeart, IconMessage, IconShare3 } from "@tabler/icons-react"
import React from "react"
import Avatar from "../../atoms/Avatar"
import Button from "../../atoms/Button"
import Label from "../../atoms/Label"
import Card from "./Card"
const meta: Meta<typeof Card> = {
  title: "molecules/Card",
  component: Card,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Card>

export const primary: Story = {
  args: {
    color: "primary",
    title: "Heading",
    users: (
      <Avatar.Group>
        <Avatar size="sm">React</Avatar>
        <Avatar
          size="sm"
          imgURL="https://avatars.githubusercontent.com/u/16508504?v=4"
        />
        <Avatar size="sm">Node</Avatar>
        <Avatar size="sm">Tailwind</Avatar>
        <Avatar size="sm">Tailwind</Avatar>
        <Avatar size="sm">Tailwind</Avatar>
      </Avatar.Group>
    ),
    actions: [<Button key="1">Edit</Button>, <Button key="2">Delete</Button>],
    stats: [
      <div key="1" className="flex items-center gap-[4px]">
        <IconHeart />
        <Label text="15" />
      </div>,
      <div key="1" className="flex items-center gap-[4px]">
        <IconMessage />
        <Label text="15" />
      </div>,
      <div key="1" className="flex items-center gap-[4px]">
        <IconShare3 />
        <Label text="15" />
      </div>,
    ],
  },
}

export default meta
