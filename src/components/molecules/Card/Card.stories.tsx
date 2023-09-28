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
  args: {
    color: "primary",
    title: "Heading",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus sit sit facilisis dictumst.",
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

export default meta
