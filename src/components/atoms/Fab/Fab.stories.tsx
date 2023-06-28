import { Meta, StoryObj } from "@storybook/react"
import {
  IconChevronUp,
  IconMessageCircle2,
  IconMoodBoy,
  IconPlus,
} from "@tabler/icons-react"
import React from "react"
import { Fab, FabProps } from "./Fab"

const icons = {
  IconMessageCircle2: <IconMessageCircle2 />,
  IconPlus: <IconPlus />,
  IconMoodBoy: <IconMoodBoy />,
  IconChevronUp: <IconChevronUp />,
}

const meta: Meta<typeof Fab> = {
  title: "Atoms/Fab",
  component: Fab,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Fab>

export const Primary: Story = (args: FabProps) => <Fab {...args} />

Primary.args = {
  text: "",
  color: "primary",
  icon: icons.IconPlus,
}
