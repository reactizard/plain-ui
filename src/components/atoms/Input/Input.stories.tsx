import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Input from "./Input"
import { IconAlertCircle, IconMessage } from "@tabler/icons-react"
const meta: Meta<typeof Input> = {
  title: "atoms/Input",
  component: Input,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Input>

export const primary: Story = {
  args: {
    color: "primary",
    placeholder: "Email Email Email Email Email Email",
    leftIcon: <IconMessage />,
    rightIcon: <IconAlertCircle />,
  },
}

export default meta
