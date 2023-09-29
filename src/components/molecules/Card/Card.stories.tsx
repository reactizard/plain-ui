import { Meta, StoryObj } from "@storybook/react"
import { IconHeartFilled, IconMessage, IconShare3 } from "@tabler/icons-react"
import React from "react"
import { Avatar, Button, Tag } from "../.."
import Card from "./Card"
const meta: Meta<typeof Card> = {
  title: "molecules/Card",
  component: Card,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Card>

export const primary: Story = {
  argTypes: {
    tags: { type: "function" },
    users: { type: "function" },
    actions: { type: "function" },
    stats: { type: "function" },
  },
  args: {
    title: "Heading",
    orientation: "vertical",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    cover:
      "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: [
      <Tag size="sm" text="React" color="azure" variant="filled" key="t1" />,
      <Tag size="sm" text="Tailwind" color="pink" variant="filled" key="t2" />,
    ],
    users: (
      <Avatar.Group more={19} size="sm">
        <Avatar>React</Avatar>
        <Avatar imgURL="https://avatars.githubusercontent.com/u/16508504?v=4" />
        <Avatar>Node</Avatar>
        <Avatar>Tailwind</Avatar>
      </Avatar.Group>
    ),
    actions: [
      <Button key="b1" color="primary">
        Edit
      </Button>,
      <Button key="b2">Delete</Button>,
    ],
    stats: [
      {
        icon: (
          <IconHeartFilled
            className="text-xsRegular text-sky-500 cursor-pointer"
            size={15}
          />
        ),
        number: 15,
      },
      {
        icon: <IconMessage className="text-xsRegular text-sky-500" size={15} />,
        number: 10,
      },
      {
        icon: <IconShare3 className="text-xsRegular text-sky-500" size={15} />,
        number: 12,
      },
    ],
  },
}

export const TextOnly: Story = {
  args: {
    title: "What is Lorem Ipsum?",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
}

export default meta
