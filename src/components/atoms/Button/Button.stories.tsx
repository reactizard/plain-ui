import { Meta, StoryObj } from "@storybook/react"
import {
  IconBrandFacebookFilled,
  IconBrandGithub,
  IconBrandReact,
  IconBrandTwitterFilled,
  IconChevronUp,
  IconMessageCircle2,
  IconMoodBoy,
  IconPlus,
} from "@tabler/icons-react"
import React from "react"
import { Button } from "./Button"

const icons = {
  None: null,
  "Message Circle": <IconMessageCircle2 />,
  Plus: <IconPlus />,
  "Mood Boy": <IconMoodBoy />,
  "Chevron Up": <IconChevronUp />,
  Github: <IconBrandGithub />,
  React: <IconBrandReact />,
  Facebook: <IconBrandFacebookFilled />,
  Twitter: <IconBrandTwitterFilled />,
}

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    leftIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
    rightIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
}
type Story = StoryObj<typeof Button>

export const primary: Story = {
  args: {
    children: "Button",
    color: "purple",
    size: "sm",
  },
}

export default meta
