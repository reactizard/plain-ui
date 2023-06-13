import { Meta, StoryObj } from "@storybook/react"
import {
  IconChevronUp,
  IconMessageCircle2,
  IconMoodBoy,
  IconPlus,
} from "@tabler/icons-react"
import React from "react"
import Label from "./Label"

const icons = {
  Message: <IconMessageCircle2 />,
  Plus: <IconPlus />,
  MoodBoy: <IconMoodBoy />,
  ChevronUp: <IconChevronUp />,
  Hello: "Hello",
}

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    text: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Primary: Story = {
  args: {
    color: undefined,
    text: "Hello There",
  },
}
